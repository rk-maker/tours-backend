import { HTTPErrorException } from "./root";

export class UnprocessableEntity extends HTTPErrorException {
  constructor(error: any, message: string, errorCode: number) {
    super(message, errorCode, 422, error);
  }
}
