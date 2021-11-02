export function fizzBuzz(numb) {
    if (numb % 3 == 0 && numb % 5 == 0){
        return "FizzBuzz";
    }
    if (numb % 3 == 0 ) {
        return "Fizz";
    }
    if (numb % 5 == 0 ) {
        return "Buzz";
    } 
    else {
        return numb;
    }  
}

export function fizzBuzz_y_numbers (numb){
    for(let i = 1; i <=numb; i++){
        //console.log(`${i}: ${fizzBuzz(i)}`);
        //return (`${fizzBuzz(i)}`);
        //console.log(`${fizzBuzz(i)}`);
}
};

fizzBuzz_y_numbers(100);

//--------------Stage 2--------------
export function stage2_fizzBuzz(numb) {
    if (numb % 3 == 0 && numb % 5 == 0){
        return "FizzBuzz";
    }
    if (numb % 3 == 0 || ( numb % 10 == 3 || numb > 30 && numb < 40)) {
        return "Fizz";
    }
    if (numb % 5 == 0 || ( numb % 10 == 5 || numb > 50 && numb < 60)) {
        return "Buzz";
    } 
    else {
        return numb;
    }  
}
