// Author: Philip Robinson

dropdown_title_handler = function( e ){
     // Grab the first element in the dropdown with class "current-month"
     // Note: It should be noted that this only works if nothing is manually
     //       messed with. If someone added the "current-month" class to
     //       another month div, that one would be toggled instead.
     var month = $("#months").children(".current-month")[0];
     // Remove the "current-month" class from the element, making it visible
     $(month).removeClass("current-month");
     // Make the selector/widget's current text the month that was clicked.
     var month_string = $(this).html();
     $("#selector").html(month_string);
     // Remove that month from the menu by giving it the "current-month" class.
     $(this).addClass("current-month");
     // Send the post
     $.post( "/orders?month=" + month_string.toUpperCase(), function( data ) {
         $("#cherry-quantity").html(JSON.stringify(data.data[0].quantity));
         $("#chocolate-quantity").html(JSON.stringify(data.data[1].quantity));
         $("#plain-quantity").html(JSON.stringify(data.data[2].quantity));
     });
}


$(function(){
     // If a month in the dropdown is clicked
     $(".month").click(dropdown_title_handler);
});
