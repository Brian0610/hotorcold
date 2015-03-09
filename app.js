$(document).ready(function(){

//generate a random 2-digit whole number and store in a variable called 'randomNum'
	
var randomNum = generateRandom(); 	   
console.log(randomNum); 



//when user clicks enter button
	$('button').click(function(event){
		event.preventDefault();	
	//store users input in var
		var input = $('#entry').val(); 
	//convert user input string into a number, store in variable
		var userNum = Number(input); 
	//clear any previous feedback
		$('div.feedback').html('');
	//ready input box for user's next guess.
		$('#entry').val('').focus(); 
		
	//validate user input:
		//make sure something was entered:
	    	if(input.length == 0){
	    		$('#entry').val('')
	    		$('#feedback').html('<span><em>Nothing was entered. Try again.</em></span>');
				setTimeout(function(){
				$('#feedback').html(''); 
				}, 3000);			 
	    	}

		//make sure entry was a number:
			else if(isNaN(userNum) == true){
					$('#feedback').html('<span><em>Please enter a number</em></span>');
				setTimeout(function(){
					$('#feedback').html(''); 
				}, 3000); 			  
			}; 
		


	//begin comparing 'randomNum' to 'userNum'
	//if userNum is equal to randomNum, display 'YOU WIN!'
		if(userNum == randomNum){
			victory("YOU WIN!", "victory"); 
			
		}	
		//add way to reset game
			
			// [ code goes here ] 
		 

		//if userNum within 5 digits away... 
		else if( userNum <= (randomNum + 5) && userNum >= (randomNum - 5) ) {
			result("VERY HOT", "veryHot", userNum); 
		}	

		//if userNum within 6-10 digits away...
		else if( userNum >= (randomNum + 6) && userNum <= (randomNum + 10) || 
			     userNum <= (randomNum - 6) && userNum >= (randomNum - 10) ) {
			result("HOT", "hot", userNum); 				 
		}

		//if userNum within 11-20 digits away...
	    else if( userNum >= (randomNum + 11) && userNum <= (randomNum + 20) || 
			     userNum <= (randomNum - 11) && userNum >= (randomNum - 20) ) {	    
	    	result("WARM", "warm", userNum); 						  
		}

	    //if userNum within 21 - 50 digits away...
	    else if( userNum >= (randomNum + 21) && userNum <= (randomNum + 50) || 
			     userNum <= (randomNum - 21) && userNum >= (randomNum - 50)	) {	    
			result("COLD", "cold", userNum); 					  
		}

		//if userNum within 51 - 99 digits away...
	    else if( userNum >= (randomNum + 51) && userNum <= (randomNum + 99) || 
			     userNum <= (randomNum - 51) && userNum >= (randomNum - 99) ) {	    
				result("ICE COLD", "iceCold", userNum); 				   
		}   	    	
	}); 

	 
//when user hovers over the section.guesses element	 
		$('section.guesses').hover(function(){
				$('ul.guesses').slideToggle(); 
		}, function(){
			$('ul.guesses').slideToggle();
		}); 
}); 	    	

//This function generates a random number for user to guess
function generateRandom(){
	var random = Math.random() * 100;
	var wholeNum = Math.floor(random); 
	return wholeNum; 
}

//After first guess, an option to view previous guesses appears onscreen... 
function displayGuess(){ 
	var liItems = $('li.guesses'); 
	if(liItems.length > 0 ){		 
		$('section.guesses, h2.guesses').fadeIn();
		$('section.guesses').hover(function(){
				$('ul.guesses').slideDown();
				$('h2.guesses').text('Hide Previous Guesses'); 		
				$('h2.guesses').append('<img src="images/upArrow.gif" class="guesses" />'); 		
			}, function(){
				$('ul.guesses').slideUp();
				$('h2.guesses').text('Show Previous Guesses '); 	
				$('h2.guesses').append('<img src="images/downArrow.gif" class="guesses" />'); 
		});
	};
}

//Provides feedback to user guess. If guess was incorrect, its added to the .guesses ul
function result(message, elementId, entry){
	$('body').append('<div id="'+ elementId +'"><h3 class="feedback">'+ message + '</h3></div>'); 
	
	setTimeout(function(){
		$('#'+ elementId + '').fadeTo("slow", 0); 
		$('h3.feedback').fadeTo("slow", 0);
			}, 500);
	setTimeout(function(){
		$('#'+ elementId + '').remove(); 
		//$('div.feedback h3').remove();  
	}, 2000);
	$('ul.guesses').append('<li class="guesses">' + entry + '</li>');
	displayGuess(); 
}

//When user wins game... 
function victory(message, elementId){
	$('body').append('<div id="'+ elementId +'"><h3 class="feedback">'+ message + '</h3></div>'); 
	$('#victory').css("background-color","#DC3023")
	setTimeout(function(){
		$('#victory').css("background-color","#FFA300"); 
	}, 200);
	setTimeout(function(){
		$('#victory').css("background-color","#FFFF00"); 
	}, 400);

	setTimeout(function(){
		$('#victory').css("background-color","#2ecc71"); 
	}, 600);
	setTimeout(function(){
		$('#victory').css("background-color","#2980b9"); 
	}, 800);
	setTimeout(function(){
		$('#victory').css("background-color","#9b59b6"); 
	}, 1000);
	setTimeout(function(){
		$('#victory').remove(); 
	}, 1200);	
}

