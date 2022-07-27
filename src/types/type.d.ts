/* eslint-disable @typescript-eslint/no-unused-vars */
// 5452ad2c5b4a1d1f
import type { RequestOptions } from './request';

declare module 'got' {
  export interface NormalizedOptions {
    requestOptions?: RequestOptions;
  }
}
