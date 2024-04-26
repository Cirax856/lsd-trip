var paused = false;

function handleKey(event) {
    if (event.keyCode === 32) {
        paused = !paused;

        const elements = [
            '.colors',
            '.flashbang',
            '.circle1',
            '.circle2',
            '.circle3',
            '.circle4',
            '.circle5',
            '.circle6',
            '.circle7',
            '.circle8',
            '.circle9',
            '.circle10',
            '.text-container > h1',
            '.back'
        ]

        for (let i = 0; i < elements.length; i++)
            document.querySelector(elements[i]).style.animationPlayState = paused ? 'paused' : 'running';
    } else if (event.keyCode === 27) {
        window.location.replace('./index.html');
    }
}

window.addEventListener('keydown', event => handleKey(event))