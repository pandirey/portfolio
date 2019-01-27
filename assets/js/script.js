$(document).ready(function(){
	$("#writeUpIcon").hover(function(){
		$("#writeUpCap").css('visibility', 'visible');
		$("#writeUpCap").css('opacity', 1);
		
	}, function(){
		$("#writeUpCap").css('opacity', 0);
		$("#writeUpCap").css('visibility', 'hidden');
	});

	$("#bioDataIcon").hover(function(){
		$("#bioDataCap").css('visibility', 'visible');
		$("#bioDataCap").css('opacity', 1);
		
	}, function(){
		$("#bioDataCap").css('opacity', 0);
		$("#bioDataCap").css('visibility', 'hidden');
	});

	$("#portfolioIcon").hover(function(){
		$("#portfolioCap").css('visibility', 'visible');
		$("#portfolioCap").css('opacity', 1);
		
	}, function(){
		$("#portfolioCap").css('opacity', 0);
		$("#portfolioCap").css('visibility', 'hidden');
	});

	$("#writeUpIcon").click(function(){
		$(".welcomeDiv").css('opacity', 0);
		$(".bioDataDiv").css('opacity', 0);
		$(".portfolioDiv").css('opacity', 0);
		setTimeout(function(){
			$(".welcomeDiv").css('display', 'none');
			$(".bioDataDiv").css('display', 'none');
			$(".portfolioDiv").css('display', 'none');
			$(".aboutMeDiv").css('display', 'inline-block');
		}, 501);
		setTimeout(function(){
			$(".aboutMeDiv").css('opacity', 1);
		}, 550);
	});	

	$("#bioDataIcon").click(function(){
		$(".welcomeDiv").css('opacity', 0);
		$(".aboutMeDiv").css('opacity', 0);
		$(".portfolioDiv").css('opacity', 0);
		setTimeout(function(){
			$(".welcomeDiv").css('display', 'none');
			$(".aboutMeDiv").css('display', 'none');
			$(".portfolioDiv").css('display', 'none');
			$(".bioDataDiv").css('display', 'inline-block');
		}, 501);
		setTimeout(function(){
			$(".bioDataDiv").css('opacity', 1);
		}, 550);
	});

	$("#portfolioIcon").click(function(){
		$(".welcomeDiv").css('opacity', 0);
		$(".aboutMeDiv").css('opacity', 0);
		$(".bioDataDiv").css('opacity', 0);
		setTimeout(function(){
			$(".welcomeDiv").css('display', 'none');
			$(".aboutMeDiv").css('display', 'none');
			$(".bioDataDiv").css('display', 'none');
			$(".portfolioDiv").css('display', 'inline-block');
		}, 501);
		setTimeout(function(){
			$(".portfolioDiv").css('opacity', 1);
		}, 550);
	});

	$(".backIcon").click(function(){
		$(".aboutMeDiv").css('opacity', 0);
		$(".bioDataDiv").css('opacity', 0);
		$(".portfolioDiv").css('opacity', 0);
		setTimeout(function(){
			$(".aboutMeDiv").css('display', 'none');
			$(".bioDataDiv").css('display', 'none');
			$(".welcomeDiv").css('display', 'inline-block');
		}, 501);
		setTimeout(function(){
			$(".welcomeDiv").css('opacity', 1);
		}, 550);
	});
});

