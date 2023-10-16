const sentence = "hello there from lighthouse labs"; // Declare a string to simulate the typewriter effect

let delay = 0;  // Initialize a delay variable starting at 0ms

for (const char of sentence) {  // Loop through each character of the sentence
  setTimeout(() => {  // Schedule a function to run after the specified 'delay'
    process.stdout.write(char); // Print the current character to the terminal without a newline
  }, delay);  // The delay time before this function executes, increasing with each loop iteration
  delay += 100;  // Increment the delay by 100ms for the next character
}

// Schedule a function to move the terminal prompt to the next line after the entire sentence is printed
setTimeout(() => {
  process.stdout.write('\n'); // Print a newline character to the terminal
}, delay);
