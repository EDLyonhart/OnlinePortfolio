
$(document).ready(function() {

	var hideElement = function(selector) {
		$(selector).addClass('hidden');
	};
	var showElement = function(selector) {
		$(selector).removeClass('hidden');
	};

	var toggleShow = function(selector) {
		$(selector).toggleClass('hidden');
	};
	var standardToggle = function() {
		toggleShow('.splashNav');
		toggleShow('.miniNav');
	};

	var standardSlide = function() {
		$('.miniSide.left').animate({marginLeft: '25px'}, 1000);
		$('.miniSide.right').animate({marginLeft: '280px'}, 1000);
	};
	var standardSlideBack = function() {
		$('.miniSide.left').animate({marginLeft: '150px'}, 500);
		$('.miniSide.right').animate({marginLeft: '155px'}, 500);	
	};

	var profSlide = function() {
		$('.miniProf.pr1').animate({marginRight: '0'}, 1000);
		$('.miniProf.pr2').animate({marginRight: '50'}, 1000);
		$('.miniProf.pr3').animate({marginRight: '90'}, 1000);
		$('.miniProf.pr4').animate({marginRight: '110'}, 1000);
		$('.miniProf.pr5').animate({marginRight: '130'}, 1000);
		$('.miniProf').addClass('animated rotateIn');
	};
		var profSlideBack = function() {
			$('.miniProf').animate({marginRight: '-60'}, 500);
		};

	var personSlide = function() {
		$('.miniNavPerson .pe1').animate({marginLeft: '10'}, 1000);
		$('.miniNavPerson .pe2').animate({marginLeft: '22'}, 1000);
		$('.miniNavPerson .pe3').animate({marginLeft: '35'}, 1000);
		$('.miniPerson').addClass('animated rotateIn');
	};
		var personSlideBack = function() {
			$('.miniPerson').animate({marginLeft: '-70'}, 500);
		};

	$('.splashSide.left').on('click', function() {		//PROFESSIONAL SPLASH click
		$('.miniNav').addClass('col-sm-offset-4');			//offset so navbar is positioned properly
		standardToggle();									//toggle nav / splash nav
		showElement('.miniNavProf');						//show breadcrumb prof && big navs
		showElement('.miniProf');
		showElement('.professional');
		standardSlide();									//animate nav
		profSlide();										//slide breadcrumb prof
		personSlideBack();									//reset Person side	
	});

	$('.splashSide.right').on('click', function() {		//PERSONAL SPLASH click
		$('.miniProf').removeClass('col-sm-offset-4');		//offset so navbar is positioned properly
		$('.miniNav').addClass('col-sm-offset-4');			//offset so navbar is positioned properly
		standardToggle();									//toggle nav / splash nav
		showElement('.miniNavPerson');						//toggle breadrcumb person && big person
		showElement('.miniPerson');
		showElement('.personal');
		standardSlide();									//animate nav
		personSlide();										//slide breadcrumb person
		profSlideBack();									//reset Prof side
	});

	$('.miniPortrait').on('click', function () {		//miniportrait click
		standardToggle();									//display center nav
		standardSlideBack();								//slide back center nav
		hideElement('.infoWindow');
		hideElement('.miniNav');
		hideElement('.miniNavProf');
		hideElement('.miniProf');
		hideElement('.miniNavPerson');
		hideElement('.miniPerson');
		hideElement('.professional');
		hideElement('.personal');
		$('.miniNav').removeClass('col-sm-offset-4');
		personSlideBack();
		profSlideBack();
	});

	 $('#professionalNav').on('click', function () {		//click on PROFESSIONAL NAV BUTTON
		hideElement('.infoWindow');
		hideElement('.personal');
		hideElement('.miniNavPerson');
		hideElement('.miniPerson');
		showElement('.professional');
		showElement('.miniNavProf');
		showElement('.miniProf');
		profSlide();
		personSlideBack();
	});

	$('#personalNav').on('click', function () {			//click on PERSONAL NAV
		//$('.miniNav').addClass('col-sm-offset-4');
		hideElement('.infoWindow');
		hideElement('.professional');
		hideElement('.miniNavProf');
		hideElement('.miniProf');
		showElement('.personal');
		showElement('.miniNavPerson');
		showElement('.miniPerson');
		personSlide();
		profSlideBack();
	});

	var clearInfoWindow = function() {
		$('#windowLinked, #windowGit, #windowProjects, #windowResume, #windowEducation, #windowBio, #windowInterests, #windowArt').addClass('hidden');
		$('.infoWindow').css('height', '1000px');
	};

	$('.pr1').on('click', function() {		//LinkedIn
		clearInfoWindow();
		$('.infoWindow, #windowLinked').removeClass('hidden');
		$('.infoWindow').css('height', '200px');
	});
	$('.pr2').on('click', function() {		//GitHub
		clearInfoWindow();
		$('.infoWindow, #windowGit').removeClass('hidden');
		$('.infoWindow').css('height', '200px');
	});
	$('.pr3').on('click', function() {		//Projects
		clearInfoWindow();
		$('.infoWindow, #windowProjects').removeClass('hidden');
		$('.infoWindow').css('height', '650px');
	});
	$('.pr4').on('click', function() {		//Resume
		clearInfoWindow();
		$('.infoWindow, #windowResume').removeClass('hidden');
		$('.infoWindow').css('height', '600px');
	});
	$('.pr5').on('click', function() {		//Education
		clearInfoWindow();
		$('.infoWindow, #windowEducation').removeClass('hidden');
		$('.infoWindow').css('height', '950px');
	});

	$('.pe1').on('click', function() {		//Bio
		clearInfoWindow();
		$('.infoWindow, #windowBio').removeClass('hidden');
		$('.infoWindow').css('height', '600px');
	});
	$('.pe2').on('click', function() {		//Interests
		clearInfoWindow();
		$('.infoWindow, #windowInterests').removeClass('hidden');
		$('.infoWindow').css('height', '475px');
	});
	$('.pe3').on('click', function() {		//Art
		clearInfoWindow();
		$('.infoWindow, #windowArt').removeClass('hidden');
		$('.infoWindow').css('height', '775px');
	});

});


