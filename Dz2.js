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
-------------------------------
-------------------------------
let isRaining = false;
let temperature = 25;
let minutes;
if (isRaining)
  {
    minutes = 0;
  }
else{
  if (temperature > 35 && temperature < 0)
    {
      minutes = 0;
    }
  if (temperature == 20)
    {
      minutes = 20;
    }
  else
    {
      if (temperature > 20)
        {
          minutes = 20 - (temperature - 20);
        }
      if(temperature < 20)
        {
          minutes = 20 - (20-temperature);
        }
    }
}
alert(minutes);
