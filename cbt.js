let pos = 0, test, test_status,question, choice, choices, chA, chB, chC, correct= 0, totalScore = 0;
let questions = [
    ["What is 10 + 4?","12", "14", "16", "B"],
    ["What is 20 - 9?", "7", "13", "11", "C"],
    ["What is 7 X 3?", "21", "24", "25", "A"],
    ["What is 8 / 2?", "10", "2", "4", "C"],
    ["Who is the father of computer?", "Barbage", "Einsten", "Paschal", "A"]
];

function  first(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = first("test");
    if(pos == questions.length){
        test.innerHTML = "<h2> you got " + correct + " out of " + questions.length + " questions correct and your  totalScore is  = " + correct *10 + "</h2>"
        first("test_status").innerHTML = "Test completed";
        pos = 0;
        correct = 0;
        return false
    }
    first("test_status").innerHTML = " Question " + ( pos + 1 ) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "<?h3>";
    test.innerHTML += " A<input type ='radio' name = 'choices' value = 'A' >" + chA +"<br>"
    test.innerHTML += " B<input type ='radio' name = 'choices' value = 'B' >" + chB +"<br>"
    test.innerHTML += " C<input type ='radio' name = 'choices' value = 'C' >" + chC +"<br>"
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(let i = 0; i < choices.length; i++){
        
        if(choices[i].checked){
            choice = choices[i].value;
    
        }
    }
    if(choice == questions[pos][4]){
        correct++
    }
    pos++
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);