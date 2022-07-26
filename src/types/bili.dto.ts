export interface AnyProp<T = any> {
  code?: number;
  message?: string;
  data?: T;
  ttl?: number;
  ts?: number;
  msg?: string;
  status?: boolean;
}

export interface ApiBaseProp<T = object | number> {
  /**
   * -658 Token 过期
   */
  code: number;
  message: string;
  ttl: number;
  data?: T;
}

export interface OnlyMsg<T = any> {
  code: number;
  msg: string;
  data?: T;
}

export interface AccountBaseProp<T = object> {
  code: number;
  status: boolean;
  data?: T;
}

export interface DoubleMessageProp<T = unknown> {
  code: number;
  msg: string;
  message: string;
  data?: T;
}

export interface PureDataProp<T = object | [] | null> {
  code: number;
  message: string;
  data?: T;
}
