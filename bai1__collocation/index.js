function sapxep(){
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    var total = "";


    if(number1 < number2 && number2 < number3 ) {
        total =  number1 + " < " + number2 + " < " + number3 ;
    } 
    else if(number1 < number3 && number3 < number2){
        total =  number1 + " < " + number3 + " < " + number2 ;
    }
    else if( number2 < number3 && number3 < number1) {
        total =  number2 + " < " + number3 + " < " + number1 ;
    }
    else if( number2 < number1 && number1 < number3) {
        total =  number2 + " < " + number1 + " < " + number3 ;
    }
    else if( number3 < number1 && number1 < number2) {
        total =  number3 + " < " + number1 + " < " + number2 ;
    }
    else {
        total =  number3 + " < " + number2 + " < " + number1 ;
    }

    document.getElementById("done").innerHTML = total ; 
    document.getElementById("done").classList.add("bg-success");
    document.getElementById("done").classList.add("text-center");
    document.getElementById("done").classList.add("text-white");
}