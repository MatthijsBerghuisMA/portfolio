const Content = document.querySelectorAll(".Content");


for (var i = 0; i < Content.length; i++) {
	let Node = Content[i];
	Node.parentNode.removeChild(Node);
}

const Buttons = document.querySelectorAll(".ButtonM");
const ButtonsArray = [];

let BackgroundM = document.createElement('div');
BackgroundM.className = 'm-Background';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let closeButton = document.createElement('button');
closeButton.className = 'test';
closeButton.innerHTML = '&#x00D7;';

const add = (event) => {
	const Time = ButtonsArray.indexOf(event.target);
	console.log(Time);
	modaal.appendChild(closeButton);
	modaal.appendChild(Content[Time]);
	BackgroundM.appendChild(modaal);
	document.body.appendChild(BackgroundM);
}

const closeM = () => {
	modaal.innerHTML = '';
	BackgroundM.innerHTML = '';
	document.body.removeChild(BackgroundM);
}

closeButton.addEventListener('click', closeM);

for (let i = 0; i < Buttons.length; i++) {
	ButtonsArray.push(Buttons[i]);
	Buttons[i].addEventListener('click', add);
}
