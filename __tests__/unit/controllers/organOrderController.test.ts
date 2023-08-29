import { IncomingMessage, ServerResponse } from 'http';
import { organOrderController } from '../../../src/controllers/organOrderController';
import * as parseCsvModule from '../../../src/utils/parseCsvToJson';
import * as calculateOrgansModule from '../../../src/utils/calculateOrgans';
import * as sendResponseModule from '../../../src/utils/sendResponse';
import { HttpStatusCode, HttpStatusMessage, ResponseMessage } from '../../../src/enum/httpStatus';
import { RESPONSE_HEADER } from '../../../src/constants';

let parseCsvTOJsonSpy: jest.SpyInstance;
let calculateOrganSpy: jest.SpyInstance;
let sendResponseSpy: jest.SpyInstance;


describe('organOrderController', () => {
  let mockReq: Partial<IncomingMessage>;
  let mockRes: Partial<ServerResponse>;

  beforeEach(() => {
    mockReq = { method: 'POST', on: jest.fn() };
    mockRes = { writeHead: jest.fn(), end: jest.fn() };
    parseCsvTOJsonSpy = jest.spyOn(parseCsvModule, 'parseCSVToJson');
    calculateOrganSpy =  jest.spyOn(calculateOrgansModule, 'calculateOrgans');
    sendResponseSpy = jest.spyOn(sendResponseModule, 'sendResponse');;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle valid POST request', async () => {
    const mockOrder = [{ organ: 'liver', cash: 10, price: 5, bonusRatio: 2 }];
    const mockData = `
      organ,cash,price,bonus_ratio
      liver,10,5,2
    `;
    const resultMockOrder = 'heart 0, liver 2, lung 1';

    // Call the controller function with mockData
    await organOrderController(
      {
        ...mockReq,
        on: jest.fn((event, callback) => {
          if (event === 'data') {
            callback(Buffer.from(mockData));
          } else if (event === 'end') {
            callback();
          }
        }),
      } as unknown as IncomingMessage,
      mockRes as ServerResponse,
    );

    // Assertions
    expect(parseCsvTOJsonSpy).toHaveBeenCalledWith(mockData);
    expect(parseCsvTOJsonSpy).toHaveBeenCalledTimes(1);
    expect(calculateOrganSpy).toHaveBeenCalledWith(mockOrder[0]);
    expect(calculateOrganSpy).toHaveBeenCalledTimes(mockOrder.length);
    expect(sendResponseSpy).toHaveBeenCalledWith(
      mockRes,
      resultMockOrder,
      HttpStatusCode.OK,
      RESPONSE_HEADER,
    );
  });

  it('should handle invalid POST request', async () => {
    mockReq.method = 'GET'; // Change method to GET to invalid request

    await organOrderController(
      mockReq as IncomingMessage,
      mockRes as ServerResponse
    );

    expect(sendResponseSpy).toHaveBeenCalledWith(
      mockRes,
      `Error: ${HttpStatusMessage.BAD_REQUEST} : ${ResponseMessage.WRONG_METHOD_TYPE}`,
      HttpStatusCode.BAD_REQUEST,
      RESPONSE_HEADER
    );
  });
});
