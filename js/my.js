$(window).scroll(function(){	//滚动置顶按钮toggle
	if($(window).scrollTop() >= 100){
		$('.gotop').show(500);
	}else{
		$('.gotop').hide(500);
	}
});

$('.gotop').click(function(){	//滚动置顶
	$('html,body').animate({scrollTop: '0px'}, 800);
});

//底部小卡片
$('.media-item').click(function(){
	var bodyEl = $('body');
	var stackid = $(this).attr('data');
	var stack = $('#'+stackid);
	stack.addClass('is-selected');

	//计算此stack的item数
	var children = stack.children;
	var imgs_length = children.length - 2;

	canMoveHeroImage = false;
	classie.add(bodyEl, 'view-full');
	setTimeout(function() { classie.add(bodyEl, 'move-items'); }, 25);
	bodyEl.style.height = (771 + (imgs_length*566.72)) + 'px';//stack.offsetHeight + 'px';
	flkty.unbindDrag();
	flkty.options.accessibility = false;
});