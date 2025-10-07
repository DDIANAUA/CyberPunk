import BackgroundRotator from './BackgroundRotator.js';

const backgroundImages = ['./../images/hero/0.avif', './../images/hero/1.avif', './../images/hero/2.avif'];

new BackgroundRotator('#hero-section', backgroundImages, 3000);
