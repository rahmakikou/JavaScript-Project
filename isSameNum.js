function isSameNum(num1, num2) {

    if ((typeof (num1) == typeof (num2)) && ((num1) == (num2))) {
      return true
    }
    return false
  }
  
  var num1 = 9
  var num2 = 40
  
  console.log(isSameNum(num1, num2)) 