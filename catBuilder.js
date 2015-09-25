var Cat = function (name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  return "Everyone loves " + this.name;
};

Cat.prototype.meow = function() {
  return this.name + " meows!";
};

var sunny = new Cat("Sunny", "Jacky");
var leo = new Cat("Leo", "Mihir");

leo.meow = function() {
  return "Leo barks!";
};

console.log(sunny.cuteStatement());
console.log(leo.cuteStatement());
console.log(sunny.meow());
console.log(leo.meow());
