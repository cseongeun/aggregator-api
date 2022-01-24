import { HttpException, HttpStatus } from '@nestjs/common';

export class Exception extends HttpException {
  constructor(
    response: string | Record<string, any>,
    statusCode = HttpStatus.BAD_REQUEST,
  ) {
    super(response, statusCode);
  }
}
