var solutionArr = []
var Result = 0

document.getElementById("add").onclick = function(){

    var subjct1Grade = parseFloat(document.getElementById("inputBox").value);
    solutionArr.push(subjct1Grade)
  
    document.getElementById("subj1").innerHTML += parseFloat(subjct1Grade) + "\n";
    console.log(solutionArr)
    
}




document.getElementById("calButton").onclick = function(){
   
    for (var i = 0; i < solutionArr.length; i++){
        Result += solutionArr[i];
    }
    finalResult = Result/solutionArr.length
    document.getElementById("result").innerHTML += Math.round(parseFloat(finalResult).toFixed(1));
    console.log(finalResult)
    
}