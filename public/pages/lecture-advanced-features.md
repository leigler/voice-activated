# Lecture: Annyang API Advanced Features

<style>
  img{
    display: block;
    max-width: 100%;
    max-height: 98vh;
    object-fit: contain;
    object-position: center;
    box-sizing: border-box;
    border: dotted 2px #8A2BE2;
    cursor: none;

    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  img:active, video:active{
    filter: saturate(1000%) contrast(2000%) grayscale(100%);
  }

</style>

## Starting a local server
first open terminal: ('command + space', then search for 'terminal')
![Opening terminal](/files/starting_a_server/local_server1.jpg)

type 'cd ' (be sure to include space) and then drag and drop the parent directory of your index.html file
![CD into parent directory by dragging and dropping](/files/starting_a_server/local_server2.jpg)

you can then run the command php -S localhost:8000
![starting the server](/files/starting_a_server/local_server3.jpg)

once the server is started you can view your index.html file by opening chrome and visiting the address localhost:8000
![starting the server](/files/starting_a_server/local_server4.jpg)


## Event Listeners and Callbacks
An event listener is a type of callback that can be used to identify interactions with the document. These are added using the following syntax:

```javascript

document.body.addEventListener('click', functionName);

```

A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

Annyang has a series of library specific callbacks that fire upon the completion of certain function. These will make it easier to produce an interaction that follows the five states of feedback that we discussed.

<!-- You have encountered one already in the speech starter pack -->

Below are a few callbacks that we think will be useful for implementing the five states of feedback and for debuging
 
If you are feeling adventurous, feel free to take a look at the full [Annyang Doc](https://github.com/TalAter/annyang/blob/master/docs/README.md)

Each one of these callbacks will be defined in your initialize function

## start
Fired as soon as the browser's Speech Recognition engine starts listening.

```javascript

annyang.addCallback('start', startFunction);

```

An important thing to remember is that this will only fire when you call
```javascript
annyang.start();
```

## soundstart
Fired as soon as any sound (possibly speech) has been detected.

This will be useful for state 2, Begining an input

```javascript

annyang.addCallback('soundstart', soundStarted);

```

## result
Fired as soon as some speech was identified. 

This will be useful for state 3, Acknowledge received input

```javascript

annyang.addCallback('result', resultFunction);

```

## resultMatch
Fired when annyang was able to match between what the user said and a registered command. This would be great for state 4 if you wanted to include some preprocessing before producing your output, e.g. comparing what the user said to the commamd text you were expecting.

The Callback functions for this event will be called with three arguments in the following order, in this case we've named them userSaid, commandText, and phrases:

- The phrase the user said that matched a command.
- The command that was matched.
- An array of possible alternative phrases the user might have said.

```javascript

annyang.addCallback('resultMatch', resultMatch);

function resultMatch(userSaid, commandText, phrases){
  console.log(userSaid); // sample output: 'hello'
  console.log(commandText); // sample output: 'hello (there)'
  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
}

```

## resultNoMatch
Fired when what the user said didn't match any of the registered commands. This would be a great callback to use for state 5, your error state.

Callback functions for this event will be called with an array of possible phrases the user might have said as the first argument.

```javascript

annyang.addCallback('resultNoMatch', resultNoMatch);

function resultNoMatch(phrases){
  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
}

```

## States of feedback for example application:

### 1. Show ready state
The 'Talk to me' Button is not disabled and is a call to action for the user.

### 2. Begin Input
Annyang will not start listening until the user clicks on the 'talk to me' button.

### 3. Acknowledge received input
A gif of an ear with a rainbow of information emmiting into it is display when `annyang` recognizes speech/sound.

### 4. Show output
A response appears underneath the prompt that the code is responding to.

### 5. Error State
A negative response appears in red when the computer doesn't understand (can't respond to) what you have said.
