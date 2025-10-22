import { ErrorCode, HTTPErrorException } from "./root";

export class BadRequestExceptionError extends HTTPErrorException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 400, null);
  }
}
