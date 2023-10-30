function objectToArray(exemple) { 
    t = [] 
    i = 0 
    for (element in exemple) {
      t.push([element, exemple[element] ] )  
      
    }
     return t 
  } 
  
  exemple = {
    Paris: 1,
    Tunis : 2,
     Dubai : 3
  } 
  
  console.log (objectToArray(exemple)) 