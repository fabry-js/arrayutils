declare namespace arrayutils {
  type BaseList = Array<any | Object> | any;
  export function AUforEach(
    list: BaseList,
    callback: (...any: any[]) => any
  ): any;
  export function AUmap(
    list: BaseList,
    callback: (...any: any[]) => void
  ): any[];
  export {};
}
