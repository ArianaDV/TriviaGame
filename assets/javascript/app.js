$(document).ready(function() {


var correct = 0;
var incorrect = 0;
var unanswered = 0;


var time = 30;
var intervalId;


//start game
$("#start").on("click", function() {

	//call timer function
	run ();

	$("form").show() ;
	$("#start").hide();
	$("h1").hide();
	
	
});


//Set timer to decrease each second
function run() {

	intervalID = setInterval(timer, 1000) ;
}

function timer () {

	time --;

$("#timer").text("Time Remaining:" + " "+ time);


	if (time === 0) {

	game();

	$("#correct").append(correct);

	$("#incorrect").append(incorrect);
	
	$("#unanswered").append(unanswered);


	$("form").hide();

	$("#score").show();	

	}
}

function stopTimer() {

	time = 0;

}



$("#something").on("click", function() {

	game();

	stopTimer();
	
	$("#correct").append(correct);

	$("#incorrect").append(incorrect);

	$("#unanswered").append(unanswered);


	$("form").hide();

	$("#score").show();


});


function game () {

	
	q1val = ($("input:radio[name=Question1]:checked", "form" ).val()) ;

	q2val = ($("input:radio[name=Question2]:checked", "form" ).val()) ;

	q3val = ($("input:radio[name=Question3]:checked", "form" ).val()) ;

	q4val = ($("input:radio[name=Question4]:checked", "form" ).val()) ;

	q5val = ($("input:radio[name=Question5]:checked", "form" ).val()) ;

	q6val = ($("input:radio[name=Question6]:checked", "form" ).val()) ;






	if (q1val === "Wendy's") {

		correct ++;
				
		} else if (q1val == null) {

			unanswered++

		}else {

		incorrect ++;

		}


	if (q2val === "In-N-Out Burger") {

		correct ++;
				
		} else if (q2val == null) {

			unanswered++

		} else {

		incorrect ++;

		}

	if (q3val === "Papa John's") {

		correct ++;
				
		} else if (q3val == null) {

			unanswered++

		} else {

			incorrect ++;

		}

	if (q4val === "KFC") {

		correct ++;
				
		} else if (q4val == null) {

			unanswered++

		} else {

			incorrect ++;

		}

	if (q5val === "Big Mac") {

		correct ++;
				
		} else if (q5val == null) {

			unanswered++

		} else {

			incorrect ++;

		}

	if (q6val === "Sbarro") {

		correct ++;
				
		} else if (q6val == null) {

			unanswered++

		} else {

			incorrect ++;

		}
}













});