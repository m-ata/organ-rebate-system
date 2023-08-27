import { ServerResponse, OutgoingHttpHeaders } from 'http';
import { HttpStatusCode } from '../enum/httpStatus';

/**
 * Sends an HTTP response with the provided data, status code, and headers.
 * @param response ServerResponse object to send the response.
 * @param data response data as string to send in the response body.
 * @param statusCode HTTP status code to set in the response.
 * @param headers headers to include in the response.
*/
export const sendResponse = (
  response: ServerResponse,
  data: string,
  statusCode: HttpStatusCode,
  headers: OutgoingHttpHeaders,
) => {
  response.writeHead(statusCode, headers);
  response.end(data);
};
