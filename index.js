let args = process.argv.slice(2);

if(args.length === 0) {
    console.log("You must provide a word to translate");
    console.log("example:");
    console.log("    node index.js book")
} else {
    let input = args.join(" ");
}

// you can run this program like this:
//     node index.js

// anything after `index.js` will be treated as
// input into the program, and stored in the variable `input`

// for example.
//     node index.js hi there

// when the above is ran, the variable `input` will have the value
// "hi there"

//---------------------------------------------------------------------


// TODO:
//  0. what should happen if you run the program like this:
//         node index.js hi
//     NOTE: read the program carefully, this is a trick question

//  1. the built-in function: console.log takes one argument,
//     and prints it out.  update this script to print out
//     the value of the variable `input`

//  2. create a function called `translate` that takes one argument
//     and prints it out, unchanged.

//  3. update the change you made in step one to call your new `translate`
//     function with `input` instead.

//  4. in your translate function, before printing it's argument, add another
//     line that prints the first letter of the argument.
