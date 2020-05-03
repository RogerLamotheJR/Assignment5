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

var eightInt = parseInt(hr1);
var nineInt = parseInt(hr2);
var tenInt = parseInt(hr3);
var elevenInt = parseInt(hr4);
var twelveInt = parseInt(hr5);
var oneInt = parseInt(hr6);
var twoInt = parseInt(hr7);
var threeInt = parseInt(hr8);
var fourInt = parseInt(hr9);
var fiveInt = parseInt(hr10);



$(document).ready(function(){
  let current_time = moment().format("HH:mm");
  console.log(current_time);
  $('.content').each(function(i, obj) {
    let content_time = $(this).attr("time").moment(current_time).format("HH:mm");
    
    console.log(content_time);
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

 function timeBlockColorCoding() {

   timeBlock = setInterval(timeBlockColorCoding, 1000);
  Test check: hourNow24 = 20;
   if(nowHour24 >= 10 && nowHour24 <= 16) {

     for (let i =1; i<=10 ; i++) { 
     let hourInInt = parseInt($('#time'+i).text());

      if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
       }
      
       if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#FB8F78');
         continue;
      }
      
      if (hourInInt < nowHour24) {
        $('#text'+i).css('background-color', 'lightgray');
       } 
       else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
     }

   }
   else {
    clearInterval(timeBlock);
     $('text').css('background-color', 'pink');
   }
 }

 let tasker= {
   selectElements: function(){
     this.taskInput = document.getsElementById("input_task")
  }
    } 
