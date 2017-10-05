// jshint esnext: true

// get node list of all panels
const panels = document.querySelectorAll('.panel');

// loop over node list of panels and addEventListener
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// f() upon 'click' event
function toggleOpen() {
	this.classList.toggle('open');
}

// f() after transition is done to show top and bott text
function toggleActive(e) {
	// looking for 'flex-grow' to finish with transition, some browsers just call it 'flex'
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

