import './scss/index.scss';


const templateSound = [
    {
        name: 'sound1',
        id: 'sound1',
        src: '/sounds/BlueFox.mp3'
    },
    {
        name: 'sound2',
        id: 'sound2',
        src: 'assets/sounds/sound2.mp3'
    },
    {
        name: 'sound3',
        id: 'sound3',
        src: 'assets/sounds/sound3.mp3'
    },
    {
        name: 'sound4',
        id: 'sound4',
        src: 'assets/sounds/sound4.mp3'
    },
    {
        name: 'sound5',
        id: 'sound5',
        src: 'assets/sounds/sound5.mp3'
    },
]

const playSound = () => {
    let audio: any = new Audio();
    const playButtons: any = document.querySelectorAll('#play');
    playButtons.forEach((playButton: any) => {
        playButton.addEventListener('click', () => {

            const soundId: any = playButton.name;
            const sound: any = templateSound.find(sound => sound.id === soundId);
            audio.src = sound.src;
            audio.play();
        })

        playButton.addEventListener('click', () => {
            playButton.classList.remove('active');
            playButton.nextElementSibling.classList.add('active');
        })
    })

    const stopButtons: any = document.querySelectorAll('#stop');
    stopButtons.forEach((stopButton: any) => {
        stopButton.addEventListener('click', () => {
            audio.pause();
            audio.currentTime = 0;
        })

        stopButton.addEventListener('click', () => {
            stopButton.classList.remove('active');
            stopButton.previousElementSibling.classList.add('active');
        })
    })
}
playSound();


// Path: src\scss\index.scss