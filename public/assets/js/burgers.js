$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDev = $(this).data("devoured");
  
      var newDevoured = {
        devoured: newDev
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log(newDev);
          location.reload();
        }
      );
    });
  
    $(".addForm").on("submit", function(event) {
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#burg").val().trim()
      };
  
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });