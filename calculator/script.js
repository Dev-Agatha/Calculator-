const result =document.getElementById("input-screen");

function calc(number){
    result.value=result.value+number;
}

let Result =()=>{
    try{
        result.value= eval(result.value)
    }
    catch(err){
        alert("Enter a valid number");
    }
}

let erase=()=>{
  result.value=" " ; 
}

let del=()=>{
    result.value=result.value.slice(0,-1);
}