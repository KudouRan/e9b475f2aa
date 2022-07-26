/* eslint-disable @typescript-eslint/no-unused-vars */
import type { RequestOptions } from './request';

declare module 'got' {
  export interface NormalizedOptions {
    requestOptions?: RequestOptions;
  }
}
