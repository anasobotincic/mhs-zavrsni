$(document).ready(function () {
$("#gumb").click(function () {
$(this).html($(this).html()=="Manje <i class=\"fas fa-chevron-up\"></i>" ? " Više <i class=\"fas fa-chevron-down\"></i>" : "Manje <i class=\"fas fa-chevron-up\"></i>");
});
});