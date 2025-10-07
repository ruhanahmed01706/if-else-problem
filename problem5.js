const year = 2021;
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
    console.log(year," Leep Year");
    
}
else{
    console.log(year," Not Leep Year");
    
}