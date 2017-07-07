
	$('input').blur(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证用户名
             
             if( $(this).is('#username') ){
             		var reg = /^1[35784][0-9]{9}$/;
             		//var you = /^\w+@\w+\.(com|net|cn|com\.cn)$/;
						//console.log(typeof(you))
					
                    if( reg.test(this.value)==false){                   	
                        var errorMsg = '请输入电话号码或邮箱';
                        $(".span").html(errorMsg);
                        $(".span").css("color","red");
                        $("#username").css("background","#fed9d9")
                        $(".span").css("display","block");
                    }else{
                        var okMsg = '√';
                        $(".span").html(okMsg);
                        $(".span").css("color","green");
                        $(".span").css("display","block");
                    }
                    
                    
             }
             //验证密码
           	if($(this).is('.mm')){
           		console.log(this.placeholder)
           		
           		if(this.value=="" || this.value.length<6){
           			var errorMsg = '密码最少6位';
                        $(".span1").html(errorMsg);
                        $(".span1").css("color","red");
                         $(".span1").css("display","block");
                     	$("#mm").css("background","#fed9d9")
                        
           		}else{
           			var errorMsg = '√';
                        $(".span1").html(errorMsg);
                        $(".span1").css("color","green");
                         $(".span1").css("display","block");
           		}
           		
           }
           if( $(this).is('.qr') ){
           		//console.log($("#put2")[0].value)
           		//console.log(this.value)
             	if(this.value==($(".mm")[0].value) && this.value!=""){
             		var errorMsg = '√';
                        $(".span2").html(errorMsg);
                        $(".span2").css("color","green");
                         $(".span2").css("display","block");
             	}else{
             		var errorMsg = '输入错误';
                        $(".span2").html(errorMsg);
                        $(".span2").css("color","red");
                        $("#qr").css("background","#fed9d9")
                        $(".span2").css("display","block");
             	}
             }
         
        })
		$("#username").focus(function(){
  			$("#username").css("background-color","#fff");
  			$(".span").css("display","none");
		});
		$("#mm").focus(function(){
  			$("#mm").css("background-color","#fff");
  			$(".span1").css("display","none");
		});
		$("#qr").focus(function(){
  			$("#qr").css("background-color","#fff");
  			$(".span2").css("display","none");
		});



function test1(){
		
		changeyzm();
}
	function changeyzm(){	
	
		var num;
		var str="";//验证码
		while(true){
			num=parseInt(Math.random()*123);
			if(num>=97 && num<=122){
				str+=String.fromCharCode(num);
			}
			if(num>=65 && num<=90){
				str+=String.fromCharCode(num);
			}
			if(num>=0 && num<=9){
				str+=num.toString();
			}
			if(str.length>=4){
				break;
			}
		}
		document.getElementById("showCode").innerHTML=str;
	}

$