const findTheOldest = function (people) {
  for (let person of people) {
    const age =
      (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
    person.age = age;
  }

  people.sort((a, b) => b.age - a.age);

  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
