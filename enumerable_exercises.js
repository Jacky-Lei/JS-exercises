Array.prototype.myEach = function (func) {
  for(var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myMap = function (func){
  var ary = [];
  var store = function(val) {
    ary.push(func(val));
  };

  this.myEach(store);

  return ary;
};

var display = function(i) {
  console.log(i);
};

var square = function(i) {
  return i * i;
};

Array.prototype.myInject = function (originalCall) {
  var firstValue = this.shift();

  var wrapperCall = function(val) {
    firstValue = originalCall(firstValue, val);
  };
  this.myEach(wrapperCall);

  return firstValue;
};

var sum = function(currentSum, el) {
  return currentSum + el;
};

console.log([1,2,3].myInject(sum));

newAry = [1,2,3].myMap(square);
console.log(newAry);
