"use strict";

$(function() {
  checkCompleted();
  $('#addTodo').on("click", function(e){
    e.preventDefault();
    var userInput = $('#todoItem').val();
    $('#todoItem').val("");

    var li = $("<li class='list-group-item'></li>");
    li.append("<span class='todo'>" +userInput+" </span>");
    var trash = $("<img src = 'images/trash.png' id='deleteTodo'>");
    li.append(trash);
    $('#todosList').append(li);
    // $('#todosList').append("<li class='list-group-item'>" + userInput + "</li>");
  })

  
  $('#todosList').delegate("span","click", function(e){
    e.preventDefault();
    if ($(e.target).hasClass("completed")){
       $(e.target).removeClass("completed");
    } else {
       $(e.target).addClass("completed");
    }
    checkCompleted();
  })

  $('#todosList').delegate("#deleteTodo", "click", function(e){
    e.preventDefault();
    alert("Hope you are sure - no turning back now!");
    $(e.target).parent().remove();

  })

  function checkCompleted(){
    if ($('.completed').length){
      $('#deleteCompleted').show();
    } else {
      $('#deleteCompleted').hide();
    }
  }

  $('#deleteCompleted').on("click", function(e){
    e.preventDefault();
    $('.completed').parent().remove();
    checkCompleted();

  })

  // $('#deleteTodo').on("click", function(e){
  //   e.preventDefault();
  //   alert("in delete");
  //   $(e.target).remove();

  // })
  





});
