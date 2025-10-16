class A {
  n = 0;
  static n1 = 0;
  static main() {
    let n2 = 0;
    n2 = 10;
    console.log(n2);
    A.n1 = 20;
    console.log(A.n1);
    let A1 = new A();
    A1.n = 30;
    console.log(A1.n);
  }
}
A.main();

//first n,n1,n2 is 0
// n is local variable
// n1 is static variable
// n2 is non-static variable
// n2 is local so it is reinitialized directly under declaration
// n1 is static so it is reinitialized using classname refrence and variable name using dot operator and assignment oprerator (=)
// n is non static so its is reinitailised by creating new obj and assinging it to A1 variable and reinitialised it with using A1 variable name as refrence and non static variable that is n using dot operator and assignment operator(= )
