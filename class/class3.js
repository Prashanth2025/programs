class Student {
  sName = null;
  sPhone = 0;
  static instName = "Jspiders";
  static count = 0;
  static Studentcount() {
    return Student.count;
  }
  displayDetails() {
    console.log(
      `student name ${this.sName} student can be contacted with ${this.sPhone} Institute name ${Student.instName}`
    );
  }
  constructor(Name, Phone) {
    Student.count++;
    console.log(Student.count);
    this.sName = Name;
    this.sPhone = Phone;
  }
}

class test1 {
  static main() {
    let S1 = new Student("prashanth", 1222222223);
    // S1.sName = "prashanth";
    // S1.sPhone = 1234567899;
    // Student.count++;
    // console.log(Student.Studentcount());
    S1.displayDetails();

    let S2 = new Student("prashanth", 1222222223);
    // S2.sName = "prashanth";
    // S2.sPhone = 1234567899;
    // Student.count++;
    // console.log(Student.Studentcount());
    S2.displayDetails();
  }
}

test1.main();
