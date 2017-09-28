module.exports = function check(str, bracketsConfig) {
  for(i = 0; i < bracketsConfig.length; i++) {
    var str1 = bracketsConfig[i].join('');
    for (j = 0; j < str.length; j++) {
      if(str.slice(j, j + 2) == str1) {
        var arr = str.split('');
        arr.splice(j, 2);
        str = arr.join('');
        j = j - 2;
      }
    }
  }
  if (str !== '') return false;
  return true;
}
