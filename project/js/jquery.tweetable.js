(function($){
		$.fn.tweetable=function(options){
			var defaults={
				id:'recent-side',
				limit:5,
				username:'philipbeel',
				time:false,
				symbol_time: '@',
				replies:false
			};
			var options=$.extend(defaults,options);
			return this.each(function(options){
				var act=$(this);
				var api="http://api.twitter.com/1/statuses/user_timeline.json?screen_name=";
				var count="&count=";
				$.getJSON(api+defaults.username+count+defaults.limit+"&callback=?",act,function(data){
					$.each(data,function(i,item){
						if(i==0){
							$(act).prepend('<ul id="recent-tweets" class="'+defaults.id+'">');
						}
						if(defaults.replies === false) {
							if(item.in_reply_to_status_id === null){
								$('.'+defaults.id+'').append('<li class="tweet_content_'+i+'">'+item.text.replace(/#(.*?)(\s|$)/g,'#$1').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g,'<a href="http://twitter.com/$1">@$1 </a>$2'));
								if(defaults.time==true){
									$('.tweet_content_'+i).append('<p class="meta"> '+item.created_at.substr(0,20)+'</p></li>');
								}								
							}							
						} else {
							$('.'+defaults.id+'').append('<li class="tweet_content_'+i+'">'+item.text.replace(/#(.*?)(\s|$)/g,'#$1').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g,'<a href="http://twitter.com/$1">@$1 </a>$2'));
							if(defaults.time==true){
								$('.tweet_content_'+i).append('<p class="meta">'+defaults.symbol_time+' '+item.created_at.substr(0,20)+'</p></li>');
							}								
						}
					});
				});
			});
		}
	})(jQuery);