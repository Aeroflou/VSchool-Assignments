let array = []
for(let i = 0; i<100; i++){
    array[i] = i + 1
}

const fizzBuzz = function(arr){
    fizzBuzzCounter = {
        fizz:0,
        buzz:0,
        fizzbuzz:0
    }
    for(let i = 0; i<arr.length; i++){
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0){
            arr[i] = "fizzbuzz"
            fizzBuzzCounter.fizzbuzz++
        } else if (arr[i] % 3 == 0){
            arr[i] = "fizz"
            fizzBuzzCounter.fizz++
        } else if (arr[i] % 5 == 0){
            arr[i] = "buzz"
            fizzBuzzCounter.buzz++
        }
    }
    console.log(arr)
    console.log(fizzBuzzCounter)
}
fizzBuzz(array)