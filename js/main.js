// JQUERY

$(document).ready(function(){

  var $todoCount = 0;
  var $todoInput = $('input[name="todoInput"]');

  //ADD
  $('button').click(function(){

    //Up count and replace text
    $todoCount = $todoCount + 1;
    $('h3').html('You have ' + $todoCount + ' todos!');

    //capture input and add to li
    var $input = $($todoInput).val();
    var $li = $('<li>' + $input + '</li>');
    $('ul').append($li);

    //clear entry
    $($todoInput).val('');

  });

  //DELETE

  $(document).on('click', 'ul li', function(){

    //Remove
    $(this).remove();

    $todoCount = $todoCount - 1;
    $('h3').html('You have ' + $todoCount + ' todos!');

  });

  //Clear All

  $('h4').click(function(){

    $todoCount = 0;
    $('h3').html('Your todo list is empty!');

    $('ul').empty();

  });

});
