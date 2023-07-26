function checkIsSquare(_squareNum){

        const _sqNum = parseInt(Math.sqrt(_squareNum)) 

        console.log(_squareNum)
        
        if( (_sqNum *_sqNum) == _squareNum )
             console.log(_squareNum + " has a square root = " + Math.sqrt(_squareNum))
        else
             console.warn("OOPS! " + _squareNum + " doesn't have a square root. Try again!")    
}