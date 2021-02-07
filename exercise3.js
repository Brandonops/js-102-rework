function printSquare(num) {
    for (i = 0; i < num; i++) {
        let row = "";
        for (column = 0; column < num; column++) {
            row = row + "*";
        }
        console.log(row);
    }

}

printSquare(5);