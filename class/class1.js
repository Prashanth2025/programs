class B {
  n1 = 0;
  static n2 = 0;
  static main() {
    let a1 = new B();
    console.log(a1.n1);
    a1.n1 = 1;
    a1.n2 = 2;

    let a2 = new B();
    console.log(a2.n1);
    a2.n1 = 10;
    a2.n2 = 11;

    console.log(a1.n1);
    console.log(a2.n1);
    console.log(a1.n2);
    console.log(a2.n2);
    console.log(B.n2);
    
  }
}
B.main();
