var result = 0;
var operatorsSeq = "";
document.getElementById('btn0').onclick = function () {
    document.getElementById('res').innerHTML += 0;

};
document.getElementById('btn1').onclick = function () {
    document.getElementById('res').innerHTML += 1;

};
document.getElementById('btnSum').onclick = function () {
    operatorSeq = "+";
    result = parseInt(document.getElementById.innerHTML, 2);
    document.getElementById('res').innerHTML += "+";
};
document.getElementById('btnSub').onclick = function () {
    operatorSeq = "-";
    document.getElementById('res').innerHTML += "-";
};
document.getElementById('btnMul').onclick = function () {

    operatorSeq = "*";
    result = parseInt(document.getElementById.innerHTML);
    document.getElementById('res').innerHTML += "*";
};
document.getElementById('btnDiv').onclick = function () {
    operatorSeq = "/";
    document.getElementById('res').innerHTML += "/";
};
document.getElementById('btnClr').onclick = function () {
    document.getElementById('res').innerHTML = "";
};
document.getElementById('btnEql').onclick = function () {
    var num = 0;
    var ans = 0;

    if (operatorSeq == "+") {
        var i = (document.getElementById("res").innerHTML).split("+");


        num = parseInt(i[0], 2) + parseInt(i[1], 2);
        ans = num.toString(2);

    }
    else if (operatorSeq == "-") {
        var i = (document.getElementById("res").innerHTML).split("-");

        num = parseInt(i[0], 2) - parseInt(i[1], 2);
        ans = num.toString(2);
    }

    else if (operatorSeq == "*") {
        var i = (document.getElementById("res").innerHTML).split("*");

        num = parseInt(i[0], 2) * parseInt(i[1], 2);
        ans = num.toString(2);
    }
    else if (operatorSeq == "/") {
        var i = (document.getElementById("res").innerHTML).split("/");


        num = parseInt(i[0], 2) / parseInt(i[1], 2);
        ans = num.toString(2);
    }


    document.getElementById("res").innerHTML = ans;
};
