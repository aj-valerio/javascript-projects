// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, pageCount, timesCheckedOut, discardStatus) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.pageCount = pageCount;
    this.timesCheckedOut = timesCheckedOut;
    this.discardStatus = "No";
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyrightDate, isbn, pageCount, timesCheckedOut, discardStatus) {
        super(title, author, copyrightDate, isbn, pageCount, timesCheckedOut, discardStatus);
    }
    manualDiscardUpdate(copyrightDate){
        let thisYear = 2024;
        if (copyrightDate < (thisYear - 5)){
            this.discardStatus = "Yes";
        }
    }
}

class Novel extends Book{
    constructor(title, author, copyrightDate, isbn, pageCount, timesCheckedOut, discardStatus) {
        super(title, author, copyrightDate, isbn, pageCount, timesCheckedOut, discardStatus);
    }
    novelDiscardUpdate(timesCheckedOut){
        if (timesCheckedOut >= 100){
            this.discardStatus = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");

let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:

shuttleManual.manualDiscardUpdate(shuttleManual.copyrightDate);
console.log(shuttleManual);

console.log(prideAndPrejudice.timesCheckedOut);
prideAndPrejudice.timesCheckedOut += 5;
console.log(prideAndPrejudice.timesCheckedOut);

