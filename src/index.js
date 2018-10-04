module.exports = function longestConsecutiveLength(array) {
  let count = 1;
  let countMax = 1;
  if(array.length === 0) return 0;
  array.sort(function(a, b) {
    return a - b;
  });
  for(let i=0; i<array.length; i++){
    if(array[i+1] == (array[i] + 1)){
        count++;
    }
      else if (array[i + 1] - array[i] > 1){
            countMax = Math.max(count, countMax);
            count = 1;
      }
  }
  return countMax ;
}
