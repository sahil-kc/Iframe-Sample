console.log(document.body.clientHeight);
console.log(screen.availHeight);
if(window.screen.width > 768) {
	document.getElementById("wasd").style.height = (screen.availHeight - 0.3 * screen.availHeight) + "px";
	document.getElementById("iframe").style.height = (screen.availHeight - 0.3 * screen.availHeight) + "px";
}
if(window.screen.width > 768) {
	document.getElementById("iframe").style.width = (($(".container").outerWidth()) - ($("#wasd").outerWidth())) - 15 + "px";
}

else {
	document.getElementById("iframe").style.width = ($(".container").outerWidth()) - 10 + "px";
}



$("document").ready(function(){
	var flag = 1;
	$(".year-select").select2({
		placeholder: "Batch",
		allowClear: true

	});

	var toggler = function() {
		if(1 == flag && window.screen.width < 768) {
			$(".sideNavOverlay").toggleClass("view");
			$("body").toggleClass("restrict");
			$(".sideNav").toggleClass("toggle");
		}
	}


	$(".navbar-toggle").on("click", function(){
		
		toggler();
	})
	$( ".sideNavOverlay").on("click", function(){
		
		toggler();
	})

	$(".getwhite").on("click", function(){
		$("li.getgreen").removeClass("getgreen");
		$(".select2-selection--single").attr({
					id: ""
				});
		$(this).addClass("getgreen");
		el = document.getElementById("iframe");	
		
		switch(parseInt(this.id.replace(/subgroup/, ""))) {
			case 1: el.src = "http://52.27.60.33/kcgroups/kc-team/3?thirdparty=hatch&type=both";
							break;
			case 2: el.src = "http://52.27.60.33/kcgroups/karmasphere/1?thirdparty=hatch&type=both";
			
				break;
			case 3: el.src = "http://52.27.60.33/kcgroups/logic-simplified/2?thirdparty=hatch&type=both";
			
				break;
			case 4 : 
				flag = 0;
				$(".select2-selection--single").attr({
					id: "greenid"
				});

				$("select").on("select2:select", function(){
					
					var array = [];
					array.push(parseInt(newString = ($(".select2-selection__rendered").text().replace('×',''))))
					switch(array[0]) {
						case 1960: el.src = "http://52.27.60.33/kcgroups/kc-team/3?thirdparty=hatch&type=both";
							break;
						case 1965: el.src = "http://52.27.60.33/kcgroups/karmasphere/1?thirdparty=hatch&type=both";
							break;
						case 1970:el.src = "http://52.27.60.33/kcgroups/logic-simplified/2?thirdparty=hatch&type=both";
							break;
						default: el.src = "http://52.27.60.33/kcgroups/hatch-international/7?thirdparty=hatch&type=both";
					}
					flag = 1;
					
					
				})
				
				
				break;
			default: console.log("index not found");
			}
		toggler();
})
	
	
})

