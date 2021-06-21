$(function() {
    //to prevent reload page 
    var ctrlKeyDown = false;

    $(document).ready(function() {
        $(document).on("keydown", keydown);
        $(document).on("keyup", keyup);
    });

    function keydown(e) {

        if ((e.which || e.keyCode) == 116 || ((e.which || e.keyCode) == 82 && ctrlKeyDown)) {
            // Pressing F5 or Ctrl+R
            e.preventDefault();
        } else if ((e.which || e.keyCode) == 17) {
            // Pressing  only Ctrl
            ctrlKeyDown = true;
        }
    };

    function keyup(e) {
        // Key up Ctrl
        if ((e.which || e.keyCode) == 17)
            ctrlKeyDown = false;
    };

    //define the question
    var allquestions = [{
            quizname: "what is 2 * 5",
            Answers: ["2", "5", "10", "15", "20"],
            Correctanswer: "10",
            Correctanswerindex: 2,

            Degree: 10
        }, {
            quizname: "what is 3 * 6",
            Answers: ["3", "9", "6", "12", "18"],
            Correctanswer: "18",
            Correctanswerindex: 4,
            Degree: 10
        }, {
            quizname: "what is 75 / 5",
            Answers: ["5", "10", "3", "15", "25"],
            Correctanswer: "15",
            Correctanswerindex: 3,
            Degree: 10
        }, {
            quizname: "what is 600 / 50",
            Answers: ["11", "15", "12", "13", "20"],
            Correctanswer: "12",
            Correctanswerindex: 2,
            Degree: 10
        }, {
            quizname: "what is 3 * 9",
            Answers: ["30", "33", "27", "21", "24"],
            Correctanswer: "27",
            Correctanswerindex: 2,
            Degree: 10
        }, {
            quizname: "what is 8*8",
            Answers: ["64", "60", "72", "56", "96"],
            Correctanswer: "64",
            Correctanswerindex: 0,
            Degree: 10
        }, {
            quizname: "what is 100 * 5",
            Answers: ["2", "20", "10", "15", "12"],
            Correctanswer: "20",
            Correctanswerindex: 1,
            Degree: 10
        }, {
            quizname: "what is 3 * 6 + 4 ",
            Answers: ["24", "22", "20", "12", "18"],
            Correctanswer: "22",
            Correctanswerindex: 1,
            Degree: 10
        }, {
            quizname: "what is 6*4 ",
            Answers: ["20", "10", "22", "12", "24"],
            Correctanswer: "24",
            Correctanswerindex: 4,
            Degree: 10
        }, {
            quizname: "what is 20/4",
            Answers: ["2", "4", "5", "6", "16"],
            Correctanswer: "5",
            Correctanswerindex: 2,
            Degree: 10
        }


    ]

    //welcome user
    document.getElementById('username').innerText = "welcome:" + localStorage.getItem('username');
    //change bgcolor according gender
    function myfun() {} {

        if (localStorage.getItem('gender') === 'Male') {
            document.getElementById('container').style.backgroundColor = "lightblue";
        } else {
            document.getElementById('container').style.backgroundColor = "lightpink";
        }

    }


    //define setinterval to enable calling it
    var t;
    // set time of exam
    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;

        t = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            // to make time 00:00
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
            // stop exam & show score when time is over
            if (minutes == 00 && seconds == 00) {
                clearInterval(t);
                alert("time is over");
                $('#next').hide();
                displayscore();

            }

        }, 1000);


    }

    window.onload = function() {

        var thirtyMinutes = 60 * 30,
            display = document.querySelector('#time');
        startTimer(thirtyMinutes, display);

    };




    //step 1
    var quiz = $('#quiz'); //container of quizname
    var questioncounter = 0; //to count the quizname
    var selectanswers = []; //empty array to hold selected answers 
    var degree = $('#result')


    $('#finish').css("display", "none");

    let finalresult = 0;
    nextquestion();

    //step6 select next btn then fun selectanswer 
    //checked of selectanswers
    $('#next').click(function() {

        selectans();
        var checkedChoice = document.querySelectorAll('input[name="ans"]:checked'); 
        if (checkedChoice.length >= 1) { 
            questioncounter++;
            nextquestion();  
            return true; 
        } else {          
            alert('plz select an answer!');
        }


    });


    //step 9 create finish btn to display score and stop time
    $('#finish').click(function() {
        selectans();
        displayscore();
        clearInterval(t);

    });



    //step2 create function for create element (quizname-quizname no)
    function createElement(index) {

        //create & select div element
        // var ques = $(document.createElement('div'), {
        //     id: 'quizname'
        // });
        var ques = $('<div>', {
            id: 'quizname'
        });
        //create h2 tag & put content(quizname) in selector (ques)
        var qnumber = $('<h2> Question NO.' + (index + 1) + ':</h2>');
        ques.append(qnumber);

        //create quizname element for definied allquestions & put quizname inside
        //create p tag
        //put inside ques element(div)
        var quizname = $('<p>').append(allquestions[index].quizname);
        ques.append(quizname);

        // step 4 define fun radiobuttons with index parameter then put as content in element ques
        var radio = radiobuttons(index)
        ques.append(radio);
        return ques;
    }

    //step3 create function for radio button
    function radiobuttons(index) {
        //create unordered list & define input
        var radiolist = $('<ul>');
        var list;
        var input = '';

        //loop on allquestions (answers array)
        for (var i = 0; i < allquestions[index].Answers.length; i++) {
            //create list & create input tag
            list = $('<li>');
            input = '<input type="radio" name="ans" value=' + i + ' / > '

            input += allquestions[index].Answers[i];

            //put content(input) in selector(list) 
            //put content(list) in selector(ul)
            list.append(input);
            radiolist.append(list);
        }
        return radiolist;

    }

    //step5 create fun for select answer of input
    function selectans() {
        // using(=+) assignment operator(=) followed by unary(+)=>value of selected input is assigned to selecteanswers
        selectanswers[questioncounter] = +$('input[name ="ans"]:checked').val();

    }

    //step7 create function to display next quizname
    //using fadeout method to hide visible quizname and display next quizname
    //select div element =>container of quizname
    //if condition=> quizname counter = quizname length or not
    //define variable = questioncounter
    //put variable content in div and give it fadeIn method
    function nextquestion() {

        quiz.fadeOut(function() {
            $('#quizname').remove();
            if (questioncounter < allquestions.length) {
                var nextquestion = createElement(questioncounter);
                quiz.append(nextquestion).fadeIn();

                if (questioncounter >= 1 && questioncounter != 9) {
                    $('#next').show();
                    $('#finish').hide();
                } else if (questioncounter == 9) {
                    $('#next').hide();
                    $('#finish').show();
                }

            } else {

                //host score result
                var scrollresult = displayscore();
                Degree.append(scrollresult).fadeIn();
                // return finalresult;
                $('#next').hide();
                $('#finish').hide();

            }
        });

    }


    //step8 create function to detn score & display it
    //define score variable 
    //loop for select answer
    //if condition( select answer = correct answer)
    //put result content in score selector
    function displayscore() {
        var Degree = $('<p>', {
            id: 'score'
        });

        for (i = 0; i < selectanswers.length; i++) {
            var x = parseInt(allquestions[i].Correctanswer);

            //get index of current answer 
            if (selectanswers[i] == allquestions[i].Correctanswerindex) {
                finalresult += 10

            }
            console.log(finalresult);
        }
        // $('quiz #score').append('you scored' + finalresult + 'out of ' + 100);
        // return finalresult;

        var fres = document.getElementById("fResult");
        fres.innerText = finalresult;

        var res = document.getElementById("result");
        res.style.display = "block";

        document.getElementById("quiz").style.display = "none";

        document.getElementById("finish").style.display = "none"



    }



});

//to prevent reload the page
window.onload = function() {
    document.onkeydown = function(e) {
        return (e.which || e.keyCode) != 116;
    };
    e.preventDefault();

}