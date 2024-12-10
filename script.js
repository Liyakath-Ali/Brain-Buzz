let count=0
let wcount=0
function checkanswer(button, isCorrect) {
    // Disable all buttons in the same question
    const buttons = button.parentElement.querySelectorAll(".option");
    buttons.forEach(btn => btn.disabled = true);
    // Apply the correct or incorrect class
    if (isCorrect) {
        button.classList.add("correct");
        count++
    } else {
        button.classList.add("incorrect");
        wcount++
    }
}
function submit(){
    if (wcount+count==5){
        document.getElementById('result').innerHTML=`<span id="abc"><strong>Your score:</strong></span> <strong>${count} /5</strong>`;
    }
    else{
        alert("Answer all questions")
    }
}
function reload(){
    location.reload()
}

/*const btn1=document.getElementById("wopt1")
const btn2=document.getElementById("wopt2")
const btn3=document.getElementById("wopt3")
const cbtn=document.getElementById("copt")
function canswer(){
    cbtn.style.background="Green"
}
function wanswer1(){
    btn1.style.background="Red"
    cbtn.style.background="Green"   
}
function wanswer2(){
    btn2.style.background="Red"
    cbtn.style.background="Green"
}
function wanswer3(){
    btn3.style.background="Red"
    cbtn.style.background="Green"
}*/