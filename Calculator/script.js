function display(data){
    document.getElementById("result").value += data;
}

function clearscreen(){
    document.getElementById("result").value = "";
}

function solve(){
    let operation = document.getElementById("result").value ;
    let result = eval(operation);
    document.getElementById("result").value = result;
}

function keyBoardNumber(event) { 
          
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (event.which) ? event.which : event.keyCode ;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
        return false; 
    return true; 
} 

