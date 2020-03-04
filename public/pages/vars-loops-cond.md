# Variables, Conditionals, and Loops

## Variables
A variable is a piece of information you store for later use:

```javascript

var myVariable = 'a piece of information';

```

to redefine a variable, you can just set it equal to another value:
```javascript

var myVariable = 'a piece of information';

myVariable = 'a new piece of information';

```

## Variable Types
There are several different variable types:

### Strings 
- Strings are pieces of text: `"strings"`
- You can combine multiple strings with the `+`: 
```javascript

"string" + "another" // outputs "stringanother"

"string" + " another" // outputs "string another"

``` 

- You can add to update an existing string with `+=` 
```javascript

var myVariable = "string";

myVariable += ' and another'; // outputs "string and another"


``` 


### Numbers
- Integers are whole numbers: `1`
- You can use basic arithmetic to combine numbers: (`*`, `/`, `-`, `+`)

Adding strings with numbers outputs a string:
```javascript

20 + "px" //outputs "20px"

``` 

### Booleans
`true` or `false`

### Arrays
Arrays are lists of variables: `['apple', 'orange', 'pear']` and are denoted with square brackets: `[]`.

To select a specific value of an array, you can call it by its index:
(arrays are 0-index based, meaning the first element is referenced with th number 0, the second element is referenced by 1, etc) 

```javascript

var myFruits = ['apple', 'orange', 'pear'];

myFruits[0] // outputs 'apple'
myFruits[1] // outputs 'orange'

myFruits[4] // outputs undefined


```

### Objects
Objects are collections of variables that use `keys` to store `values` and use curly brackets: `{}`.

```javascript

var myObject = {
	key : 'my value',
	anotherkey: ['my', 'array', 'of', 'values']
};

```

To call a specific value of an object, you reference its key:
```javascript

myObject.key // outputs 'my value'

myObject.anotherkey[0] // outputs 'my'

```


## Conditionals

To evaluate variable relationships, you can use if statements:

```javascript

if(true){
	// do somethings
}else{
	// do something else
}


```

### Comparisons

You can compare variables in a variety of ways:

- equal in variable and content: `if( x === y)`
- equal in content: `if(x === y)`
- greater than: `if(x > y)`
- greater than and equal to: `if(x >= y)`
- less than: `if(x < y)`
- less than and equal to: `if(x <= y)`

Additionally, you can use multiple comparisons:

- must meet both conditions: `if(x === y && x === z)`
- must meet either condition: `if(x === y || x === z)`


You can also chain multiple if statements together:

```javascript

var myString = 'yes';

if(myString === 'yes'){

}else if(myString === 'maybe'){
	
}else{

}

```

## Javascript Loops

We have already learned how to make code run based off of specific conditions using `if(){ }` statements:

```javascript

var i = 1;

if(i <= 10){
	// run some code!

	console.log("hello!");

}

```

### But what if we want to repeat an action 10 times? 100 times? 1000 times? *n* times?

To repeat a sequence of events in javascript, we need to tell our code *when to stop*. Otherwise our code will run forever. We can use what we&rsquo;ve learned from if statements to do this.

In Javascript we use loops to repeat actions multiple times. There are two main types of loops, *while* and *for*.


### While Loop
### \*Dangerous\*

The while loop runs until the condition inside its `()` isn&rsquo;t met. The example below would run forever (or until your browser crashes):

```javascript

var i = 1;

while(i <= 10){

	console.log("hello!");

}

```

This is because our code doesn&rsquo;t change `i`. `i` will always be less than or equal to (`<=`) 10.

This can be changed by modifying `i` everytime the while loop runs:

```javascript

var i = 1;

while(i <= 10){

	console.log("hello!");
	i = i + 1;
}

```

Now, each iteration will update `i` by one. After 10 iterations, the while loop will stop because `i` will be equal to 11. 

`i = i = 1` is so commonly used in javascript that we have a shorthand:

```javascript

var i = 1;

while(i <= 10){

	console.log("hello!");
	i++; // i++ is the same as i = i + 1;
}

```


## For Loop
A for loop is similarly used to repeat a sequence of actions (insteading of typing those actions out for each and every possible case).

This example also repeats ten times:

```javascript
for (var i = 1; i <= 10; i++) {
	var result = i * 6;
	console.log(result);
}

```

If you take a close look inside the `()`, you'll recognize three statements:
- Our starting point: `var i = 1;` defines our variable `i`
- Our ending condition: `i <= 10` is a conditional
- Our iteration: `i++` increases our count by 1;

Together, this can be read as: For the code inside this statement, start with 1, don&rsquo;t stop till we&rsquo;re at 10.

`for` loops are generally considered safer than `while` loops because we are forced to define an end point.

## For Loops and Arrays

### Array length
Arrays are lists of data—we can learn certain things about them, like their length:

```javascript
var myArray = ["apples", "oranges", "pears", "tomatoes"];

console.log(myArray.length);
```



### Using Arrays
We can use for loops to traverse previously stored information:

```javascript
var myArray = ["apples", "oranges", "pears", "tomatoes"];

for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}

```