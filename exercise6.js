function factors(num) {
    arr = [];
    // looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        arr.push(i);
    }

}
console.log(arr);
}

factors(60);