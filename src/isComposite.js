function checkIsComposite(_compNum){

        console.log(_compNum)

        let isPrime = true;

        if (_compNum === 1) {
                console.warn("1 is neither prime nor composite number.");
        }

        else if (_compNum > 1) {

        for (let i = 2; i < _compNum; i++) {
                if (_compNum % i == 0) {
                isPrime = false;
                break;
                }
        }
                if (isPrime) {
                        console.warn("OOPS! " + _compNum + " is not a composite number. Try again!")
                }
                else {
                       console.log( `${_compNum} is a composite number`)
                }
        }    
}