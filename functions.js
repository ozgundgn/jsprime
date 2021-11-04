// Prime Control Function
function isPrime(...numbers){
    let primes=[];
    let notPrimes=[];

    for(let i=0;i<numbers.length;i++){
    
           if(findPrime(numbers[i])){
             primes.push(numbers[i]);
           }else{
               notPrimes.push(numbers[i]);
           }
    }
    primes.map(x=>console.log(x+' is prime'));
    notPrimes.map(x=>console.log(x+' is not prime'));
}

//isPrime(1,3,4,5,6,89,111,67,-2);

//Friends Number
function friends(x,y){
    let xSum=0,ySum=0;
    if(x%y!=0 && y%x!=0){
        let maxNumber=Math.max(x,y);
        for (let i = 1; i < maxNumber; i++) {
         
            if(x%i==0 && x>i){
                xSum+=i;
            }
            if(y%i==0 && y>i){
                ySum+=i;
            }
        }
        
        return (xSum==y && ySum==x);
    }else{
      return false;
    }
}

//console.log(friends(120,284));

//Perfect numbers from 1 to 1000

function perfectNumbers(){

let perfectNumbers=[];
for (let u = 1; u <= 1000; u++) {
    let toplam=0;
    for (let i = 1; i <= u; i++) {
        if(u%i==0){
         toplam+=i;
        }
    }
    if(toplam==u*2){
        perfectNumbers.push(u);
    }
}
return perfectNumbers;
}

//console.log(perfectNumbers());

//1000 e kadarki asal sayılar

function primeFromOneToHundred(){
let primes=[];
    for (let i = 2; i <1000; i++) {

        if(findPrime(i)){
            primes.push(i);
        }
    }
    primes.map(x=>console.log(x));
}

//primeFromOneToHundred();

// Find prime function
function findPrime(number){

    let result=false;
    if(number>0){
        let dividingNumber=Math.sqrt(number)+1;

        if(dividingNumber>2){
           let divided= Math.floor(dividingNumber);
            for (let dNumber = 2; dNumber < divided; dNumber++) {
               if(number%dNumber==0){
                return result;
                }
            }
            result=true;
        }
    }
     return result;
}
//console.log(findPrime(13));

