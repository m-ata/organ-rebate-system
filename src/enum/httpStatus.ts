/* eslint-disable no-unused-vars */
export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

export enum HttpStatusMessage {
  OK = 'OK',
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER = 'INTERNAL_SERVER_ERROR',
}

export enum ResponseMessage {
  MISSING_FILE = 'Csv file is missing',
  WRONG_METHOD_TYPE = 'Wrong method type, expected method type is POST',
}
