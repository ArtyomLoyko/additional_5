module.exports = function check(str, bracketsConfig) {
  for(var i = 0; i < bracketsConfig.length; i++) {
    var strConfig = bracketsConfig[i].join('');
    for (var j = 0; j < str.length; j++) {
      if(str.slice(j, j + 2) == strConfig) {
        var arr = str.split('');
        arr.splice(j, 2);
        str = arr.join('');
        j = j - 2;
        i = -1;
      };
    };
  };
  if (!str) return true;
  return false;
}
