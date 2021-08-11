// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    const result = []; // possible result
    routine.forEach((callbackFunction) => { // iterate over each function
        result.push(callbackFunction(dogName, dogBreed)); // add to the array with push 
    });
    return result;
}

function wakeDog(dogName, dogBreed) {
    const phrase = `Wake ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function leashDog(dogName, dogBreed) {
    const phrase = `Leash ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function walkToPark(dogName, dogBreed) {
    const phrase = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function throwFrisbee(dogName, dogBreed) {
    const phrase = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function walkHome(dogName, dogBreed) {
    const phrase = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function unleashDog(dogName, dogBreed) {
    const phrase = `Unleash ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

