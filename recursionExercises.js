var rangeRecursive = function(start, end) {
  if(start > end){
    return [];
  }

  return [start].concat(rangeRecursive(start+1, end));
};

var rangeIterative = function(start, end){
  var result = [];
  for(var i = start; i <= end; i++){
    result.push(i);
  }
  return result;
};

var exponentFirst = function(b, n){
  if(n === 0){
    return 1;
  }

  return b * exponentFirst(b, n-1);
};

var exponentSecond = function(b, n){
  if(n === 0){
    return 0;
  }

  if(n === 1){
    return b;
  }

  if(n % 2 === 0){
    var val = exponentSecond(b, n/2);
    return val * val;
  }

  var value = exponentSecond(b, (n-1)/2);
  return b * value * value;
};

var fibonacci = function(n) {
  if(n === 1){
    return [0];
  }

  if(n === 2){
    return [0, 1];
  }

  var ary = fibonacci(n-1);

  return ary.concat(ary[ary.length-1] + ary[ary.length-2]);
};

var bsearch = function(ary, target){
  console.log(ary);
  if(ary.length === 0){
    return null;
  }

  var mid = Math.floor(ary.length/2);
  if(ary[mid] === target){
    return mid;
  }

  if(target < ary[mid]){
    return bsearch(ary.slice(0,mid), target);
  }

  var found = bsearch(ary.slice(mid+1, ary.length), target);
  if(found){
    return mid + 1 + found;
  }

  return null;
};

var makeChange = function(amt, coins){
  if(amt <= 0){
    return [];
  }
  var bestChange = null;
  for(var i = 0; i < coins.length; i++){
    if(amt < coins[i]){
      continue;
    }
    var change = [coins[i]].concat(makeChange(amt - coins[i], coins));
    if(bestChange === null || change.length < bestChange.length){
      bestChange = change;
    }
  }
  return bestChange;
};

var merge = function(left, right){
  var merged = [];

  while(left.length !== 0 && right.length !== 0){
    if(left[0] < right[0]){
      merged.push(left.shift());
    }
    else if(right[0] < left[0]){
      merged.push(right.shift());
    }
    else{
      merged.push(left.shift());
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
};

var mergeSort = function(ary) {
  if(ary.length === 1){
    return ary;
  }

  var left = mergeSort(ary.slice(0,Math.floor(ary.length/2)));
  var right = mergeSort(ary.slice(Math.floor(ary.length/2), ary.length));

  return merge(left, right);
};

var subSets = function(ary){
  if(ary.length === 0){
    return [[]];
  }
  var value = ary.pop();
  var subs = subSets(ary);
  var newSubs = [];
  for(var i = 0; i < subs.length; i++) {
    var newSub = subs[i].concat(value);
    newSubs.push(newSub);
  }
  return subs.concat(newSubs);
};


//
// console.log(rangeRecursive(1,10));
// console.log(rangeIterative(1,10));
// console.log(exponentFirst(2,5));
// console.log(exponentSecond(3,3));
// console.log(fibonacci(10));

console.log(subSets([1,2]));
