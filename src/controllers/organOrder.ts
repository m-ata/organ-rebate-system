import { IncomingMessage, ServerResponse } from 'http';

import { parseCSVToJson } from '../utils/parseCsvToJson';
import { calculateOrgans } from '../utils/calculateOrgans';

import { OrganOrder } from '../types/organOrder';
import { sendResponse } from '../utils/sendResponse';
import { HttpStatusCode, HttpStatusMessage } from '../enum/httpStatus';
import { RESPONSE_HEADER } from '../constants';

export const organOrderController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const { method } = req;
  if (method === 'POST') {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      try {
        const orders: OrganOrder[] = parseCSVToJson(data);
        const formattedOrders: string = orders
          .map((order: OrganOrder) => calculateOrgans(order))
          .join('\n');
        sendResponse(res, formattedOrders, HttpStatusCode.OK, RESPONSE_HEADER);
      } catch (error) {
        sendResponse(
          res,
          error.toString(),
          HttpStatusCode.INTERNAL_SERVER,
          RESPONSE_HEADER,
        );
      }
    });
  } else {
    sendResponse(
      res,
      HttpStatusMessage.BAD_REQUEST,
      HttpStatusCode.BAD_REQUEST,
      RESPONSE_HEADER,
    );
  }
};
