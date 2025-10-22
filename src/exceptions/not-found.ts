import { ErrorCode, HTTPErrorException } from "./root";

export class NotFoundException extends HTTPErrorException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 404, null);
  }
}
