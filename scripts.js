//Use this file to implement Part One of your project

// Excercise 1: Objects
/*
var animal = {};

animal.username = 'Kitty';

animal['tagline'] = 'world domination!';

var noises = ['world domination!'];

animal.noises = noises;

var count = 0;
for (var key in animal){
    count++;
    if (key === 'username') {
        console.log(count + ' Hi my name is ' + animal[key]);
    } else if (key === 'tagline') {
        console.log(count + ' I like to say ' + animal[key]);
    }
}

// Excercise 2: Arrays

var noiseArray = ['meow~'];

noiseArray.unshift('hiss!');

noiseArray.push('purr~');

noiseArray[noiseArray.length] = 'rawr!'; 

for (var i = 0; i < noiseArray.length; i++) {
    noises.push(noiseArray[i]);
}

//animal.noises = noiseArray;

var animals = [];

animals.push(animal);

var quackers = { 
    username: 'DaffyDuck', 
    tagline: 'Yippeee!', 
    noises: ['quack', 'honk', 'sneeze', 'growl'] 
}

animals[animals.length] = quackers;

var dog = {
    username: 'Dawg',
    tagline: 'yo! sup?',
    noises: ['bark', 'yip', 'growl']
}

var cow = {
    username: 'Moomin',
    tagline: 'to the moooo~n and back!',
    noises: ['moooo']
}

animals.push(dog, cow);

// Constructor example

function animalMaker(name) {
    return {
        speak: function () {
            console.log('My name is ' + name);
        }, 
        name: name
    }
}

var animalNames = ['Sheep', 'Liger', 'Big Bird'];
var farm = []; 
for (var i = 0; i < animalNames.length; i++) {
    farm.push(animalMaker(animalNames[i]));
};

*/

var AnimalTestUser = function (username) {
    return {
        username: username
        if (arguments > 1) {
            , otherArgs: [arguments]
        }
    }    
}

var AnimalCreator = function (username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: [noises],
        friends: []
    }
}

var addFriend = function (animal, friend) {
    animal[friend].push(friend.username);
}

var myFarm = [];

