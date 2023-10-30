
function inkLevels(inks){
    min = inks["magenta"] 
  
    for (element in inks){
      if (min > inks[element]) {
        min = inks[element] 
      } 
    }
  return min 
  }
  inks = {
    "cyan": 23,
    "magenta": 12,
    "yellow": 10, 
  } 
  
  console.log (inkLevels(inks)) 
   
  