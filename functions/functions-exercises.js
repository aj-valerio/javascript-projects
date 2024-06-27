// Write a function makeLine(size) that returns exactly (size) hashes. //

function makeLine(n){
    let line = ""
    for (let i = 0; i < n; i++){
        line = line + "#";
    }
    return line
}

console.log(makeLine(20));

// Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape.//

function makeSquare(size){
    
    let square = makeRectangle(size, size);
    return square;
}

console.log(makeSquare(4));

// Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this. //


function makeRectangle(width, height){
    let rectangle = "";
    for (let i = 0; i < height; i++){
            rectangle = rectangle + makeLine(width) + "\n";
        }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(6, 3));

// Now, go back and rewrite makeSquare to use makeRectangle.

// Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this. //

let stairs = ""
function makeDownwardStairs(height){
    for (let i = 0; i < height; i++){
        stairs = stairs + makeLine(i + 1) + "\n";
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

// Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces. //

function makeSpaceLine(numSpaces, numChars){
    let spaceLine = "";
    let spaces = "";
    let chars = "";
    for (let i = 0; i < numSpaces; i++){
        spaces += " ";
    }
    for (j = 0; j < numChars; j++){
        chars += "#";
    }
    spaceLine = spaces + chars + spaces;
    return spaceLine;
}
console.log(makeSpaceLine(3, 5));

// Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height. //

function makeIsoscelesTriangle(height){
    let isoscelesTriangle = ""
    for (let i = 0; i < height; i++){
        isoscelesTriangle += makeSpaceLine(height - i + 1, 2 * i + 1) + "\n";
    }
    return isoscelesTriangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5));

// Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height. //

function makeDiamond(height){
    let isoscelesTriangleReversed = makeIsoscelesTriangle(height).split("").reverse().join("");
    let diamond = "";
    diamond = makeIsoscelesTriangle(height) + "\n" + isoscelesTriangleReversed;
    return diamond.slice(0, -1);
}
console.log(makeDiamond(5));