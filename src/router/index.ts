import { IncomingMessage, ServerResponse } from 'http';
import { RESPONSE_HEADER, ROUTES } from '../constants';
import { organOrderController } from '../controllers/organOrder';
import { sendResponse } from '../utils/sendResponse';
import { HttpStatusCode, HttpStatusMessage } from '../enum/httpStatus';

export const router = async (req: IncomingMessage, res: ServerResponse) => {
  const { url } = req;
  switch (url) {
    case ROUTES.ORGAN_ORDERS:
      await organOrderController(req, res);
      break;
    default:
      sendResponse(
        res,
        HttpStatusMessage.NOT_FOUND,
        HttpStatusCode.NOT_FOUND,
        RESPONSE_HEADER,
      );
  }
};
