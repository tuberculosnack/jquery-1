// JQUERY

$(document).ready(function(){

  $('#box').click(function(){

    $('ul li:nth-child(2), #button1, #button2, #box').fadeTo('slow', 0.1);

  });

});



























// $(document).ready(function(){
//
//   $('#box').click(function(){
//
//     $('ul li:first-child, ul li:last-child, #button1, #button2, #box').fadeTo('slow', 0.1).setTimeout(1000).fadeTo('slow', 1.0);
//
//   });
//
// });
