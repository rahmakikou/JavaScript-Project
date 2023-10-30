function getBudgets(arr) {
    budgets = 0
    for (var i = 0; i < arr.length; i++) {
      for (element in arr[i] ){
        if (element =="budget"){
          budgets = budgets + arr[i][element]    

      } 
    }

    } 

    return budgets
  }

arr = [
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 }

] 

console.log(getBudgets(arr))


