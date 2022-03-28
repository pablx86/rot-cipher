const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('input-original');
const cipher = document.getElementById('cipher');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const modText = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charSinCode = wordArray[currentLetterIndex];
            spanChar.innerHTML = abc.includes(charSinCode) ?
                abc[(abc.indexOf(charSinCode) + parseInt(rango.value)) % abc.length] :
                charSinCode
            printChar(currentLetterIndex + 1, wordArray);
        });   
}

const animateChar = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = abc[Math.floor(Math.random() * abc.lenght)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    modText()
}

cipher.onsubmit = submit;