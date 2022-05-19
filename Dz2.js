let isRaining = false;
let temperature = 25;
let minutes;
if (isRaining)
  {
    minutes = 0;
  }
else{
  if (temperature >= 10 && temperature < 15)
    {
      minutes = 30;
    }
  if (temperature >= 15 && temperature < 25)
    {
      minutes = 40;
    }
  if (temperature >= 25 && temperature <= 35)
    {
      minutes = 20;
    }
  if(temperature < 10 && temperature > 35)
    {
      minutes  = 0;
    }
}
console.log(minutes);

