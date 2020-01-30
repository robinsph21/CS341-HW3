// Author: Philip Robinson

arrow_change_handler = function( e ) {
     $("#testamonial-arrow").toggleClass("mirrored");
}

$(function() {
     // If the testamonial card is "mouseover'd" or "mouseout'd", toggle the direction of the arrow.
     $("#testamonials").mouseover(arrow_change_handler).mouseout(arrow_change_handler);
});
