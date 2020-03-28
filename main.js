function insert(num) {
    document.getElementById("textview").value = document.getElementById("textview").value + num;
};

function AllClear() {
    document.getElementById("textview").value = "";
    document.getElementById("result").value = "";
}

function Clear() {
    var str = document.getElementById("textview").value;
    document.getElementById("textview").value = str.substring(0, str.length - 1);
}

function sum() {
    document.getElementById("textview").value = document.getElementById("textview").value + "+";
};

function sub() {
    document.getElementById("textview").value = document.getElementById("textview").value + "-";
};

function multi() {
    document.getElementById("textview").value = document.getElementById("textview").value + "*";
};

function div() {
    document.getElementById("textview").value = document.getElementById("textview").value + "/";
};

function equal() {
    var str = document.getElementById("textview").value;
    var exp;
    var num1 = "";
    var num2 = "";
    var index;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "^") {
            exp = str[i];
            index = i;
            break;
        }
        num1 += str[i];
    }
    for (var i = index + 1; i < str.length; i++) {
        num2 += str[i]
    }
    console.log(num1);
    console.log(num2);
    console.log(exp);
    if (exp === "^") {
        document.getElementById("result").value = Math.pow(num1, num2);
    } else {
        document.getElementById("result").value = eval(str);
    }
}