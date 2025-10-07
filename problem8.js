const result = 100;
if (result>=0 && result<= 100) {
    if(result>=80){
        console.log('A+');
        
    }
    else if(result>=70){
        console.log('A');
        
    }
    else if(result>=60){
        console.log('A-');
        
    }
    else if(result>=50){
        console.log('B');
        
    }
    else if(result>=40){
        console.log('C');
        
    }
     else if(result>=33){
        console.log('D');
        
    }
     else if(result<=33){
        console.log('F');
        
    }

}else{
    console.log('Not a result');
    
}