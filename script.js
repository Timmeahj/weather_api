(() => {

	var button = document.getElementById("run");
	var input = document.getElementById("city");
	var day1 = document.getElementById("day1");
	var day2 = document.getElementById("day2");
	var day3 = document.getElementById("day3");
	var day4 = document.getElementById("day4");
	var day5 = document.getElementById("day5");

	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var j = 0;
	var h = 0;

	button.addEventListener("click", function() {

		var date = new Date();
		var hour = date.getHours();
		var dayName = days[date.getDay()];
		var title = "<div class='big'>";
		var title2 = "</div>";

		day1.innerHTML = title + dayName + title2;
		day2.innerHTML = title + days[(date.getDay()+1)] + title2;
		day3.innerHTML = title + days[(date.getDay()+2)] + title2;
		day4.innerHTML = title + days[(date.getDay()+3)] + title2;
		day5.innerHTML = title + days[(date.getDay()+4)] + title2;

		document.getElementById("navigate").classList.remove("gone");
		document.getElementById("summary").classList.remove("gone");

		var city = input.value;
		var time;
		var iconText;
		var icon;
		var temp;
		var mintemp;
		var maxtemp;
		var description;
		var div = "<div class='weatherText'>";
		var div2 = "</div>";

		var totaltemp1 = 0;
		var avgtemp1 = 0;
		var totalmintemp1 = 0;
		var avgmintemp1 = 0;
		var totalmaxtemp1 = 0;
		var avgmaxtemp1 = 0;

		var totaltemp2 = 0;
		var avgtemp2 = 0;
		var totalmintemp2 = 0;
		var avgmintemp2 = 0;
		var totalmaxtemp2 = 0;
		var avgmaxtemp2 = 0;

		var totaltemp3 = 0;
		var avgtemp3 = 0;
		var totalmintemp3 = 0;
		var avgmintemp3 = 0;
		var totalmaxtemp3 = 0;
		var avgmaxtemp3 = 0;

		var totaltemp4 = 0;
		var avgtemp4 = 0;
		var totalmintemp4 = 0;
		var avgmintemp4 = 0;
		var totalmaxtemp4 = 0;
		var avgmaxtemp4 = 0;

		var totaltemp5 = 0;
		var avgtemp5 = 0;
		var totalmintemp5 = 0;
		var avgmintemp5 = 0;
		var totalmaxtemp5 = 0;
		var avgmaxtemp5 = 0;
		
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&APPID=82561345d454a5a688997c4ac39de6b0") 
			.then(function(response) {
				return response.json();
			})
			.then(function(weather) {
				console.log(weather);

				document.getElementById("morning").classList.remove("gone");
				document.getElementById("weather").classList.remove("gone");

				for (var i = 0; i < weather.list.length; i++) {

					h++;

					if(h==8){
						h=0;
					}

					time = j*3 + ":00 - " + h*3 + ":00"	;
					j++;

					if(j==8){
						j=0;
					}

					var target = document.getElementById(i);

					target.innerHTML = div + time + div2;

				}

				var y = 8;

				for (var i = 0; i < weather.list.length; i++) {

					if(hour>3){
						y = 7;
					}

					if(hour>6){
						y = 6;
					}

					if(hour>9){
						y = 5;
					}

					if(hour>12){
						y = 4;
					}

					if(hour>15){
						y = 3;
					}

					if(hour>18){
						y = 2;
					}

					if(hour>21){
						y = 1;
					}

					if(i<y){
						totaltemp1 += parseInt(weather.list[i].main.temp);
						avgtemp1 = "Temperature: " + Math.round ((totaltemp1 / y)*100) / 100;
						totalmintemp1 += Math.round ((weather.list[i].main.temp_min -0.3)*100) / 100;
						avgmintemp1 = "Min-Temp: " + Math.round ((totalmintemp1 / y)*100) / 100;
						totalmaxtemp1 += Math.round ((weather.list[i].main.temp_max +0.3)*100) / 100;
						avgmaxtemp1 = "Max-Temp: " + Math.round ((totalmaxtemp1 / y)*100) / 100; 			
					}

					if(i>=y && i<(y+8)){
						totaltemp2 += weather.list[i].main.temp;
						avgtemp2 = "Temperature: " + Math.round ((totaltemp2 / 8)*100) / 100;
						totalmintemp2 += Math.round ((weather.list[i].main.temp_min -0.3)*100) / 100;
						avgmintemp2 = "Min-Temp: " + Math.round ((totalmintemp2 / 8)*100) / 100;
						totalmaxtemp2 += Math.round ((weather.list[i].main.temp_max +0.3)*100) / 100;
						avgmaxtemp2 = "Max-Temp: " + Math.round ((totalmaxtemp2 / 8)*100) / 100; 
					}

					if(i>=(y+8) && i<(y+16)){
						totaltemp3 += weather.list[i].main.temp;
						avgtemp3 = "Temperature: " + Math.round ((totaltemp3 / 8)*100) / 100;
						totalmintemp3 += Math.round ((weather.list[i].main.temp_min -0.3)*100) / 100;
						avgmintemp3 = "Min-Temp: " + Math.round ((totalmintemp3 / 8)*100) / 100;
						totalmaxtemp3 += Math.round ((weather.list[i].main.temp_max +0.3)*100) / 100;
						avgmaxtemp3 = "Max-Temp: " + Math.round ((totalmaxtemp3 / 8)*100) / 100;  
					}

					if(i>=(y+16) && i<(y+24)){
						totaltemp4 += weather.list[i].main.temp;
						avgtemp4 = "Temperature: " + Math.round ((totaltemp4 / 8)*100) / 100;
						totalmintemp4 += Math.round ((weather.list[i].main.temp_min -0.3)*100) / 100;
						avgmintemp4 = "Min-Temp: " + Math.round ((totalmintemp4 / 8)*100) / 100;
						totalmaxtemp4 += Math.round ((weather.list[i].main.temp_max +0.3)*100) / 100;
						avgmaxtemp4 = "Max-Temp: " + Math.round ((totalmaxtemp4 / 8)*100) / 100;  
					}

					if(i>=(y+24) && i<(y+32)){
						totaltemp5 += weather.list[i].main.temp;
						avgtemp5 = "Temperature: " + Math.round ((totaltemp5 / 8)*100) / 100;
						totalmintemp5 += Math.round ((weather.list[i].main.temp_min -0.3)*100) / 100;
						avgmintemp5 = "Min-Temp: " + Math.round ((totalmintemp5 / 8)*100) / 100;
						totalmaxtemp5 += Math.round ((weather.list[i].main.temp_max +0.3)*100) / 100;
						avgmaxtemp5 = "Max-Temp: " + Math.round ((totalmaxtemp5 / 8)*100) / 100; 
					}
				}

				console.log(weather.list[0].main.temp);
				console.log(avgtemp1);

				document.getElementById("200").innerHTML = 		title + dayName + title2 +
																div + avgtemp1 + div2 +
		  														div + avgmintemp1 + div2 + 
		  														div + avgmaxtemp1 + div2;
				
				document.getElementById("201").innerHTML = 		title + days[(date.getDay()+1)] + title2 +
																div + avgtemp2 + div2 +
		  														div + avgmintemp2 + div2 + 
		  														div + avgmaxtemp2 + div2;

		  		document.getElementById("202").innerHTML = 		title + days[(date.getDay()+2)] + title2 +
		  														div + avgtemp3 + div2 +
		  														div + avgmintemp3 + div2 + 
		  														div + avgmaxtemp3 + div2;

				document.getElementById("203").innerHTML = 		title + days[(date.getDay()+3)] + title2 +
																div + avgtemp4 + div2 +
		  														div + avgmintemp4 + div2 + 
		  														div + avgmaxtemp4 + div2;

		  		document.getElementById("204").innerHTML = 		title + days[(date.getDay()+4)] + title2 +
		  														div + avgtemp5 + div2 +
		  														div + avgmintemp5 + div2 + 
		  														div + avgmaxtemp5 + div2;											
			
				for (var i = 0; i < weather.list.length; i++) {

					iconText = weather.list[i].weather[0].icon;
					icon = '<img src="http://openweathermap.org/img/w/' + iconText + '.png">'
					temp = "Temperature: " + weather.list[i].main.temp;
					mintemp = "Min-Temp: " + Math.round ((weather.list[i].main.temp_min -0.3)*100) / 100;
					maxtemp = "Max-Temp: " + Math.round ((weather.list[i].main.temp_max +0.3)*100) / 100;
					description = weather.list[i].weather[0].description;

					var n = 0;

					if(hour>3){
						target = document.getElementById((i+1));
						document.getElementById(n).classList.add("gone");
						
					}

					if(hour>6){
						target = document.getElementById((i+2));
						for(n =0; n<2; n++){
							document.getElementById(n).classList.add("gone");
						}
					}

					if(hour>9){
						target = document.getElementById((i+3));
						for(n =0; n<3; n++){
							document.getElementById(n).classList.add("gone");
						}
					}

					if(hour>12){
						target = document.getElementById((i+4));
						document.getElementById("morning").classList.add("gone");
					}

					if(hour>15){
						target = document.getElementById((i+5));
						for(n =0; n<5; n++){
							document.getElementById(n).classList.add("gone");
						}
					}

					if(hour>18){
						target = document.getElementById((i+6));
						for(n =0; n<6; n++){
							document.getElementById(n).classList.add("gone");
						}
					}

					if(hour>21){
						target = document.getElementById((i+7));
						for(n =0; n<7; n++){
							document.getElementById(n).classList.add("gone");
						}
					}

					console.log(target);

					
		  			target.innerHTML = 	target.innerHTML + 
		  								div + icon + div2 +
		  								div + description + div2 +
		  								div + temp + div2 +
		  								div + mintemp + div2 + 
		  								div + maxtemp + div2;
	  			}
  			});
    });

    var x = 100;
    var z = 200;

	document.getElementById("next").addEventListener("click", function(){
		if(x<104){
			document.getElementById(x).classList.add("gone");
			document.getElementById(z).classList.remove("selected");
			x++;
			z++;
			document.getElementById(x).classList.remove("gone");
			document.getElementById(z).classList.add("selected");
		}
		else{
			window.alert("WeatherBot can only predict the weather untill 5 days in the future.");
		}
	});

	document.getElementById("previous").addEventListener("click", function(){
		if(x>100){
			document.getElementById(x).classList.add("gone");
			document.getElementById(z).classList.remove("selected");
			x = x-1;
			z = z-1;
			document.getElementById(x).classList.remove("gone");
			document.getElementById(z).classList.add("selected");
		}
		else{
			window.alert("WeatherBot doesn't look into the past, only the future.");
		}
	});
    
})();