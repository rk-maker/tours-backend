import { HTTPErrorException } from "./root";

export class InternalException extends HTTPErrorException {
  constructor(message: string, errors: any, errorCode: number) {
    super(message, errorCode, 500, errors);
  }
}
