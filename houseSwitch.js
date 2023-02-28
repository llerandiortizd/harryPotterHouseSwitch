const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const divs = ["gryffinDiv", "huffleDiv", "ravenDiv", "slytherDiv"];

function showElement(elem){
	const elemt = document.getElementById(elem); 
	const elt = document.getElementsByClassName("houses");
	for(let i = 0; i < divs.length; i++){
		if(elt[i].id != elem){
			elt[i].classList.add("hidden");
			elt[i].classList.remove("shown");
		} else {
			elt[i].classList.add("shown");
			elt[i].classList.remove("hidden");
		}
	}
	return elemt;
}

buttons.forEach(function(button){
	
	button.addEventListener("click", function(){
			
			if(button.id == "gryffinBtn"){
				showElement("gryffinDiv");
				body.style.backgroundImage = `url('gryffindor.jpg')`;
			} else if(button.id == "huffleBtn"){
				showElement("huffleDiv");
				body.style.backgroundImage = `url('hufflepuff.jpg')`;
			} else if(button.id == "ravenBtn"){
				showElement("ravenDiv");
				body.style.backgroundImage = `url('ravenclaw.jpeg')`;
			} else if(button.id == "slytherBtn"){
				showElement("slytherDiv");
				body.style.backgroundImage = `url('slytherin.jpg')`;
			}
			
	});

});
