    document.getElementById("hi").onclick = function() {
    var a = document.getElementById("family").value , b = document.getElementById("done") ;

    if("m" == a) {
        b.innerHTML = "HI MOM";
    }
    else if("d" == a) {
        b.innerHTML = "HI DAD";
    }
    else if("s" == a) {
        b.innerHTML = "HI SISTER";
    }
    else if("b" == a) {
        b.innerHTML = "HI BROTHER";
    }
    else {
        b.innerHTML = "HI FAMILY";
    }

    // b.classList.add("bg-success");
    // b.classList.add("text-center");
    // b.classList.add("text-white");

    b.className = "bg-success text-center text-white col-4";
}

