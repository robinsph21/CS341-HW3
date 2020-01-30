// Author: Philip Robinson

form_submit_handler = function( e ) {
     // Stop the default behavior of refreshing the website
     e.preventDefault();
     // If the notes contains substring "vegan", post an alert and do nothing
     if (~($("#notes").val().toUpperCase()).indexOf("VEGAN")) {
          window.alert("WARNING: Cheesecake contains dairy, so it is not vegan!");
     } else {
          // Get the type, quantity, notes
          var type = $("input[name='type']:checked").val();
          var quantity = $("#quantity").val();
          var notes = $("#notes").val();
          // Make a newln variable to avoid overly gross appends.
          var newln = "<br /><br />"
          // Start printing out the order
          $("form").html("Thank you!&nbsp;&nbsp;Your order has been placed:"+newln);
          $("form").append("<span class=\""+type+"\">"+quantity+" x "+type+" cheesecakes</span>"+newln);
          $("form").append("Notes: <br />");
          $("form").append("<span class=\"notes\">"+notes+"</span>");
          // Make everything centered and nicely formatted
          $("form").addClass("completed");
     }
}

$(function(){
     // When the form is submitted, take action
     $("form").submit(form_submit_handler);
});
