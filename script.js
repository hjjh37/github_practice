

$(function(){
	$(".nav>li").mouseover(function(){
		$(this).children(".submenu").stop().slideDown();
	});
	$(".nav>li").mouseleave(function(){
		$(this).children(".submenu").stop().slideUp();
	});


	// var num = 0;
	// $("#slides li").eq(num).fadeIn("fast");
	// setInterval(function(){
	// 	$("#slides li").eq(num).fadeOut("fast");
	// 	if(num==2){
	// 		num=0;
	// 		$("#slides li").eq(num).fadeIn("fast");
	// 	}else{
	// 		num++;
	// 		$("#slides li").eq(num).fadeIn("fast");
	// 	}
	// },2000);

	// var num = 0;
	// $("#slides li").eq(num).fadeIn("fast");
	// setInterval(function(){
	// 	$("#slides li").eq(num).fadeOut("fast");
	// 	if(num==2){
	// 		num=0;
	// 		$("#slides li").eq(num).fadeIn("fast");
	// 	}else{
	// 		num++;
	// 		$("#slides li").eq(num).fadeIn("fast");
	// 	}
	// },2000);

	// var num=0;
	// $("#slides li").eq(num).fadeIn("fast");
	// setInterval(function(){
	// 	$("#slides li").eq(num).fadeOut("fast");
	// 	if(num==3){
	// 		num=0;
	// 		$("#slides li").eq(num).fadeIn("fast");
	// 	}else{
	// 		num++;
	// 		$("#slides li").eq(num).fadeIn("fast");
	// 	}
	// },2000);

// var num=0;
// $("#slides li").eq(num).fadeIn("fast");
// setInterval(function(){
// 	$("#slides li").eq(num).fadeOut("fast");
// 	if(num==3){
// 		num=0;
// 		$("#slides li").eq(num).fadeIn("fast");
// 	}else{
// 		num++;
// 		$("#slides li").eq(num).fadeIn("fast");
// 	}
// },2000);

// 	var num=0;
// 	$("#slides li").eq(num).fadeIn("fast");
// 	setInterval(function(){
// 		$("#slides li").eq(num).fadeOut("fast");
// 		if(num==3){
// 			$("#slides li").eq(num).fadeIn("fast");
// 		}else{
// 			num++;
// 			$("#slides li").eq(num).fadeIn("fast");
// 		}
// 	},2000);

// var num=0;
// $("#slides li").eq(num).fadeIn("fast");
// setInterval(function(){
// 	$("#slides li").eq(num).fadeOut("fast");
// 	if(num==3){
// 		num=0;
// 		$("#slides li").eq(num).fadeIn("fast");
// 	}else{
// 		num++;
// 		$("#slides li").eq(num).fadeIn("fast");
// 	}
// },2000);

var num=0;
$("#slides li").eq(num).fadeIn("fast");
setInterval(function(){
	$("#slides li").eq(num).fadeOut("fast");
	if(num==3){
		num=0;
		$("#slides li").eq(num).fadeIn("fast");
	}else{
		num++;
		$("#slides li").eq(num).fadeIn("fast");
	}
},2000);
// $("#modal button").click(function(){
// 	$("#modal").hide();
// });
$("#modal button").click(function(){
	$("#modal").hide();
});
});



// $(".btn_slides_next").click(function(){
// 	if(!$("#slides li").last().is(":visible")){
// 		$("#slides li:visible").hide().next("li").fadeIn("40");
// 		$(".btn_slides_next").removeClass("off");
// 	}
// 	if($("#sldies li").last().is(":visible")){
// 		$(".btn_slides_next").addClass("off");
// 	}
// 	return false;
// });

// $(".btn_slides_prev").click(function(){
// 	if(!$("#slides li").first().is(":visible"))	{
// 		$("#slides li:visible").hide().prev("li").fadeIn("40");
// 		$(".btn_sldies_prev").removeClass("off");
// 	}
// 	if($("#slides li").first().is(":visible")){
// 		$(".btn_sldies_prev").addClass("off");
// 	}
// 	return false;
// });








// var imgs=2;
// var now = 0;

// start();

// function start(){
// 	$(".images>img").eq(0).siblings().css({"margin-left":"-2000px"});
// 	setInterval(function(){slide();});
// }
// function slide(){
// 	now = now==imgs?0:now+=1;
// 	$(".images>img").eq(now-1).css({"margin-left":"-2000px"});
// 	$(".images>img").eq(now).css({"margin-left":"s0px"});
// }