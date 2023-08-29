import { IncomingMessage, ServerResponse } from 'http';

import { parseCSVToJson } from '../utils/parseCsvToJson';
import { calculateOrgans } from '../utils/calculateOrgans';

import { OrganOrder } from '../types/organOrder';
import { sendResponse } from '../utils/sendResponse';
import {
  HttpStatusCode,
  HttpStatusMessage,
  ResponseMessage,
} from '../enum/httpStatus';
import { RESPONSE_HEADER } from '../constants';

export const organOrderController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  try {
    const { method } = req;
    if (method === 'POST') {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });

      req.on('end', () => {
        try {
          if (!data) {
            throw new Error(
              `${HttpStatusMessage.BAD_REQUEST} : ${ResponseMessage.MISSING_FILE}`,
            );
          }
          const orders: OrganOrder[] = parseCSVToJson(data);
          const formattedOrders: string = orders
            .map((order: OrganOrder) => calculateOrgans(order))
            .join('\n');
          sendResponse(
            res,
            formattedOrders,
            HttpStatusCode.OK,
            RESPONSE_HEADER,
          );
        } catch (err) {
          sendResponse(
            res,
            err.toString(),
            HttpStatusCode.BAD_REQUEST,
            RESPONSE_HEADER,
          );
        }
      });
    } else {
      throw new Error(
        `${HttpStatusMessage.BAD_REQUEST} : ${ResponseMessage.WRONG_METHOD_TYPE}`,
      );
    }
  } catch (err) {
    sendResponse(
      res,
      err.toString(),
      HttpStatusCode.BAD_REQUEST,
      RESPONSE_HEADER,
    );
  }
};
