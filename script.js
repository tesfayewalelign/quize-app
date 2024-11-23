const quize=[
    {
        
        question:"Lists with no duplicate or identical entries are called what??",
        answers:[
            {Text:"sets",correct:true},
            {Text:"groups",correct:false},
            {Text:"Archives ",correct:false},
            {Text:"collections",correct:false},
            
        
        ]
    },
    {
        
        question:"Python includes built-in ____ libraries.?",
        answers:[
            {Text:"HTML",correct:false},
            {Text:"PHP",correct:false},
            {Text:"JSON",correct:true},
            {Text:"CSS",correct:false},
            
        
        ]
    },
    {
        
        question:"What is the function or tool that is used to create iterators??",
        answers:[
            {Text:"Conditional Arguments ",correct:false},
            {Text:"loops",correct:false},
            {Text:"Generators ",correct:true},
            {Text:"Serialization ",correct:false},
            
        
        ]
    },
    {
        
        question:"Resourceful developers have the ability to examine classes, keywords, and functions and know what they do, what they are used for, and what data they store. What is this called??",
        answers:[
            {Text:" Self Documenting ",correct:false},
            {Text:"Intelligence ",correct:false},
            {Text:" Code Introspection ",correct:true},
            {Text:" Memorization ",correct:false},
            
        
        ]
    },
    {
        
        question:"what is the type of formatting that python uses to store and create new alligned string?",
        answers:[
            {Text:"F-Style String Formatting",correct:false},
            {Text:" Variable Formatting ",correct:false},
            {Text:" C-Style String Formatting ",correct:true},
            {Text:" Sequential Formatting ",correct:false},
            
        
        ]
    },
    {
        
        question:"what is the argument specifier for a strin?",
        answers:[
            {Text:"%s",correct:true},
            {Text:"%f",correct:false},
            {Text:"%d",correct:false},
            {Text:"%",correct:false},
            
        
        ]
    },
    {
        
        question:"What is the name of the Python data type that is used to store keys and values, as opposed to indexes??",
        answers:[
            {Text:" Dictionary ",correct:false},
            {Text:" Object ",correct:false},
            {Text:" String ",correct:true},
            {Text:" Operator ",correct:false},
            
        
        ]
    },
    {
        
        question:"In order to create objects in Python, you use a template called ____.?",
        answers:[
            {Text:"class",correct:false},
            {Text:"objects",correct:false},
            {Text:"variables",correct:true},
            {Text:"Strings ",correct:false},
            
        
        ]
    },
    {
        
        question:"What is the name of the operator that is used to compare two values??",
        answers:[
            {Text:"Arithmetic Operator ",correct:false},
            {Text:" Comparison Operator ",correct:true},
            {Text:" Logical Operator ",correct:false},
            {Text:" Assignment Operator ",correct:false},
            
        
        ]
    },
    {
        
        question:"the real power and convenience of developing with PHP comes from its_____",
        answers:[
            {Text:"Design ",correct:false},
            {Text:"Syntax ",correct:false},
            {Text:" Updates ",correct:false},
            {Text:" Functions ",correct:true},
            
        
        ]
    },
    {
        
        question:"A snippet of PHP code is often referred to as a____.?",
        answers:[
            {Text:" Chunk ",correct:false},
            {Text:"Segment ",correct:false},
            {Text:"Script ",correct:true},
            {Text:" Document ",correct:false},
            
        
        ]
    },
    
    
    
]
const questionElement=document.getElementsByClassName("que")[0];
const buttonElement=document.querySelectorAll(".but");
const nextElement=document.getElementsByClassName("next")[0];
const preElement=document.getElementsByClassName("pre")[0];
let currentQuestionIndex = 0;

function mean(){
    const currentQuestion=quize[currentQuestionIndex];
    questionElement.textContent=currentQuestion.question;



    buttonElement.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index].Text;
        button.onclick = () => {
            const isCorrect = currentQuestion.answers[index].correct;
            if (isCorrect) {
                button.classList.add("correct");
            } else {
                button.classList.add("wrong");
            }
            setTimeout(() => {
                button.classList.remove("correct", "wrong");
            }, 1000);
        };
    });

    if(nextElement){
        nextElement.addEventListener("click", () => {
            if (currentQuestionIndex < quize.length - 1) {
                currentQuestionIndex++;
                mean();
            } else {
               
            }
        });
    }
    if(preElement){
        preElement.addEventListener("click", () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                mean();
            } else {
                
            }
        });
    }
}


            
   

mean();



