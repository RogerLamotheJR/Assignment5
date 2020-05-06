var hr1 = $("#time1").text();
var hr2 = $("#time2").text();
var hr3 = $("#time3").text();
var hr4 = $("#time4").text();
var hr5 = $("#time5").text();
var hr6 = $("#time6").text();
var hr7 = $("#time7").text();
var hr8 = $("#time8").text();
var hr9 = $("#time9").text();
var hr10= $("#time10").text();

var eightInt  = parseInt(hr1);
var nineInt   = parseInt(hr2);
var tenInt    = parseInt(hr3);
var elevenInt = parseInt(hr4);
var twelveInt = parseInt(hr5);
var oneInt    = parseInt(hr6);
var twoInt    = parseInt(hr7);
var threeInt  = parseInt(hr8);
var fourInt   = parseInt(hr9);
var fiveInt   = parseInt(hr10);



$(document).ready(function(){
  let current_time = moment().format("HH:mm").slice(0,2);
  console.log(`current time:${current_time}`);
  $('textarea').each(function() {
  
    let content_time = $(this).attr("time").slice(0,2);
    
    if ( parseInt(current_time) > parseInt(content_time) ){
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if ( parseInt(current_time) < parseInt(content_time) ){
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
      
    } else {
      console.log("else time");
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
      
  
    }
  });

  $(".btn").on("click", function(){
    let text_attr = $(this).siblings('.content').attr("id");
    let text_content = $(this).siblings('.content').val();
    console.log(text_content)
    console.log(text_attr);
    localStorage.setItem(text_attr, text_content);
    
  })

  $("#text1").val(localStorage.getItem("text1"));
  $("#text2").val(localStorage.getItem("text2"));
  $("#text3").val(localStorage.getItem("text3"));
  $("#text4").val(localStorage.getItem("text4"));
  $("#text5").val(localStorage.getItem("text5"));
  $("#text6").val(localStorage.getItem("text6"));
  $("#text7").val(localStorage.getItem("text7"));
  $("#text8").val(localStorage.getItem("text8"));
  $("#text9").val(localStorage.getItem("text9"));
  $("#text10").val(localStorage.getItem("text10"));



});

 

   


