// Cannot redeclare block-scoped variable 'name'
// 之前在tsdemo/的文件中声明过了全局变量，所以不能重新声明。
// 加个export/import 之类的代码，这个文件就变成了一个模块，拥有自己的命名空间
export { };
let name: string = "abc";
let age: number = 10;
let married: boolean = true;
let hobbies: string[] = ['1', '2', '3'];
let interests: Array<string> = ['4', '5', '6'];
// 元组，数据类型和长度都固定
let point: [number, number] = [100, 100];
enum Gender {
  MALE,
  FEMALE,
}

let root: HTMLElement | null = document.getElementById('root');
root!.style.color = 'red'; // !断言肯定不为空

//strictNullChecks 为false，可以把null，undefined 付给其他类型，为true则不行
let myname1: string | null = null; //如果上面参数为true，想把它设置为null就可以用|，联合类型

// null/undefined 其他类型的子类型

// void
function greeting(name: string): void {
  return;
}

//never 永远不
// never是其他类型的子类型，代表不会出现的值
// A function returning 'never' cannot have a reachable end  point
// 在函数内部永远会抛出错误，倒是函数永远无法被执行。
function neverTest() : never{
  
}


