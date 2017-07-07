$(function() {
	$(document).ready(function() {
		$('.top-t-l').mousemove(function() {
			$('#tu').slideDown(200); //可以设置切换时间 
		});
		$('.top-t-l').mouseleave(function() {
			$('#tu').slideUp("fast");
		});

	});
	// ActionScript Document
	$(".ding").on("mouseenter", function() {
		$('#xia1').show();

	})
	$(".ding").on("mouseleave", function() {
		$('#xia1').hide();
	});
	$("#xia1").on("mouseenter", function() {
		$(this).show();
	})
	$("#xia1").on("mouseleave", function() {
		$(this).hide();
	});

	$(".ding1").on("mouseenter", function() {
		$('#xia2').show();

	})
	$(".ding1").on("mouseleave", function() {
		$('#xia2').hide();
	});
	$("#xia2").on("mouseenter", function() {
		$(this).show();
	})
	$("#xia2").on("mouseleave", function() {
		$(this).hide();
	});
})

var _box_y = $("#menu").offset().top;
var _box_x = $("#menu").offset().left;

$(window).scroll(function() {
	if ($(window).scrollTop() > _box_y) {
		$("#menu").attr("style", "position: absolute;top:" + ($(window).scrollTop() - 6) + "px;background-color:#fff; left:" + _box_x + "px;z-index:99;width:100%;");
	} else {
		$("#menu").attr("style", "");
	}
})

var _box1_y = $("#xq").offset().top;
var _box1_x = $("#xq").offset().left;

$(window).scroll(function() {
	if ($(window).scrollTop() > _box1_y) {
		$("#yi").attr("style", "background-color:#f00; left:" + _box1_x + "px;z-index:99;");
		$("#er").attr("style", "background-color:#fff");
		$("#san").attr("style", "background-color:#fff");
	} else {
		$("#yi").attr("style", "");
	}
})

var _box2_y = $("#tab").offset().top;
var _box2_x = $("#tab").offset().left;

$(window).scroll(function() {
	if ($(window).scrollTop() > _box2_y) {
		$("#er").attr("style", "background-color:#f00; left:" + _box2_x + "px;z-index:9999999;");
		$("#yi").attr("style", "background-color:#fff");

		$("#san").attr("style", "background-color:#fff");
	} else {
		$("#er").attr("style", "");
	}
})

var _box3_y = $("#msg").offset().top;
var _box3_x = $("#msg").offset().left;

$(window).scroll(function() {
	if ($(window).scrollTop() > _box3_y) {
		$("#san").attr("style", "background-color:#f00; left:" + _box3_x + "px;z-index:9999999;");
		$("#yi").attr("style", "background-color:#fff");
		$("#er").attr("style", "background-color:#fff");

	} else {
		$("#san").attr("style", "");
	}
})

//选项卡
window.onload = function() {
	var ul = document.getElementById("ul");
	for (let i = 0; i < ul.children.length; i++) {
		ul.children[i].onclick = function() {
			show(i);
		}
	}

	var ul1 = document.getElementById("ul1");

	for (let j = 0; j < ul1.children.length; j++) {
		ul1.children[j].onclick = function() {
			show(j);
		}
	}

	function show(ord) {
		var x = document.getElementById("content-b");
		//让所有div隐藏
		for (var j = 0; j < x.children.length; j++) {
			x.children[j].style.display = "none";
		}
		x.children[ord].style.display = "block";
		var c = document.getElementById("content-c");

		for (var j = 0; j < c.children.length; j++) {
			c.children[j].style.display = "none";
		} //让第一个div显示
		c.children[ord].style.display = "block";

		var q = document.getElementById("main-l");
		//让所有div隐藏
		for (var i = 0; i < q.children.length; i++) {
			q.children[i].style.display = "none";
		}
		q.children[ord].style.display = "block";

		var w = document.getElementById("jieshao");
		for (var i = 0; i < w.children.length; i++) {
			w.children[i].style.display = "none";
		} //让第一个div显示
		q.children[ord].style.display = "block";

		var w = document.getElementById("jieshao");
		for (var i = 0; i < w.children.length; i++) {
			w.children[i].style.display = "none";
		} //让第一个div显示
		w.children[ord].style.display = "block";

		var e = document.getElementById("jiage");
		for (var i = 0; i < e.children.length; i++) {
			e.children[i].style.display = "none";
		} //让第一个div显示
		e.children[ord].style.display = "block";

		var r = document.getElementById("yanse");
		for (var i = 0; i < r.children.length; i++) {
			r.children[i].style.display = "none";
		} //让第一个div显示
		r.children[ord].style.display = "block";
	}
}