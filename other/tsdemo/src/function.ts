// 函数定义
function hello(name: string): void {
  console.log('hello' + name);
}

// 类型 Type
// 用来定义一个类型或者类型别名
type GetUserNameType = (firstName: string, laseName: string) => string;
// type GetUserNameType = (firstName: string, laseName: string) => void;
// type GetUserNameType = (firstName: string, laseName: string) => { name: string };

// 函数表达式
let getUserName: GetUserNameType = function (firstName: string, lastName: string): string {
  return firstName + lastName;
}

// 可选参数
function print(name: string, age?: string, home?: string) { }

// 剩余参数
function sum(...numbers: Array<number>) {
  return numbers.reduce((accu, item) => accu + item, 0);
}

// 重载 定义和函数的声明要挨在一起
function attr(val: string): void;
function attr(val: number): void;
function attr(val: any): void {

}