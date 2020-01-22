
function add(){
    var x = document.getElementById("val_x").value;
    var y = document.getElementById("val_y").value;
    result = parseInt(x) + parseInt(y);
    output(result);
    console.log(result);
}

function sub(){
    var x = document.getElementById("val_x").value;
    var y = document.getElementById("val_y").value;
    result = parseInt(x) - parseInt(y);
    output(result);
    console.log(result);
}

function mul(){
    var x = document.getElementById("val_x").value;
    var y = document.getElementById("val_y").value;
    result = parseInt(x) * parseInt(y);
    output(result);
    console.log(result);
}

function div(){
    var x = document.getElementById("val_x").value;
    var y = document.getElementById("val_y").value;
    result = parseInt(x) / parseInt(y);
    output(result);
    console.log(result);
}

function output(result){
    document.getElementById("output").innerText = "";
    document.getElementById("output").innerText = result;
}
