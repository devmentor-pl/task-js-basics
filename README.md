# Browser calculator in Javascript. Don't skip it, please!

I know what you're thinking. What's interesting about a calculator when writing it makes no sense today?! You're absolutely right! Nevertheless, this exercise helps a lot, especially at the beginning of the journey with JS, to memorize the basics of the language and use it properly.

## Content:
##### 1) Challenges
1. Test small chunks of code.

##### 2) Gained knowledge

### Test small chunks of code
I wanted to check if `this.history.push(${num1} + ${num2} = ${result});` pushes values correctly to `Calculator.history` array.

![](./README-img/test-new-window(main).png)

It was uncomfortable to test it inside the core code because of other operations that occured when running it. I put the code into another window and tested it separately. It's always beneficial to examine complex code in small chunks, as it makes it much easier to handle:

![](./README-img/test-new-window(test).png)


### Gained Knowledge:
1) Use constructor, functions, function expressions, arrays.
2) Use prototypes for better RAM management.
3) Use loops: for, do... while.
4) Use JS built-in methods f.e.: join(), includes().
5) Reduce code repetition.
6) Create object with "new".
7) Create small functionalities to be used in more complex code.
8) Naming - good practice.
