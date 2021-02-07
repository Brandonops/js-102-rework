function printBanner(string) {
    border = "";
    newString = "- " + string + " -";
    for (let col = 0; col <= newString.length; col++) {
        border += "-"
    }
    console.log(border);
    console.log(newString);
    console.log(border);
}

printBanner("Welcome to DigitalCrafts'");