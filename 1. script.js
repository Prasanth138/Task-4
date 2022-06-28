var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
//Using for loop
  console.log("Output using for loop");
 for(i=0;i<obj.length;i++)
  { 
    for(let x in obj[i])
    { 
     console.log(obj[i][x]);
    }
  }
//Using for in loop
  console.log("Output using for in loop");
  for(let x in obj)
  {
    for(let y in obj[x])
    { 
     console.log(obj[x][y]);
    }
  }
//Using for of loop
  console.log("Output using for of loop");
  for(let x of obj)
  {  
    for(let y in x)
    { 
     console.log(x[y]);
    }
  }
//Using forEach loop
  console.log("Output using forEach loop");
 obj.forEach(x=>
    {
        for(let y in x)
        { 
         console.log(x[y]);
        }
    });