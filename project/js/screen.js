
			$(document).ready(function(){
				$('.poshytip').poshytip({
					className: 'tip-twitter',
					showTimeout: 1,
					alignTo: 'target',
					alignX: 'center',
					alignY:'bottom',
					offsetY: 5,
					allowTipHover: true,
				});
				});

			$(document).ready(function(){		
				jQuery("#responsive-menu select").change(function() {
					window.location = jQuery(this).find("option:selected").val();
				});
				});
            $(document).ready(function(){
			$('.flexslider').flexslider({
            animation: "fade",              
			slideDirection: "horizontal",   
			slideshow: true,                
			slideshowSpeed: 4000,           
			animationDuration: 8000,         
			directionNav: true,             
			controlNav: true,               
			keyboardNav: true,              
			mousewheel: false,              
			prevText: "Previous",           
			nextText: "Next",              
			pausePlay: false,               
			randomize: false,               
			slideToStart: 0,                
			animationLoop: true,            
			pauseOnAction: true,            
			pauseOnHover: false,            
			start: function(){},            
			before: function(){},           
			after: function(){},            
			end: function(){}               

	  
	  });
		});


			$(document).ready(function(){
			$(function(){
				  $('#tweets').tweetable({username: 'anariel77', time: true, limit: 1, replies: true, position: 'append'});
			  });
			   });
				
			  $(document).ready(function(){
			$(function(){
				$('#contact_form').submit(function(e){
					e.preventDefault();
					var form = $(this);
					var post_url = form.attr('action');
					var post_data = form.serialize();
					$('#loader', form).html('<img src="images/loader.gif" /> Please Wait...');
					$.ajax({
						type: 'POST',
						url: post_url, 
						data: post_data,
						success: function(msg) {
							$(form).fadeOut(500, function(){
								form.html(msg).fadeIn();
							});
						}
					});
				});
			});
			 });
			   $(document).ready(function(){
				  $("a[class^='prettyPhoto']").prettyPhoto();
				});
				

			  $(document).ready(function(){ 
				  $("ul.sf-menu").superfish(); 
			  });
	  $(document).ready(function(){ 
	$('.toggle-trigger').click(function() {
		$(this).next().toggle('slow');
		$(this).toggleClass("active");
		return false;
	}).next().hide(); 
		});
		


  
	

