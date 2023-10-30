function afterNYears (names, n) { 
    for (element in names) { 
     if (n>0) { 
      names[element] = names[element]+n
    } else { 
       names[element] = names[element] - n
    }
    }
     return names
    } 
    
    n = 5 
    names = {
      "Joel": 32,
      "Fred": 44,
      "Reginald": 65,
      "Susan": 33,
      "Julian": 13
    } 
    
    console.log (afterNYears(names,n)) 
     
    