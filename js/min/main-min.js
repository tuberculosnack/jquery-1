$(document).ready(function(){var t=0,o=$('input[name="todoInput"]');$("button").click(function(){t+=1,$("h3").html("You have "+t+" todos!");var n=$(o).val(),l=$("<li>"+n+"</li>");$("ul").append(l),$(o).val("")}),$(document).on("click","ul li",function(){$(this).remove(),t-=1,$("h3").html("You have "+t+" todos!")}),$("h4").click(function(){t=0,$("h3").html("Your todo list is empty!"),$("ul").empty()})});