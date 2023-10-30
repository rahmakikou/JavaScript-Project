function countTrue (t) {
    sum = 0 
     for (var i = 0; i < t.length; i++) {
       if (t[i]) { 
         sum = sum+1  
       }
     } 
    return sum 
   }
   
   t= [false, false, false, false] 
   
   console.log (countTrue(t)) 