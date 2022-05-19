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
  if (minutes<0)
  {
    minutes=0
  }
}
alert(minutes);
