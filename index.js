
//declare function firstPalindrome which takes a parameter, words
//create a loop that checks through the string to check for the first palindromic string
//use the .split() method to convert the string into an array
//use .reverse() method to reverse the formed array
//use the .join() method to join the reversed array
//compare if reversed array is the same as the original string of array someArray()
//if so return return the element
//if the condition is not met, return an empty array.
// ['a', 'b', 'c'].reverse
// "car".split("")

// "car".split("").reverse();


// "car".split("").reverse().join("")

function firstPalindrome(words){
    for(element of words){
        let reversedArray = element.split("").reverse().join("");
        if(reversedArray == element){
            return element;
        }
    }
    return "";
}

let someArray = ['car', 'ada', 'flower','kayak']
firstPalindrome(someArray);
