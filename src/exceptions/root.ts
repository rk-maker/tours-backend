export class HTTPErrorException extends Error {
  constructor(
    message: string,
    errorCode: any,
    statusCode: number,
    errors: any
  ) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
  }

  message: string;
  errorCode: any;
  statusCode: number;
  errors: any;
}
export enum ErrorCode {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXIST = 1002,
  INCORRRECT_PASSWORD = 1003,
  VALIDATION_ERROR = 2201,
  INTERNAL_ERROR = 20001,
}
