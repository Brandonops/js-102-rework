function printSquare(width, height) {
    for (let row = 1; row <= height; row++) { // loop rows
        let rowText = ''; // set up placeholder row string
        for (let col = 1; col <= width; col++) { // loop column inside row
            if (row === 1 || row === height) {
                rowText += "*";
            } else {
                //inside rows
                if (col === 1 || col === width) {
                    rowText = rowText + '*';
                } else {
                    rowText = rowText + ' '
                }
            }
        }
    console.log(rowText);
    }
}

printSquare(6, 4);