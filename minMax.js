function minMax (t) { 
    var min = t[0]
    var max = t[0]  
    
    for (var i = 0; i < t.length; i++) {
      if (min > t[i]) {
        min = t[i]
      }
    
      if (max < t[i]) {
        max = t[i]
      }
    } 
    return [min,max] 
    
    
    }
    
    var t = [5, 6, 2, 1000, 30, 1, -100, 20000]
    
    var sorted_t = minMax (t); 
     
    
    console.log("La valeur maximale est : ", sorted_t[0]); 
    console.log("La valeur minimale est : ", sorted_t[1]); 