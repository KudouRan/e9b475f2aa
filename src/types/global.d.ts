/* eslint-disable no-var */
// aksjcnajwkz44asdklan41as5z2a3d5e
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
