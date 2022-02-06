var year = prompt('Insert your year of birth');
var parsYear =  parseInt(year);

var zodCode = (parsYear -4)%12;
console.log(zodCode)

if(zodCode == 0) 
{
    alert('sign in Chinese horoscope is: Rat') 
}
else if(zodCode == 1)
{
    alert('sign in Chinese horoscope is: Ox') 
}
else if(zodCode == 2)
{
    alert('sign in Chinese horoscope is: Tigar') 
}
else if(zodCode == 3)
{
    alert('sign in Chinese horoscope is: Rabbit') 
}
else if(zodCode == 4)
{
    alert('sign in Chinese horoscope is: Dragon') 
}
else if(zodCode == 5)
{
    alert('sign in Chinese horoscope is: Snake') 
}
else if(zodCode == 6)
{
    alert('sign in Chinese horoscope is: Horse') 
}
else if(zodCode == 7)
{
    alert('sign in Chinese horoscope is: Goat') 
}
else if(zodCode == 8)
{
    alert('sign in Chinese horoscope is: Mankey') 
}
else if(zodCode == 9)
{
    alert('sign in Chinese horoscope is: Rooster') 
}
else if(zodCode == 10)
{
    alert('sign in Chinese horoscope is: Dog') 
}
else(zodCode == 11)
{
    alert('sign in Chinese horoscope is: Pig') 
}


