/* eslint-disable no-var */
declare global {
  type RecursivePartial<S> = {
    [p in keyof S]+?: S[p] extends object ? RecursivePartial<S[p]> : S[p];
  };

  type RecursiveRequired<S> = {
    [p in keyof S]-?: S[p] extends object ? RecursiveRequired<S[p]> : S[p];
  };

  type Ref<T> = {
    value: T;
  };

  type UnPromisify<T> = T extends Promise<infer U> ? U : T;
}

export {};
