/* 
  object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
*/
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

/* create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error */