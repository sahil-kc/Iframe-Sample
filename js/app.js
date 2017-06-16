console.log(document.body.clientHeight);
console.log(screen.availHeight);
document.getElementById("wasd").style.height = (screen.availHeight - 0.3 * screen.availHeight) + "px";
$("document").ready(function(){
	$(".year-select").select2({
		placeholder: "Batch",
		allowClear: true
	})
})

