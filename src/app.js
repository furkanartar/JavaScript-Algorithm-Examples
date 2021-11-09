// Asal sayıları bulma
function findPrimeNumbers(...numbers) {
  numbers.forEach((number) => {
    let status = true;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        status = false;
      }
    }

    status ? console.log(number) : console.log("asal değil", number);
  });
}
// findPrimeNumbers(5, 11, 8, 13, 20, 18, 29)

// Arkadaş sayı bulma
function findFriendNumbers(numberOne, numberSecond) {
  let numberOneDivisors = [];
  let totalOne = 0;
  let totalSecond = 0;

  for (let i = 1; i < numberOne; i++) {
    if (numberOne % i == 0) {
      numberOneDivisors.push(i);
    }
  }

  let numberSecondDivisors = [];
  for (let i = 1; i < numberSecond; i++) {
    if (numberSecond % i == 0) {
      numberSecondDivisors.push(i);
    }
  }

  numberOneDivisors.forEach((number) => {
    totalOne += number;
  });

  numberSecondDivisors.forEach((number) => {
    totalSecond += number;
  });

  if (totalOne == numberSecond && totalSecond == numberOne) {
    console.log("Bu iki sayı arkadaş sayıdır.");
  } else {
    console.log("Bu iki sayı arkadaş sayı değildir.");
  }
}
// findFriendNumbers(220, 284);

//1000'e kadarki tüm mükemmel sayıları bulma
function findPerfectNumber() {
  let perfectNumbers = [];

  for (let i = 6; i <= 1000; i++) {
    let total = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        total += j;
      }
    }

    if (total == i * 2) {
      perfectNumbers.push(i);
    }
  }

  console.log(perfectNumbers);
}
// findPerfectNumber();

//1000'e kadarki tüm asal sayıları bulma
function findPrimeNumbersToThousand(params) {
  let primeNumbers = [];
  for (let i = 2; i <= 1000; i++) {
    let status = true;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        status = false;
      }
    }

    status ? console.log(i) : " ";
  }
  
  console.log(primeNumbers);
}

findPrimeNumbersToThousand()