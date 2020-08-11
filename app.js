function result(){
    var score = 0
var q1_answer=document.getElementById("q1-a2")
if (q1_answer.checked==true){
        score++
        alert("Q1 answer is correct")
        
    }
else {  alert("Q1 answer is wrong ")}


var q2_answer = document.getElementById("q2-a4")
    
if (q2_answer.checked==true ){
    score++,
     alert("question 2 answer is correct")
}
else{alert("Q2 answer is wrong")} 


var q3_answer = document.getElementById("q3-a4")
    
if (q3_answer.checked==true ){
    score++,
     alert("question 3 answer is correct")

}
else{alert("Q3 Answer is wrong!")}

var q4_answer = document.getElementById("q4-a3")
    
if (q4_answer.checked==true ){
    score++,
     alert("question 4 answer is correct")
}
else{alert("Q4 answer is wrong ")}

// alert("your score is " score++)
}