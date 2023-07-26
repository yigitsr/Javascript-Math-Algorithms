function checkIsPrime(_primeNum) {

        console.log(_primeNum)

        let isPrime = true;

        if (_primeNum === 1) {
        console.warn("1 is neither prime nor composite number.");
        }

        else if (_primeNum > 1) {

        for (let i = 2; i < _primeNum; i++) {
                if (_primeNum % i == 0) {
                isPrime = false;
                break;
                }
        }

                if (isPrime) {
                        console.log(`${_primeNum} is a prime number`);
                }
                else {
                        console.warn("OOPS! " + _primeNum + " is not a prime number. Try again!")
                }
        }
}