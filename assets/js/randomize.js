const fonts = [
    'Roboto, sans-serif',
    'Montserrat, sans-serif',
    'Lobster, cursive',
    'Playfair Display, serif',
    'Oswald, sans-serif',
    'Merriweather, serif',
    'Raleway, sans-serif',
    'Dancing Script, cursive',
    'Source Sans 3, sans-serif',
    'Cinzel, serif',
    'Abril Fatface, serif',
    'Poppins, sans-serif',
    'Fira Sans, sans-serif',
    'Teko, sans-serif',
    'Cormorant Garamond, serif'
];

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function setRandomFont() {
    const selectedFont = getRandomItem(fonts);
    const nameElemennt = document.querySelector('.name');
    nameElemennt.style.fontFamily = selectedFont;
}

window.addEventListener('DOMContentLoaded', () => {
    setRandomFont();

    const nameElement = document.querySelector('.name');
    nameElement.addEventListener('click', () => {
        setRandomFont();
    });
});