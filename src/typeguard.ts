const Add = (num1 : number | string , num2 : number | string) =>{

        if (typeof num1 === 'number' && typeof num2 === 'number'){
                        return num1 + num2;
                
        }
        else {
                 num1.toString() + num2.toString();
        }
        
} ;

//Add (55 , "45");
console.log(Add(55 , 5));
