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

	
	console.log(q1val + " " +"Hey") ;

	if (q1val === "Wendy's") {

		correct ++;
		console.log("Correct:" + correct) ;

		$("#correct").append(correct);

	} else {

		incorrect ++;

		console.log("Incorrect:" + incorrect) ;

		$("#incorrect").append(incorrect);
	}


	$("form").hide();

	//display score

	$("#score").show();


});

















});