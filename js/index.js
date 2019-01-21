//Get in Game
function playGame() {
	document.querySelector(`.hud-bottomcenter`).innerHTML = document.querySelector(`.hud-intro-name`).value.toString();
	let introElements = document.querySelectorAll(`.hud-intro, .hud-intro *`);
	for(let i = 0; i < introElements.length; i++) {
		introElements[i].style.display = `none`;
	}
	let unhideElements = document.querySelectorAll(`.hud-game, .hud-game *`);
	for(let i = 0; i < unhideElements.length; i++) {
		unhideElements[i].style.display = `block`;
	}
}
//Log Intro Error
function introError(loggingError) {
	let errorArea = document.querySelector(`.hud-intro-errorArea`);
	errorArea.innerHTML = loggingError.toString();
	errorArea.style.display = `block`;
}
//Intro Verification
document.querySelector(`.hud-intro-form`).submit(function(e) {
	e.preventDefault();
	let formElements = document.querySelectorAll(`.hud-intro-form *`);
	for(let i = 0; i < formElements.length; i++) {
		let ce = formElements[i];
		if(ce.type.toString().toLowerCase() == `text`) {
			if(ce.value != ``) ce.style.border == ``;
			else if(ce.value == ``) {
				ce.style.border = `1px solid #F00`;
				return introError(`You cannot have a blank username!`);
			}
		}
		if(ce.type.toString().toLowerCase() == `option`) {
			if(ce.checked != undefined) ce.style.border = ``;
			else if(!ce.checked == undefined) return introError(`Please select a server!`);
		}
	}
	playGame();
});
