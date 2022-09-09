

// function ff(){

//     var exp=document.getElementById("demo").value;
//     var res=eval(exp);
//     document.getElementById("demo").value= +res;
// }






function ff(){

    var exp=document.getElementById("demo").value;
    const last=exp.slice(-1);
    if(last=="+"){
        alert("Wrong Input")
        document.getElementById("demo").value="";

    }
    else if(last=="-"){
        alert("Wrong Input")
        document.getElementById("demo").value="";
    }
    else if(last=="*"){
        alert("Wrong Input")
        document.getElementById("demo").value="";
    }
    else if(last=="."){
        alert("Wrong Input")
        document.getElementById("demo").value="";
    }
    else{
        var res=eval(exp);
    document.getElementById("demo").value= +res;
    }
    
}





function s7() {
    document.getElementById("demo").value+= 7 ;

}

function s8() {
    document.getElementById("demo").value+=8;

}

function s9() {
    document.getElementById("demo").value+=9;

}
function s4() {
    document.getElementById("demo").value+=4;

}
function s5() {
    document.getElementById("demo").value+=5;

}
function s6() {
    document.getElementById("demo").value+=6;

}
function s1() {
    document.getElementById("demo").value+=1;

}
function s2() {
    document.getElementById("demo").value+=2;

}
function s3() {
    document.getElementById("demo").value+=3;

}

function sa() {
    document.getElementById("demo").value+= "+";

}
function ss() {
    document.getElementById("demo").value+= "-" ;
    

}

function sm() {
    document.getElementById("demo").value+= "*";

}

// function se() {
//     document.getElementById("demo").value= ff();

// }

function so() {
    document.getElementById("demo").value+= "0";

}

function sd() {
    document.getElementById("demo").value+= ".";

}

function sc() {
    document.getElementById("demo").value= "";

}




