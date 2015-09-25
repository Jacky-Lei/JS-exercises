var Student = function(fname, lname, courses) {
  this.fname = fname;
  this.lname = lname;
  this.courses = courses;
};

Student.prototype.name = function(){
  return this.fname + " " + this.lname;
};

Student.prototype.getCourses = function() {
  return this.courses;
};

Student.prototype.enroll = function(course){
  if(this.courses.indexOf(course) === -1 && !this.hasConflict(course)){
    this.courses.push(course);
    course.students.push(this);
  }
  else{
    throw "can't enroll";
  }
};

Student.prototype.courseLoad = function() {
  var result = {};
  for(var i = 0; i < this.courses.length; i++){
    if(result[this.courses[i].department]){
      result[this.courses[i].department] += this.courses[i].credits;
    }
    else{
      result[this.courses[i].department] = this.courses[i].credits;
    }
  }
  return result;
};

var Course = function(name, department, credits, days, block){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
};

Course.prototype.conflictsWith = function(course) {
  for(var i = 0; i < this.days.length; i++){
    if(course.days.indexOf(this.days[i]) === 0){
      if(course.block === this.block){
        return true;
      }
    }
  }
  return false;
};

Student.prototype.hasConflict = function (course){
  for(var i = 0; i < this.courses.length; i++){
    if(this.courses[i].conflictsWith(course)){
      return true;
    }
  }
  return false;
};

Course.prototype.students = function(){
  return this.students;
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

var math = new Course("calc101", "Math", 4, ["Mon", "Tues", "Wed"], 1);
var bio = new Course("bio101", "Science", 4, ["Wed", "Thur"], 2);
var food = new Course("CA101", "Gastronomy", 3, ["Mon"], 1);
var alcohol = new Course("BART101", "Gastronomy", 3, ["Thur"], 2);

var coursesForJacky = [food, alcohol];
var coursesForMihir = [math, bio, alcohol];

var jacky = new Student("Jacky", "Lei", []);
var mihir = new Student("Mihir", "Jham", []);

console.log(jacky.name());
jacky.enroll(food);
jacky.enroll(alcohol);
console.log(jacky.getCourses());
console.log(jacky.courseLoad());

console.log(mihir.name());
mihir.enroll(math);
mihir.enroll(alcohol);
mihir.enroll(food);
console.log(mihir.getCourses());
console.log(mihir.courseLoad());
