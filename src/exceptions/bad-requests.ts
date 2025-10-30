import { ErrorCode, HTTPErrorException } from "./root";

export class BadRequestExceptionError extends HTTPErrorException {
  constructor(message: string, errorCode: ErrorCode, errors: any) {
    super(message, errorCode, 400, errors);
  }
}
