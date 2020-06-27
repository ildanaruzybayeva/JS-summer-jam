window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const btnEng = document.querySelector('.start-en')
const btnRus = document.querySelector('.start-ru')
const btnEnd = document.querySelector('.end')

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

const handleStart = (e) => {
    recognition.start();
    recognition.lang = e.target.id
    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        p.textContent = transcript.replace(/poop|poo|shit|dump/gi, '💩')
            .replace(/heart|love|nice/gi, '❤️ ')

        // if (e.results[0].isFinal) {
        //     p = document.createElement('p')
        //     words.appendChild(p);
        // }
    });
    recognition.addEventListener('end', recognition.stop);
}


const handleStop = (e) => {
    recognition.stop();
    console.log('Speech recognition has stopped.');
}

btnEnd.addEventListener('click', handleStop)
btnEng.addEventListener('click', handleStart)
btnRus.addEventListener('click', handleStart)



