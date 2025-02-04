const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (((oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth) > ((person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth)) {
            return oldest;
        } 
        else {
            return person;
        }
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
