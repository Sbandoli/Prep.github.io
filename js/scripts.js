function sumArray(numArray) {
    total = 0;

    for (i = 0; i < numArray.length; i += 1) {
        total += numArray[i]
    }

    console.log("SumArray: " + total)
    return total
}   // end function sumArray

sumArray([1, 2, 3, 4]);

function findLongestWord(word) {
    word = word.split(' ');
    maxLength = 0;
    longestWord = '';
    
    for (i = 0; i < word.length; i++) {
        if (word[i].length > maxLength) {
            maxLength = word[i].length;
            longestWord = word[i];
        }
    }

    console.log("findLongestWord maxLength: " + maxLength);
    console.log("findLongestWord longestWord: " + longestWord);
}   // end function findLongestWord

findLongestWord("This is my first web development project");

function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}   // end function fizzBuzz

fizzBuzz(50);