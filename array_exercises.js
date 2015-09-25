var uniq = function (ary) {
  var dups = [];
  for(var i = 0; i < ary.length; i++) {
    if(dups.indexOf(ary[i]) === -1){
      dups.push(ary[i]);
    }
  }
  console.log(dups);
};

var twoSum = function(ary) {
  var pairs = []
  var i = 0;
  while(i < ary.length-1){
    j = i + 1;
    while(j < ary.length){
      if(ary[i] + ary[j] == 0){
        pairs.push([i,j])
      }
      j++;
    }
    i++;
  }
  return pairs;
};

var transpose = function(ary){
  var transposed = [];

  for(var i = 0; i < ary[0].length; i++){
    var temp_row = []
    for(var j = 0; j < ary.length; j++){
      temp_row.push(ary[j][i]);
    }
    transposed.push(temp_row);
  }
  return transposed;
};

console.log(transpose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));
