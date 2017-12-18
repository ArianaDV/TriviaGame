$(document).ready(function() {


var correct = 0;
var incorrect = 0;




$("#start").on("click", function() {

	$("form").show() ;
	$("#start").hide();

	//call timer function
	
});



$("#something").on("click", function() {

	q1val = ($("input:radio[name=Question1]:checked", "form" ).val()) ;

	q2val = ($("input:radio[name=Question2]:checked", "form" ).val()) ;

	q3val = ($("input:radio[name=Question3]:checked", "form" ).val()) ;

	q4val = ($("input:radio[name=Question4]:checked", "form" ).val()) ;

	q5val = ($("input:radio[name=Question5]:checked", "form" ).val()) ;

	q6val = ($("input:radio[name=Question6]:checked", "form" ).val()) ;




	if (q1val === "Wendy's") {

		correct ++;
				
		} else {

		incorrect ++;

		}


	if (q2val === "In-N-Out Burger") {

		correct ++;
				
		} else {

		incorrect ++;

		}

	if (q3val === "Papa John's") {

		correct ++;
				
		} else {

			incorrect ++;

		}

	if (q4val === "KFC") {

		correct ++;
				
		} else {

			incorrect ++;

		}

	if (q5val === "Big Mac") {

		correct ++;
				
		} else {

			incorrect ++;

		}

	if (q6val === "Sbarro") {

		correct ++;
				
		} else {

			incorrect ++;

		}
	
	$("#correct").append(correct);

	$("#incorrect").append(incorrect);


	$("form").hide();

	//display score

	$("#score").show();


});

















});