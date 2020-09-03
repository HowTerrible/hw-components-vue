namespace a {
  class Person {
    myname: string = 'hw';
    //readonly 只能在构造器中声明
    constructor(name: string, age: number, public readonly ro: string) {

    }
    get name() {
      return this.myname
    }
    set name(newVal: string) {
      this.myname = newVal;
    }
  }
  // 同样有private protected public static 修饰符
  class Student extends Person {
    public stuNo: number;
    private money: number = 0;
    constructor(name: string, age: number, stuNo: number) {
      super(name, age, "");
      this.stuNo = stuNo;
    }
  }
}