const bobsFollowers = ['Tono', 'Silviux', 'Piumpi', 'Rob']

const tinasFollowers = ['Sam', 'Tono', 'Piumpi']

const mutualFollowers = [];

for (let i=0; i < bobsFollowers.length; i++ ) {
    for (let j=0; j < tinasFollowers.length; j++ ) {
        if (tinasFollowers[j] === bobsFollowers[i]) {
            mutualFollowers.push(tinasFollowers[j])
        }
    }

}
/*
Create a nested loop that iterates through bobsFollowers 
as the array for the outer loop and tinasFollowers as the 
array for the inner loop. If the current element from the 
outer loop is the same as the current element from the inner loop, 
push that element into the mutualFollowers array.

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

*/
