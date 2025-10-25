import { ErrorCode, HTTPErrorException } from "./root";

export class UNAuthorizedException extends HTTPErrorException {
  constructor(message: string, errroCode: ErrorCode, errors?: any) {
    super(message, errroCode, 401, errors);
  }
}
