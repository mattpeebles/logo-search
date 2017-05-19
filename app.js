




function programSelect(){
	if ($("#program-type").val() == "Scholarship Program"){
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
	else if ($("#program-type").val() == "Loan Program"){
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
}


function watchSubmit(){
	$("#submit").on("click", function(event){
		event.preventDefault();
		programSelect();
	})
}


$(function(){
	watchSubmit();
})