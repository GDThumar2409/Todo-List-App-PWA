$(document).ready(function(){
	
var noteCount=0;
var count;

function displayNotes() {
        for (noteCount = 0; noteCount < localStorage.length; noteCount++) {
          var noteID        = localStorage.key(noteCount);
		
		$("ul").append("<li><span id='" + noteID + "'><i class='fa fa-trash'></i></span> " + localStorage.getItem(noteID) + "</li>");
        }
        temp= noteID.split("-")[1];
        count =Number(temp) + 1;
      }
      displayNotes();

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
  var noteID=event.currentTarget.id;
	localStorage.removeItem(noteID);
$(this).parent().fadeOut(500,function(){
	
$(this).remove();
});
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
if(event.which === 13){

var todoText = $(this).val();
$(this).val("");

var noteID      = 'task-' + count;

$("ul").append("<li><span id='" + noteID + "'><i class='fa fa-trash'></i></span> " + todoText + "</li>");

localStorage.setItem( noteID, todoText );


}
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});



});