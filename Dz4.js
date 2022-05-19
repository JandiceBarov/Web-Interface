let  lastNumber = 20;
let multiplicationResult = 0;
for(let i = 0;i <= lastNumber;i++)
  {
    if(i%2 == 0)
      {
        multiplicationResult += i;
      }
  }
alert(multiplicationResult);
