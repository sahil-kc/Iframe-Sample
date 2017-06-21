console.log(document.body.clientHeight);
console.log(screen.availHeight);
document.getElementById("wasd").style.height = (screen.availHeight - 0.3 * screen.availHeight) + "px";
document.getElementById("iframe").style.height = (screen.availHeight - 0.3 * screen.availHeight) + "px";
$("document").ready(function(){
	$(".year-select").select2({
		placeholder: "Batch",
		allowClear: true
	})
})

var iframeShifter = function(index) {
	el = document.getElementById("iframe");
	$("#subgroup1,#subgroup2,#subgroup3,#subgroup4").css({"background":"white", "color": "black"});
	switch(index) {
		case 0: el.src = "http://localhost:8000/kcgroups/kc-team/3?thirdparty=hatch&type=both";

			document.getElementById("subgroup1").style.background = "#3ebb95";
			document.getElementById("subgroup1").style.color = "#fff";
			break;
		case 1: el.src = "http://localhost:8000/kcgroups/karmasphere/1?thirdparty=hatch&type=both";
			document.getElementById("subgroup2").style.background = "#3ebb95";
			document.getElementById("subgroup2").style.color = "#fff";
			break;
		case 2: el.src = "http://localhost:8000/kcgroups/logic-simplified/2?thirdparty=hatch&type=both";
			document.getElementById("subgroup3").style.background = "#3ebb95";
			document.getElementById("subgroup3").style.color = "#fff";
			break;
		case 3: el.src = "http://localhost:8000/kcgroups/hatch-international/7?thirdparty=hatch&type=both";
			document.getElementById("subgroup4").style.background = "#3ebb95";
			document.getElementById("subgroup4").style.color = "#fff";
			break;
	}
}