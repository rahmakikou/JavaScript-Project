
function getAbsSum(t) {
    sum = 0 
      for (var i = 0; i < t.length; i++) { 
        if (t[i]>0) {
          sum = sum + t[i] 
        } else { 
          sum = sum - t[i] 
        }
    } 
    return sum 
    } 
    
    
    t = [2, -1, 4, 8, 10]
    console.log (getAbsSum(t)) 