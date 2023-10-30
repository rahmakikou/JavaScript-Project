
const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  } 
  
  function greeting(name) { 
    country = '' 
    for (element in GUEST_LIST){ 
      if (element ==name) {
        country = GUEST_LIST[element]    
      } 
    }
    if (country =='') {
      return  "Hi! I'm a guest." 
    } else { 
      return "Hi! I'm "+name+", and I'm from "+country+"." 
    } 
  }  
  
  console.log(greeting('Sam'))