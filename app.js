var sumString = function(string){
  var re = /\n|\,/;
  var splitString = string.split(re);

  if(string.indexOf('/') > -1){
    var delimiter = string[2];
    splitString = string.split('\n');
    splitString = splitString[1].split(delimiter)
  }

  var sum = 0;
    for(var i = 0; i < splitString.length; i++){
      sum += (+splitString[i])
    }
    return sum;
};