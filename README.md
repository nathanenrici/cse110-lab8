# Lab 8 - Starter
names: Nathan Enrici

1. I would run the automated tests locally before pushing the code. This would ensure that all tested problems could be fixed quickly, and the tests are written close to the code.
2. no.
3. Most likely not. Assuming there is some message() function, you would not be able to test its return value in a simple unit test as you would have to check on another device if it actually recieved the message properly.
4. You could. If the message() function is able to return a reject/error statement, you could pass it messages that were too long and make sure it rejects them.