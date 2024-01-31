// FIRST CODE

let string="";
let ipt=document.getElementById('input');
let pens = document.querySelectorAll('.button');
let arr=Array.from(pens);
arr.forEach((button )=>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            ipt.value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            ipt.value=string;
        }
        else{
        string = string + e.target.innerHTML;
        ipt.value=string;
        }
    })
})


// SECOND CODE

var s="";
function b1(){
    document.getElementById("input").innerHTML="";
    s="";
}
function b2(){
    document.getElementById("input").innerHTML=(s)+"()";
    s+="()";
}
function b3(){
    document.getElementById("pr").style.boxShadow="4px 5px 6px";
    document.getElementById("input").innerHTML=(s)+"%";
    s+="%";
}
function b4(){
    document.getElementById("input").innerHTML=(s)+"/";
    s+="/";
}
function b5(){
    document.getElementById("input").innerHTML=(s)+"7";
    s+="7";
}
function b6(){
    document.getElementById("input").innerHTML=(s)+"8";
    s+="8";
}
function b7(){
    document.getElementById("input").innerHTML=(s)+"9";
    s+="9";
}
function b8(){
    document.getElementById("input").innerHTML=(s)+"*";
    s+="*";
}
function b9(){
    document.getElementById("input").innerHTML=(s)+"4";
    s+="4";
}
function b10(){
    document.getElementById("input").innerHTML=(s)+"5";
    s+="5";
}
function b11(){
    document.getElementById("input").innerHTML=(s)+"6";
    s+="6";
}
function b12(){
    document.getElementById("input").innerHTML=(s)+"-";
    s+="-";
}
function b13(){
    document.getElementById("input").innerHTML=(s)+"1";
    s+="1";
}
function b14(){
    document.getElementById("input").innerHTML=(s)+"2";
    s+="2";
}
function b15(){
    document.getElementById("input").innerHTML=(s)+"3";
    s+="3";
}
function b16(){
    document.getElementById("input").innerHTML=(s)+"+";
    s+="+";
}
function b17(){
    document.getElementById("input").innerHTML=(s)+".00";
    s+=".00";
}
function b18(){
    document.getElementById("input").innerHTML=(s)+"0";
    s+="0";
}
function b19(){
    document.getElementById("input").innerHTML=(s)+".";
    s+=".";
}
var i=0;
function b20(){
    s=eval(s);
    if(s==null){
        document.getElementById("input").innerHTML="";
    }
    else{
    document.getElementById("input").innerHTML=(s);
    }

    if(i%2==0){
        document.getElementById("pen").style.backgroundImage="url('beast1.jpg')";
        i++;
    }
    else{
        document.getElementById("pen").style.backgroundImage="url('beast.jpg')";
        i++;
    }
    }


  