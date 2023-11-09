function changeText() {
    // this should change the displlay text
    let textList = ['text1','text2','text3','text4','text5'];
    let randomNumber = getRandomNumber(0, textList.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textList[randomNumber];
}

function getRandomNumber(min,max) {
    // generate a random number between a range
    return Math.floor(Math.random()*(max-min + 1)+min);
}