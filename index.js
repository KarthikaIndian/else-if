function grater(){
    let a=document.getElementById("number1").value;
    let b=document.getElementById("number2").value;
    let c=document.getElementById("number3").value;

    if(a>b && a>c){

  
    document.getElementById("result").innerHTML="A is Greater value ";
}
    else if(b>a && b>c ){
        document.getElementById("result").innerHTML=" B is Greater value";
    }
    else if(c>a && c>b){
        document.getElementById("result").innerHTML="C is Greater value"
    }
    else if(a==b && b==c && a==c){
        document.getElementById("result").innerHTML="All are Equal"
    }

    
}