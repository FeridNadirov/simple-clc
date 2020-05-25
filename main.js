    let x1;  let x2; let yekun;


    function ntc() 
    {


    document.getElementById("yekunCavab").value=yekun;

    }

    
    document.getElementById("vurma").onclick = function () {


    x1 = Number(document.getElementById("eded1").value);
    x2 = Number(document.getElementById("eded2").value);

    yekun = x1 * x2;

}

    document.getElementById("bolme").onclick = function () {


    x1 = Number(document.getElementById("eded1").value);
    x2 = Number(document.getElementById("eded2").value);

    yekun = x1 / x2;


}


    document.getElementById("toplama").onclick = function () {


    x1 = Number(document.getElementById("eded1").value);
    x2 = Number(document.getElementById("eded2").value);

    yekun = x1 + x2;


}

    document.getElementById("cixma").onclick = function () {


    x1 = Number(document.getElementById("eded1").value);
    x2 = Number(document.getElementById("eded2").value);
    
    yekun = x1 - x2;


}

