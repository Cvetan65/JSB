function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let howOld = currentYear - birthYear
    console.log(`Your are ${howOld} years old`)
}
calculateAge(1965)
calculateAge(1969)
calculateAge(1994)