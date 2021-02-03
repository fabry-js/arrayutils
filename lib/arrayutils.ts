type BaseList = Array<any | Object> | any;

export function AUforEach(list: BaseList, callback: (...any: any[]) => any) {
  if (list) {
    for (let _i = 0; _i < list.length; _i++) {
      let res = callback(list[_i], _i);
      if (res) return res;
    }
    return undefined;
  }
}
export function AUmap(list: BaseList, callback: ( ...any: any[]) => void) {
    let result: any[];
    if (list) {
        result = [];
        for (let _i = 0; _i < list.length; _i++) {
            result.push(callback(list[_i], _i));
        }
    } return result;
}