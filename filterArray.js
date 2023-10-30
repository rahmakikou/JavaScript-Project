function filterArray (t) { 
    let newtab = [] 
    j= 0 
  
    for (let i = 0; i < t.length; i++) {
  if (typeof(t[i])=='number') {
    newtab[j]=(t[i]) 
    j++ 
  } 
    }
    return newtab 
  } 
  
  t=[3,6,"a",30,"88",55,"b",76,"4"]  
  
  console.log (filterArray(t)) 