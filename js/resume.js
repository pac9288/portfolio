$(document).ready(function(){
    resume();
    ();
	$('.resume_animate').each(function(i){
		$(this).click(function(){
			$('#project_container').css('display','block'); //to make it reappear
			// projectCount = $(this).attr('id').replace('_thumb',''); 						//get project#

			$('#project_container').stop(); //stop any existing animations
			$('#project_container').animate({'opacity':'0'},300, 'swing', function(){ //fade out current project 

				//======== NEW ADDITION BY TYLER ============
				$('#loader').css('display','block');
				$('#loader').animate({'opacity':'1'},450);
				//======== NEW ADDITION BY TYLER ============

				currentHeight = $('#project_container').height(); //set current height of container
				$('#project_container').load(projectCount+'.html', function(){ //load in project
					
					//======== NEW ADDITION BY TYLER ============
					$('#loader').animate({'opacity':'0'},450, function(){
						$('#loader').css('display','none');
					});
					//======== NEW ADDITION BY TYLER ============

					newHeight = $('#project_container').height(); //set new height of container
					$('#project_container').css('height',currentHeight); //set height to current #
					
					$('#project_container').animate({'height':newHeight},450, 'swing', function(){ //animate height to new
						$('#project_container').css('height','auto'); //set height to auto to allow for overflow hidden to do its job
					});
					
					$('#project_container').animate({'opacity':'1'},450, 'swing', function(){ //fade in project
						
					});

					
					menuHeight = $('.menu').height(); //finds menu height // heght needs to be subracted by 10!!!!!
					$('html, body').stop(); // stops any previous scroll
					$('html, body').animate({scrollTop: $("#project_container").offset().top - 50}, 450, 'swing'); //scrolls to top of project
					
				});			
			});
		});
	}); 
