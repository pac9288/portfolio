$(document).ready(function(){
    projectNext();
    projectPrevious();
	$('.project_thumb').each(function(i){
		$(this).click(function(){
			$('#project_container').css('display','block'); //to make it reappear
			projectCount = $(this).attr('id').replace('_thumb',''); //get project#

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
    
    










// ANIMATE OUT


    $('.navigation').click(function(){ //close project container
		$('#project_container').stop();
		$('#project_container').animate({'height':'0','opacity':'0'},500, function(){
			$('#project_container').css('display','none'); // make it completely hidden
           
		});
	});
    
	$('.nav_box').click(function(){ //close project container
		$('#project_container').stop();
		$('#project_container').animate({'height':'0','opacity':'0'},500, function(){
			$('#project_container').css('display','none'); // make it completely hidden
            $("html, body").animate({ scrollTop:  "290px" });
		});
	});


    $('#logo').click(function(){ //close project container
		$('#project_container').stop();
		$('#project_container').animate({'height':'0','opacity':'0'},500, function(){
			$('#project_container').css('display','none'); // make it completely hidden
			$("html, body").animate({ scrollTop:  "0px" });
		});
	});



// NEXT PEROJECT
function projectNext(){ // Click to Go to Next Project
	$('.nav_right').click(function(){
		$('html, body').animate({
	        scrollTop: $("#project_container").offset().top - 60
	    }, 400, 'swing');

    	$('#project_container').animate({'opacity':'0'}, 300, 'swing', function(){
    		$('#loader').css('display','block');
    		currentCount = projectCount.replace('project','');
    		if (parseInt(currentCount) == 6) {currentCount = 0;}     //  CURRENTCOUNT = # = HOW MANY PROJECT I HAVE AT THE MOMTENT
    		projectCount = 'project' + (parseInt(currentCount) + 1);
    		$('#project_container').load(projectCount + '.html', function(){
    			$('#loader').css('display','none');
    			$('#project_container').animate({'opacity':'1'}, 300, 'swing');
    			slideSetup();
    		});
    	});
	});
}
function projectPrevious(){ // Click to Go to Previous Project
	$('.nav_left').click(function(){
		$('html, body').animate({
	        scrollTop: $("#project_container").offset().top - 60
	    }, 400, 'swing');

    	$('#project_container').animate({'opacity':'0'}, 300, 'swing', function(){
    		$('#loader').css('display','block');
    		currentCount = projectCount.replace('project','');
            
//     MUST CHANGE THIS WHEN I ADD OR TAKE AWAY A PROJECT=================================
   		if (parseInt(currentCount) == 1) {currentCount = 7;}   //  CURRENTCOUNT = #, 1 + # = HOW MANY PROJECT I HAVE AT THE MOMTENT
    		projectCount = 'project' + (parseInt(currentCount) - 1);
    		$('#project_container').load(projectCount + '.html', function(){
    			$('#loader').css('display','none');
    			$('#project_container').animate({'opacity':'1'}, 300, 'swing');
    			slideSetup();
    		});
    	});
	});
}


});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus") ) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

