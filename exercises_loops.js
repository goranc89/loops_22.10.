//zadatak 1.

let nizArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let i=0; i<=nizArray.length;i++){
    if(nizArray[i] %2 == 0){
        console.log("Number is even " + nizArray[i]);
    }else{
        console.log("Number is odd " + nizArray[i]);
    }
}

//zadatak 2.

let sum1=0;

for(let n=0; n<1000; n++){
    if(n%(3*5)==0){
        sum1 +=n;
    }

}console.log("Sum of numbers that are multiples of 3 and 5 is: "+ sum1);



//zadatak 3.

let result=1;

  for(let i=0; i<= 10 ;i++){
    
        result +=i*i;
        }
   
   console.log("Sum of sqare of number from 0 to 10 is: "+ result);



//zadatak 4.

let niz3 = [1, 2, 3, 4, 5];  
let sum = 0;  
let proizvod=1;
 
for (let i = 0; i < niz3.length; i++) {  
   sum = sum + niz3[i];  
   proizvod= proizvod*niz3[i];
}  
console.log("Sum of all the elements of an array: " + sum);  
console.log("Proizvod brojeva niza je: " + proizvod);


//zadatak 5.

var x = ['1', 'A', 'B', "c", "r", true, NaN,undefined];
result='';
for(let i=0; i<x.length; i++){
    result +=x[i];
}
console.log("String form array is : " +result);

//zadatak 6.

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];

    for(let i=0; i<a.length; i++){
        console.log(i+" Element of array is: " + a[i]);
    }

    //zadatak 7.

    let y=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let suma =0;
    

    for(let i=0;i<y.length; i++){
        suma += y[i]*y[i];
        
    }
    console.log("Suma " + suma);

    //zadatak 8.

    let gradesArray=[80,77,88,95,68];
    let average=0;
    let suma1=0;

    for(let i=0; i<gradesArray.length; i++){
        suma1 += gradesArray[i];
        average = suma1/gradesArray.length;
    }console.log("Average grade is: " + average);
        if(average<60){
            console.log("Grade is F.");
        }else if(average>60 && average<70){
            console.log("Grade is D.");
        }else if(average>70 && average<80){
            console.log("Grade is C");
        }else if(average>80 && average<90){
            console.log("Grade is B");
        }else{
            console.log("Grade is A");
        }

    
    

    //zadatak 9.
    let N=100;
    let array= Array.from({length:N},(_,index) => index +1);
    //napravili niz od prvih 100 brojeva
   

   for(let i=0; i<array.length;i++){
    if(array[i]%3==0 && array[i]%5 !==0){
       // array[i]="Fizz";
        console.log("Fizz");
    }else if(array[i]%5 ==0 && array[i]%3 !==0){
       // array[i]= "Buzz";
        console.log("Buzz");
    }else if(array[i]%3==0 && array[i]%5==0){
        //array[i]="FuzzBuzz"
        console.log("FuzzBuzz");
    }else{
        console.log(array[i]);
    }
   }
    



