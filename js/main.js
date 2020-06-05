$(document).ready(function() {

	$(document).on('click','.menu-bottom li',function(e){
		$('.menu-bottom li').not(this).removeClass('active');
		$(this).addClass('active');

		var _left = $(this).offset().left;
		var _data = $(this).attr('data-menu');
		var _id = $('#'+_data);

		$('.bottom-submenu').not(_id).slideUp(100);

		_id.slideToggle(100);
		_id.css('left',_left);

	});

	$(document).on('click','.bottom-submenu li',function(e){

		$('.bottom-submenu li').not(this).removeClass('active');
		$(this).addClass('active');

		if($(this).hasClass('has-sub')){
			var _sub = $(this).find('.secondlevel-submenu');

			$('.has-sub.open').not(this).removeClass('open');
			$(this).toggleClass('open');
			$('.secondlevel-submenu').not(_sub).slideUp(200);
			$(this).find('.secondlevel-submenu').slideToggle(200);
		}
		else if(!$(this).closest('.secondlevel-submenu').length){
			$('.secondlevel-submenu').slideUp(200);
			$('.has-sub.open').removeClass('open');
		}
	});

	$(document).on('click','.secondlevel-submenu li',function(e){
		e.preventDefault();
		e.stopPropagation();
	});
	
	// tabs

	$(document).on('click','.tr-list',function(e){
		e.stopPropagation();
		var _next = $(this).next('.tr-detail');
		$('.tr-list').not(this).removeClass('selected');
		$(this).toggleClass('selected');
		$('.tr-detail').not(_next).hide();
		_next.toggle();
	});


	// filter
	$(document).on('click','.filter-button',function(e){

		$(this).toggleClass('open');
		$(this).siblings('.filter-wrapper').slideToggle(200);
		var _span = $(this).find('span');

		if($(this).hasClass('open')){
			_span.text('OPEN INFO')
		}
		else{
			_span.text('CLOSE INFO')
		}
	});

	// dropdown
	$(document).on('click','.dropdown-custom',function(e){
		var _list = $(this).siblings('.dropdown-list');
		var _closest = $(this).closest('.form-group');
		var _dd = _closest.nextAll('.form-group').find('.dropdown-custom');

		$('.dropdown-list').not(_list).hide();
		_list.toggle(100);

		_dd.each(function(index){
			var _default = $(this).attr('data-default');
	        $(this).text(_default);
	     });

	});

	$(document).on('click','.dropdown-list li',function(e){
		var _custom = $(this).closest('.dropdown-wrapper').find('.dropdown-custom');
		var _text = $(this).text();

		$('.dropdown-list').hide();
		_custom.text(_text);

	});

	$(document).click(function(e){
		if(! $(e.target).hasClass("dropdown-custom") ){
			$('.dropdown-list').hide();
		}
		
	});

});
