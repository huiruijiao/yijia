$(function(){
	
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

var _box_y = $("#subnav").offset().top; 
var _box_x = $("#subnav").offset().left; 
var a = $("i").offset().top;
var a = $("i").offset().left;
$(window).scroll(function(){ 
if($(window).scrollTop() > _box_y){ 
$("#subnav").attr("style","position: absolute;top:"+($(window).scrollTop()-6)+"px; left:"+_box_x+"px;z-index:99;width:100%;height:1.5%;"); 
$("i").hide("slow");
}else{ 
$("#subnav").attr("style","");
$("i").show("slow");
} 
}) 

