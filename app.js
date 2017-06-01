
function reset(){
	var array = []
	var div = document.getElementsByClassName("logo")
	for (var i = 0; i < div.length; i++){
		array.push(div[i])
	}
	array.forEach(function(item){
		var source = $(item).children().attr("src")
		var fadeSource = source.replace("color", "fade")
		$(item).children().attr("src", fadeSource)})
}

function all(){
	var array = []
	var div = document.getElementsByClassName("logo")
	for (var i = 0; i < div.length; i++){
		array.push(div[i])
	}
	array.forEach(function(item){
		var source = $(item).children().attr("src")
		var fadeSource = source.replace("fade", "color")
		$(item).children().attr("src", fadeSource)})
}

function scholarShip(){
	var array = [];
	var div = document.getElementsByClassName("scholar")
	for (var i = 0; i < div.length; i++){
		array.push(div[i])
	}
	array.forEach(function(item){
		var source = $(item).children().attr("src")
		var colorSource = source.replace("fade", "color")
		$(item).children().attr("src", colorSource)
	})
}

function loan(){
	var array = [];
	var div = document.getElementsByClassName("loan")
	for (var i = 0; i < div.length; i++){
		array.push(div[i])
	}
	array.forEach(function(item){
		var source = $(item).children().attr("src")
		var colorSource = source.replace("fade", "color")
		$(item).children().attr("src", colorSource)
	})
}

function k12(){
	var array = [];
	var div = document.getElementsByClassName("k12")
	for (var i = 0; i < div.length; i++){
		array.push(div[i])
	}
	array.forEach(function(item){
		var source = $(item).children().attr("src")
		var colorSource = source.replace("fade", "color")
		$(item).children().attr("src", colorSource)
	})
}

function highSchool(){
	var array = [];
	var div = document.getElementsByClassName("high")
	for (var i = 0; i < div.length; i++){
		array.push(div[i])
	}
	array.forEach(function(item){
		var source = $(item).children().attr("src")
		var colorSource = source.replace("fade", "color")
		$(item).children().attr("src", colorSource)
	})
}

function inputCaseSelect(){
	const programInput = $("#program-type").val()
	const educationInput = $("#education-level").val()
	const inputString = programInput + " " + educationInput
	switch(inputString){
		case "program-scholarship education-all":
			scholarShip()
			k12()
			highSchool()
			break;
		case "program-scholarship education-k12":
			scholarShip()
			k12()
			break;
		case "program-scholarship education-high":
			scholarShip()
			highSchool()
			break;
		case "program-loan education-all":
			loan()
			k12()
			highSchool()
			break;
		case "program-loan education-k12":
			loan()
			k12()
			break;
		case "program-loan education-high":
			loan()
			highSchool()
			break;
		case "program-all education-k12":
			scholarShip()
			loan()
			k12()
			break;
		case "program-all education-high":
			scholarShip()
			loan()
			highSchool()
			break;
		case "program-all education-all":
			all();
			break;			
		}
}


function watchSubmit(){
	$("#logo-form").submit(function(event){
		event.preventDefault();
		logoSelect();
	});
	
	function logoSelect(){
		var proceed = false;

		if($("#logo-form")[0].checkValidity()){ //ensures user has inputted required data in all inputs
      		proceed = true
   		}
   		else{
   			proceed = true
   		}

   		if (proceed){
			reset()
			inputCaseSelect()
   		};
	}
}


$(function(){
	watchSubmit();
})