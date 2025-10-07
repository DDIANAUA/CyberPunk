class BackgroundRotator {
	currentImageIndex = 1;
	constructor(element, imageArray, delay = 5000) {
		this.rootElement = document.querySelector(element);
		this.imageArray = imageArray;
		this.delay = delay;
		this.myInterval();
	}
	changeBackGround() {
		this.rootElement.style.backgroundImage = `url('${this.imageArray[this.currentImageIndex]}')`;
		this.currentImageIndex = (this.currentImageIndex + 1) % this.imageArray.length;
	}
	myInterval() {
		setInterval(() => this.changeBackGround(), this.delay);
	}
}

const backgroundImages = ['./../images/hero/0.avif', './../images/hero/1.avif', './../images/hero/2.avif'];

new BackgroundRotator('#hero-section', backgroundImages, 3000);
