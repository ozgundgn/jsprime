


function isPrime(...numbers){

    let primes=[];
    let notPrimes=[];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>1){
          
            let dividingNumber=Math.floor(Math.sqrt(numbers[i]))+1;
        
            if(dividingNumber>1){
                for (let dNumber = 2; dNumber <= dividingNumber; dNumber++) {
    
                   if(numbers[i]%dNumber==0){
                    notPrimes.push(numbers[i])
                     break;
                    }
                    if(dNumber==dividingNumber){
                        primes.push(numbers[i])
                    }
                }
            }else{
                notPrimes.push(numbers[i])
            }
        }else{
            notPrimes.push(numbers[i])
        }
    }
    console.log("prime :"+primes);
    console.log("not prime :"+notPrimes);

}

isPrime(1,3,4,5,6,89,111,67,-2);
