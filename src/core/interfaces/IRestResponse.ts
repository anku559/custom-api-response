import {
  HttpCode,
  HttpData,
  HttpInfo,
  HttpMessage,
  HttpStatus,
} from '../types/HttpTypes';

export interface IResponseObject {
  [key: number]: {
    code: HttpCode;
    info: HttpInfo;
    status: HttpStatus;
    message?: HttpMessage;
    data?: HttpData;
  };
}

export interface ISingleResponse {
  code: HttpCode;
  info: HttpInfo;
  status: HttpStatus;
  message?: HttpMessage;
  data?: HttpData;
}
