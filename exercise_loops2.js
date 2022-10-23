//zadatak 1.

let a=[5,-4.2, 3,7];
let e=3;
let result="";

for(let i=0; i<a.length;i++){
    if(a[i]==e){
        result="yes";
        break;
    }else{
        result="no";
    }
}console.log("Is the element in the array? - " + result);

//zadatak 2.

let b=[-3,11,5,3.4,-8];
let c;


for(let i=0; i<b.length;i++){
    if(b[i]>0){
        c=b[i]*2;
       b[i]=c;
        

    }
}console.log(b);

//zadatak 3.

let aArray=[4,2,2,-1,6];
let min= aArray[0];
let index=0;

for(let i=0; i<aArray.length;i++){
    if(aArray[i]<min){
        min=aArray[i];
        index=i;
    }
}
console.log("Minimum value in array is: "+ min+" , and the index of this element is: " +index);

//zadatak 4.

let bArray=[4,2,2,-1,6];
let minimum= bArray[0];
let index1=0;


for(let i=0; i<bArray.length;i++){
    if(bArray[i]<minimum){
        minimum=bArray[i] 
        index1=i;
    }
}

bArray.splice(index,1);
//izbacila sam iz niza minumum, sada trazim min u novom nizu

let newBarray=bArray;
//console.log(newBarray);  -----provera koji niz imamo sad
let newmin=newBarray[0];
for(let i=0; i<newBarray.length;i++){
    if(newBarray[i]<newmin){
        newmin=newBarray[i];
    }
}
  
console.log("First number larger than minimun in array is: "  +newmin + ".");

//zadatak 5.

let cArray=[3,11,-5,-3,2];
let sum=0;

for(let i=0; i<cArray.length;i++){
    if(cArray[i]>0){
        sum +=cArray[i];
    }
}console.log("Sum of positive elements of the array is: " +sum+".");

//zadatak 6.

let dArray=[2, 4, -2, 7, -2, 4, 2,];
let size=dArray.length;


for(let i=0; i<size/2;i++){
    if(dArray[0] == dArray[size-i-1] ){
            console.log("Array is symmetric.");
          break;
        }else{
            console.log("Array is not symmetric.");
           
        }
}



//zadata 7.
let numberOne= [4, 5, 6, 2];
let numberTwo= [3, 8, 11, 9];
let numberThree=[];
let k=0;
let i=0;
let j=0;
let one=numberOne.length;
let two=numberTwo.length;
result=0;

   while( i<one && j<two){  //prolazimo kroz oba niza
        numberThree[k++]=numberOne[i++];
        numberThree[k++]=numberTwo[j++];
   }while(i<one){                       //cuvanje preostalih clanova niza jedan
    numberThree[k++]=numberOne[i++];
   }while(j<two){                      //cuvanje preostalih clanova niza dva
    numberThree[k++]=numberTwo[j++];
   }
   console.log(numberThree);
//zadatak 8.
let wArray=[4,5,6,2];
let qArray=[3,8,11,9];
let zArray=[];

zArray=wArray + " ," +qArray;
console.log(zArray);


//zadatak 9.
let yArray=[4,6,2,8,2,2];
let x=2;

for(let i=0; i<yArray.length; i++){
    if(yArray[i] == 2){
        yArray.splice(i,1);
        i--;
        //kada uklonim element niza, indeks se smanjuje, pa da se ne  preskoci
        //sledeci element niza(kada su elemneti jedan do drugog) potrebno je dodati i--
    }

    }
console.log(yArray);

//zadatak 10.

let xArray=[2,-2,33,12,5,8];
let z= 78;
let p=3;


    //xArray.splice(3,0,78); ------ovako moze da se uradi bez petlje
    //console.log(xArray);  --------
if (p<xArray.length){
    for(let i= xArray.length; i>p;i--){
        xArray[i]=xArray[i-1]; //pomeramo clanove nize koji se nalaze na mestima koja su veca od pozicije p
    }
    xArray[p]=z;  //dodavanje elementa na poziciju p
    console.log(xArray);
}else{
    console.log("Errorrrr");
}




