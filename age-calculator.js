const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + " is " + age + " years old."
}


console.log(ageCalculator("Ozzy", 1995, 2022));