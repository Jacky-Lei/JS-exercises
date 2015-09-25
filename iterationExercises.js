Array.prototype.bubbleSort = function (){
  while(true){
    var i = 0;
    var unsorted = true;
    while(i < this.length-1){
        if(this[i] > this[i+1]){
          var temp = this[i];
          this[i] = this[i+1];
          this[i+1] = temp;
          unsorted = false;
        }
      i++;
    }
    if(unsorted){
      break;
    }
  }
  return this;
};

String.prototype.subStrings = function () {
  var result = [];
  for(var i = 0; i < this.length; i++){
    for(var j = i; j < this.length; j++){
      result.push(this.slice(i,j+1));
    }
  }
  return result;
}


var str = "cat";
// ary.bubbleSort();
console.log(str.subStrings());
