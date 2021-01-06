var DragManager = {
	'dragging'		: false,
	'target'		: null,
	'error'			: {'x':0, 'y':0},
	'dragStart'		: function(o, x, y){
		this.target = o;
		this.error.y = parseInt(o.css('top')) - y;
		this.error.x = parseInt(o.css('left')) - x;
		this.dragging = true;
		
		$(document).bind('mousemove', function(e){
			if(DragManager.dragging)
			{
				e.preventDefault();
				DragManager.dragMove(e);
			}
		});
		$(document).bind('mouseup', function(e){
			DragManager.dragEnd();
		});
	},
	'dragEnd'		: function(o){
		this.target = null;
		this.dragging = false;
		
		$(document).unbind('mousemove');
		$(document).unbind('mouseup');
	},
	'dragMove'		: function(e){
		WindowManager.setPosition(this.target, e.pageX + this.error.x, e.pageY + this.error.y);
	}
};

var WindowManager = {
	'z_idx'			: 1,
	'z_max'			: 10000,
	'add'			: function(){ return this.z_max - this.z_idx++;	},
	'remove'		: function(){ this.z_idx--;	},
	'setPosition'	: function(o, x, y){
		o.css('top', Math.min(Math.max(35, y), $(window).height() - parseInt(o.css('height'))));
		o.css('left', Math.min(Math.max(0, x), $(window).width() - parseInt(o.css('width'))));
	},
	'bringToFront'	: function(o){
		var i = parseInt(o.css('zIndex'));
		
		$('.win').each(function(){
			var z = $(this).css('zIndex');
			if(z > i)
			{
				$(this).css('zIndex', z - 1);
			}
		});
		
		o.css('zIndex',  this.z_max);
	}
}

var ModuleManager = {
	'add'		: function(id, title){
		var winId = 'win' + id.charAt(0).toUpperCase() + id.substr(1);

		if($('#' + winId).length)
		{
			return false;
		}

		$('head').append('<link rel="stylesheet" type="text/css" href="/css/' + id + '.css" />');
		$('body').append('\
			<section class="win" id="' + winId + '" style="z-index:' + WindowManager.add() + '" onmousedown="WindowManager.bringToFront($(this))">\
				<h2>' + title + '</h2>\
				<ul class="menu">\
					<li class="close" onclick="ModuleManager.remove(\'' + winId + '\')">&times;</li>\
				</ul>\
				<div class="contents"></div>\
			</section>\
		');
		$('body').append('<script type="text/javascript" src="/js/' + id + '.js" />');
		
		WindowManager.bringToFront($('#' + winId));
		
		$('#' + winId + ' h2').bind('mousedown', function(e){
			DragManager.dragStart($(this).parent(), e.pageX, e.pageY);
		});
		
	},
	'remove'	: function(id){
		$('#' + id).remove();
		WindowManager.remove();
	}
}