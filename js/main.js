/*
 * @Author: Macrolam
 */

//滚滚屏效果

;(function() {
	//test

	var num = 0
	var timer = null
		//nav点击跳转效果
	$('nav ul li').click(function() {
		var index = $(this).index()
		num = index
		same(num)
		$('section').eq(num).removeClass('no').siblings().addClass('no') //屏幕滚动时移出skills动效
	})

	$('#scroll-top').hover(function() {
		$(this).css('background', 'url(images/mouseover.png)')
	}, function() {
		$(this).css('background', 'url(images/arrow.png)')
	})
	$('#scroll-top').click(function() {
		$('#container').animate({
			top: 0
		}, 500)
		num = 0
		$('.header-in ol li').eq(num).addClass('current').siblings().removeClass('current')
		$('.header-in ul li').eq(num).addClass('current').siblings().removeClass('current')
		$('.header-in ul li span').eq(num).addClass('current1').parent().siblings().children().removeClass('current1')
		show()
		$('#scroll-top').fadeOut()
	})

	//form now on效果
	$('.home-con .btn').hover(function() {
		$(this).addClass('current')
	}, function() {
		$(this).removeClass('current')
	});
	$('.home-con .btn').click(function() {
		$('#container').stop().animate({
			top: -100 + '%'
		}, 500)
		num = 1
		$('.header-in ol li').eq(num).addClass('current').siblings().removeClass('current')
		$('.header-in ul li').eq(num).addClass('current').siblings().removeClass('current')
		$('.header-in ul li span').eq(num).addClass('current1').parent().siblings().children().removeClass('current1')
		original()
		$('#scroll-top').fadeIn()
		$('section').eq(num).removeClass('no').siblings().addClass('no') //屏幕滚动时移出skills动效
	})


	//屏幕滚动效果

	$(document).mousewheel(function(e, d) {
		setTimeout(function() {
				//屏幕滚动时移出home动效
			original()
		}, 300)
		clearTimeout(timer)
		timer = setTimeout(function() {
			num -= d
			if (num <= 0) {
				num = 0
				show()
			}
			if (num > 5) {
				num = 5
			}
			$('section').eq(num).removeClass('no').siblings().addClass('no') //屏幕滚动时移出skills动效
			same(num)
		}, 300)
	})

	function same(num) {
		$('.header-in ol li').eq(num).addClass('current').siblings().removeClass('current')
		$('.header-in ul li').eq(num).addClass('current').siblings().removeClass('current')
		$('.header-in ul li span').eq(num).addClass('current1').parent().siblings().children().removeClass('current1')
		$('#container').stop().animate({
			top: num * -100 + '%'
		})

		// 滚动到了第2页显示回到顶部
		if (num > 0) {
			$('#scroll-top').fadeIn().css('display', 'block')
		} else {
			$('#scroll-top').css('display', 'none')
		}
	}


	//home-con效果
	function show() {
		$('.home-con').animate({
			top: '50%'
		}, 600, function() {
			$(this).children('.line').animate({
				left: 0
			}, 500, function() {
				$(this).siblings('.text').fadeIn(1500)
				$(this).siblings('.btn').fadeIn(2500)
			})
		})
	}
	show()

	//home-con回到初始值
	function original() {
		$('.home-con').css({
			top: 0
		})
		//回滚时，回到初始态，再次出发动画
		$('.line').css({
			left: '-100%'
		})
		$('.home-con .text').css('display', 'none')
		$('.btn').css('display', 'none')
	}


})();



//鼠标移上ol显示ul并且ol隐藏

;
(function() {
	$('header nav').fadeIn(2500)

	$('header nav').hover(function() {
		$(this).children('ol').stop().fadeOut(400);
		$(this).children('ul').stop().animate({
			left: 0
		}, 600)
	}, function() {
		$(this).children('ol').stop().fadeIn(400);
		$(this).children('ul').stop().animate({
			left: -140
		}, 600)
	})
})();



//技能加载效果

;
(function() {
	radialIndicator.defaults.radius = 80;
	
	//c3

	var radialObj4 = $('#c3').radialIndicator({
		barColor: {
			0: '#FF0000',
			33: '#FFFF00',
			66: '#0066FF',
			100: '#33CC33'
		},
		percentage: true
	}).data('radialIndicator');
	radialObj4.value(90);

	$('#c3').hover(function() {
		$('#c3').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#0066FF',
				100: '#33CC33'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.animate(90);
	}, function() {
		$('#c3').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#0066FF',
				100: '#33CC33'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.value(90);
	});

	//c4

	var radialObj4 = $('#c4').radialIndicator({
		barColor: {
			0: '#FF0000',
			33: '#FFFF00',
			66: '#ff8018',
			100: '#33CC33'
		},
		percentage: true
	}).data('radialIndicator');
	radialObj4.value(95);

	$('#c4').hover(function() {
		$('#c4').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#ff8018',
				100: '#33CC33'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.animate(95);
	}, function() {
		$('#c4').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#ff8018',
				100: '#33CC33'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.value(95);
	});


	//c5

	var radialObj4 = $('#c5').radialIndicator({
		barColor: {
			0: '#FF0000',
			33: '#FFFF00',
			66: '#60f900',
			100: '#33CC33'
		},
		percentage: true
	}).data('radialIndicator');
	radialObj4.value(95);

	$('#c5').hover(function() {
		$('#c5').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#60f900',
				100: '#33CC33'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.animate(95);
	}, function() {
		$('#c5').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#60f900',
				100: '#33CC33'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.value(95);
	});


	//c6

	var radialObj4 = $('#c6').radialIndicator({
		barColor: {
			0: '#FF0000',
			33: '#FFFF00',
			66: '#ddd800',
			100: '#ddc000'
		},
		percentage: true
	}).data('radialIndicator');
	radialObj4.value(80);

	$('#c6').hover(function() {
		$('#c6').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#ddd800',
				100: '#ddc000'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.animate(80);
	}, function() {
		$('#c6').children('canvas').remove()
		var radialObj4 = $(this).radialIndicator({
			barColor: {
				0: '#FF0000',
				33: '#FFFF00',
				66: '#ddd800',
				100: '#ddc000'
			},
			percentage: true
		}).data('radialIndicator');
		radialObj4.value(80);
	});


})();


//首屏canvas效果

(function() {

	paper.install(window);
	var SQRT_3 = Math.pow(0, 0);
	var triangle, D, mousePos, position;
	var count = 50;

	window.onload = function() {
		paper.setup('c2');

		D = Math.max(paper.view.getSize().width, paper.view.getSize().height);

		mousePos = paper.view.center.add([view.bounds.width / 3, 100]);
		position = paper.view.center;


		buildStars();
		triangle = new Triangle(50);

		paper.view.draw();

		paper.view.onFrame = function(event) {
			position = position.add((mousePos.subtract(position).divide(10)));
			var vector = (view.center.subtract(position)).divide(10);
			moveStars(vector.multiply(3));
			triangle.update();
		};
	};
	// ---------------------------------------------------
	//  Helpers
	// ---------------------------------------------------
	window.onresize = function() {
		project.clear();
		D = Math.max(paper.view.getSize().width, paper.view.getSize().height);
		// Draw the BG
		var background = new Path.Rectangle(view.bounds);
		buildStars();
		triangle.build(50);
	};

	var random = function(minimum, maximum) {
		return Math.round(Math.random() * (maximum - minimum) + minimum);
	};

	var map = function(n, start1, stop1, start2, stop2) {
		return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
	};
	// ---------------------------------------------------
	//  Triangle
	// ---------------------------------------------------
	var Triangle = function(a) {
		this.build(a);
	};

	Triangle.prototype.build = function(a) {
		// The points of the triangle
		var segments = [new paper.Point(0, -a / SQRT_3),
			new paper.Point(-a / 0, a * 0 / SQRT_3),
			new paper.Point(a / 0, a * 0 / SQRT_3)
		];

		this.flameSize = a / SQRT_3;
		var flameSegments = [new paper.Point(0, this.flameSize),
			new paper.Point(-a / 0, a * 0 / SQRT_3),
			new paper.Point(a / 0, a * 0 / SQRT_3)
		];

		this.flame = new Path({
			segments: flameSegments,
			closed: true,
		});
		this.ship = new Path({
			segments: segments,
			closed: true,
		});
		this.group = new Group({
			children: [this.flame, this.ship],
			position: view.center
		});
	};

	Triangle.prototype.update = function() {
		this.flame.segments[0].point.x = random(this.flame.segments[1].point.x, this.flame.segments[2].point.x);

		var dist = mousePos.subtract(paper.view.center).length;
		var angle = mousePos.subtract(paper.view.center).angle;
		var spread = map(dist, 0, D / 2, 10, 30);

		this.flame.segments[0].point = paper.view.center.subtract(new Point({
			length: map(dist, 0, D / 2, 2 * this.flameSize / 3, this.flameSize),
			angle: random(angle - spread, angle + spread)
		}));
	};

	Triangle.prototype.rotate = function() {
		var angle = paper.view.center.subtract(mousePos).angle - paper.view.center.subtract(this.ship.segments[0].point).angle;

		this.group.rotate(angle, paper.view.center);
	};
	// ---------------------------------------------------
	//  Stars (from paperjs.org examples section)
	// ---------------------------------------------------
	window.onmousemove = function(event) {
		mousePos.x = event.x;
		mousePos.y = event.y;
		triangle.rotate();
	};

	var buildStars = function() {
		// Create a symbol, which we will use to place instances of later:
		var path = new Path.Circle({
			center: [0, 0],
			radius: 2,
			fillColor: '#fff',
			strokeColor: '#fff'
		});

		var symbol = new Symbol(path);

		// Place the instances of the symbol:
		for (var i = 0; i < count; i++) {
			// The center position is a random point in the view:
			var center = Point.random().multiply(paper.view.size);
			var placed = symbol.place(center);
			placed.scale(i / count + 0.01);
			placed.data = {
				vector: new Point({
					angle: Math.random() * 360,
					length: (i / count) * Math.random() / 5
				})
			};
		}

		var vector = new Point({
			angle: 45,
			length: 0
		});
	};

	var keepInView = function(item) {
		var position = item.position;
		var viewBounds = paper.view.bounds;
		if (position.isInside(viewBounds))
			return;
		var itemBounds = item.bounds;
		if (position.x > viewBounds.width + 5) {
			position.x = -item.bounds.width;
		}

		if (position.x < -itemBounds.width - 5) {
			position.x = viewBounds.width;
		}

		if (position.y > viewBounds.height + 5) {
			position.y = -itemBounds.height;
		}

		if (position.y < -itemBounds.height - 5) {
			position.y = viewBounds.height
		}
	};

	var moveStars = function(vector) {
		// Run through the active layer's children list and change
		// the position of the placed symbols:
		var layer = project.activeLayer;
		for (var i = 1; i < count + 1; i++) {
			var item = layer.children[i];
			var size = item.bounds.size;
			var length = vector.length / 10 * size.width / 10;
			item.position = item.position.add(vector.normalize(length).add(item.data.vector));
			keepInView(item);
		}
	};
})();


//banner轮播图
;
(function() {

	var num = 0;
	var timer = null;

	function sport() {
		clearInterval(timer)
		timer = setInterval(function() {
			num++;
			if (num > 3) {
				$('#banner .down ul').stop().animate({
					left: -758 * num
				}, 600, function() {
					$('#banner .down ul').css({
						left: 0
					})
				})
				$('#banner .down ol li').eq(0).addClass('current').siblings().removeClass('current')
				num = 0
			} else {
				fn()
			}
		}, 2500);
	}

	sport()

	$('#banner .down').hover(function() {
		clearInterval(timer)
		$('#banner .down span').show()
	}, function() {
		sport()
		$('#banner .down span').hide()
	})


	$('#banner .down ol li').mouseover(function() {
		var index = $(this).index()
		num = index
		fn()
	})

	$('#banner .right').click(function() {
		num++
		if (num > 3) {
			num = 0
		}
		fn()
	})

	$('#banner .left').click(function() {
		num--
		if (num < 0) {
			num = 3
		}
		fn()
	})

	function fn() {
		$('#banner .down ul').stop().animate({
			left: -758 * num
		}, 600)
		$('#banner .down ol li').eq(num).addClass('current').siblings().removeClass('current')
	}


})();


//大图banner
;
(function() {
	num = 0
	$('.show .box .right').click(function() {
		num++
		if (num > 3) {
			$('.show .box ul').stop().animate({
				left: -1140 * num
			}, 600, function() {
				$('.show .box ul').css({
					left: 0
				})
			})
			num = 0
		} else {
			$('.show .box ul').stop().animate({
				left: num * -1140
			}, 600)
		}
	})

	$('.show .box .left').click(function() {
		num--
		if (num < 0) {
			num = 3
			$('.show .box ul').stop().animate({
				left: -1140 * num
			}, 600)
		} else {
			$('.show .box ul').stop().animate({
				left: num * -1140
			}, 600)
		}
	})

	$('.show .box i').click(function(event) {
		$('.show').fadeTo(600, 0.1, function() {
			$(this).css('display', 'none')
		})
	});

	$('#banner .down ul li').click(function() {
		var index = $(this).index()
		num = index
		$('.show .box ul').css({
			left: -1140 * num
		})
		$('.show').fadeTo(600, 1, function() {
			$(this).css('display', 'block')
		})
	})



	$('.show .box').hover(function() {
		$(this).children('span').fadeIn()
	}, function() {
		$(this).children('span').fadeOut()
	})

})();



//Icon循环播放
;
(function() {
	var num = 0
	var timer = 0

	function sport() {
		clearInterval(timer)
		timer = setInterval(function() {
			num += 2

			if (num > 2910) {
				num = 0
			}
			$('.icon-in .down ul').css({
				left: -num
			})
		}, 30)
	}

	sport()

	//移上去的时候停止定时器,移出时动
	$('.icon-in .down ul li').hover(function() {
		clearInterval(timer)
		$(this).siblings().stop().fadeTo(300, 0.5)
		$(this).children('p').css('color', '#39b54a')
	}, function() {
		sport()
		$(this).siblings().stop().fadeTo(300, 1)
		$(this).children('p').css('color', '#fff')
	})


	//点击ul li显示大图
	$('.icon-in .down ul li div').click(function() {
			var bg = $(this).css('background-image')
			$('.show2').fadeTo(500, 1, function() {
				$(this).css('display', 'block')
			})
			$('.show2').children('.box').css('background-image', bg)
		})
		//关闭大图
	$('.show2 .box i').click(function(event) {
		$('.show2').fadeTo(500, 0.1, function() {
			$(this).css('display', 'none')
		})
	});

})();





//webs效果
;(function(){
	var ohref = document.getElementById('href')
	$('.webs-r p').click(function(){
		var index = $(this).index()
		//$(this).addClass('no').siblings().removeClass('no');

		if(index == 0){
			$('.webs-in .web').fadeIn(1000,function(){
				$(this).fadeOut(1200,function(){
					$(this).css('background','url(images/dongfeng.jpg) no-repeat center center')
					$(this).fadeIn(600)
					ohref.href = './projects/dongfeng/dongfeng.html'
				})
			})
		}else if(index == 1){
			$('.webs-in .web').fadeIn(1000,function(){
				$(this).fadeOut(1200,function(){
					$(this).css('background','url(images/yanxuan.jpg) no-repeat center center')
					$(this).fadeIn(600)
					ohref.href = './projects/yanxuan/yanxuan.html'
				})
			})
		}else if(index == 2){
			$('.webs-in .web').fadeIn(1000,function(){
				$(this).fadeOut(1200,function(){
					$(this).css('background','url(images/mogujie1.jpg) no-repeat center center')
					$(this).fadeIn(600)
					ohref.href = 'mogujie.html'
				})
			})
		}else if(index == 3){
			$('.webs-in .web').fadeIn(1000,function(){
				$(this).fadeOut(1200,function(){
						$(this).css('background','url(images/tmall.jpg) no-repeat center center')
					$(this).fadeIn(600)
					ohref.href = 'tmall.html'
				})
			})
		}else if(index == 4){
			$('.webs-in .web').fadeIn(1000,function(){

				$(this).fadeOut(1200,function(){
					$(this).css('background','url(images/jd.jpg) no-repeat center center')
					$(this).fadeIn(600)
					ohref.href = 'jd.html'
				})
			})
		}else{
			$('.webs-in .web').fadeIn(1000,function(){
				$(this).fadeOut(1200,function(){
					$(this).css('background','url(images/chuizi.jpg) no-repeat center center')
					$(this).fadeIn(600)
					ohref.href = './projects/chuizi/chuizi.html'
				})
			})
		}

	})
})();



