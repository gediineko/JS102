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

// Functions Excercise

var AnimalTestUser = function (username){
    var argsLen = arguments.length;
    var otherArgs = [];
    if (argsLen > 1) {
        for (var i = 1; i < argsLen; i++) {
            otherArgs.push(arguments[i]);
        }
    }

    return {
        'username': username,
        'otherArgs': otherArgs
    };
}

var AnimalCreator = function (username, species, tagline, noises) {
    return {
        'username': username,
        'species': species,
        'tagline': tagline,
        'noises': noises,
        'friends': []
    }
}

var addFriend = function (animal, friend) {
    animal.friends.push(friend);
}

var myFarm = [];

var kit = AnimalCreator('Kit', 'cat', 'Meow! That\'s right!', ['meow', 'purr', 'growl']);
var dawg = AnimalCreator('Dawg', 'dog', 'Ruff life!', ['bark', 'yip', 'growl']);
var duffy = AnimalCreator('Duffy', 'duck', 'Quack away!', ['quack']);
var katy = AnimalCreator('Katy', 'cat', 'I meow you!', ['meow', 'purr', 'growl']);

myFarm.push(kit, dawg, duffy, katy);

addFriend(kit, dawg);
addFriend(kit, duffy);
addFriend(kit, katy);

addFriend(dawg, duffy);
addFriend(dawg, kit);
addFriend(dawg, katy);

addFriend(duffy, kit);
addFriend(duffy, dawg);
addFriend(duffy, katy);

addFriend(katy, kit);
addFriend(katy, dawg);
addFriend(katy, duffy);

var addMatchesArray = function (farm) {
    for (var i = 0; i < farm.length; i++){
        farm[i]['matches'] = [];
    }
}

addMatchesArray(myFarm);

var giveMatches = function (farm) {
    for (var i = 0; i < farm.length; i++){
        var match = [];
        for (var friends = 0; friends < farm[i].friends.length; friends++){
            if (farm[i].species === farm[i].friends[friends].species) {
                match.push(farm[i].friends[friends].username);
            }
        }
        farm[i].matches.push(match);
    }
}

giveMatches(myFarm);