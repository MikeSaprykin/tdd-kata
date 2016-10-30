var sumString = function(string){
  var re = /\n|\,/;
  var splitString = string.split(re);

  if(string.indexOf('/') > -1){
    var delimiter = string[2];
    splitString = string.split('\n');
    splitString = splitString[1].split(delimiter)
  }

  var negativeInputs = [];
  var sum = 0;
    for(var i = 0; i < splitString.length; i++){
      if(+splitString[i] >= 0){
        sum += (+splitString[i])
      }else{
        negativeInputs.push(+splitString[i])
      }
    }
  if(negativeInputs.length > 0){
    return generateMessage(negativeInputs)
  }else{
    return sum
  }

  function generateMessage (arr){
    var message = 'Negatives are not allowed:';
    for(var i = 0;i < arr.length; i++){
      message += ' ' + arr[i]
    }
    return message;
  }
};