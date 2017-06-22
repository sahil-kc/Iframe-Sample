console.log(document.body.clientHeight);
console.log(screen.availHeight);
if(window.screen.width > 768) {
	document.getElementById("wasd").style.height = (screen.availHeight - 0.3 * screen.availHeight) + "px";
	document.getElementById("iframe").style.height = (screen.availHeight - 0.3 * screen.availHeight) + "px";
}
$("document").ready(function(){
	$(".year-select").select2({
		placeholder: "Batch",
		allowClear: true

	})
		
})

$(".getwhite").on("click", function(){
	$("li.getgreen").removeClass("getgreen");
	$(".select2-selection--single").attr({
				id: ""
			});
	$(this).addClass("getgreen");
	el = document.getElementById("iframe");	
	
	switch(parseInt(this.id.replace(/subgroup/, ""))) {
		case 1: el.src = "http://localhost:8000/kcgroups/kc-team/3?thirdparty=hatch&type=both";
			break;
		case 2: el.src = "http://localhost:8000/kcgroups/karmasphere/1?thirdparty=hatch&type=both";
			break;
		case 3: el.src = "http://localhost:8000/kcgroups/logic-simplified/2?thirdparty=hatch&type=both";
			break;
		case 4 : 
			$(".select2-selection--single").attr({
				id: "greenid"
			});

			$("select").on("select2:select", function(){
				var array = [];
				array.push(parseInt(newString = ($(".select2-selection__rendered").text().replace('×',''))))
				switch(array[0]) {
					case 1960: el.src = "http://localhost:8000/kcgroups/kc-team/3?thirdparty=hatch&type=both";
						break;
					case 1965: el.src = "http://localhost:8000/kcgroups/karmasphere/1?thirdparty=hatch&type=both";
						break;
					case 1970:el.src = "http://localhost:8000/kcgroups/logic-simplified/2?thirdparty=hatch&type=both";
						break;
					default: el.src = "http://localhost:8000/kcgroups/hatch-international/7?thirdparty=hatch&type=both";
				}
			})
			
			
			break;
		default: console.log("index not found");
		}
})