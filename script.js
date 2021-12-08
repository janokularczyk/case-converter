document.getElementById("upper-case").addEventListener("click", function upperCaseText() {
    let text = document.querySelector("textarea").value;
    text = text.toString().toUpperCase()
    document.querySelector("textarea").value = text;
});

document.getElementById("lower-case").addEventListener("click", function lowerCaseText() {
    let text = document.querySelector("textarea").value;
    text = text.toString().toLowerCase()
    document.querySelector("textarea").value = text;
});

document.getElementById("proper-case").addEventListener("click", function properCaseText() {
    let text = document.querySelector("textarea").value;
    let words = text.split(" ");
    text = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());
        text += words[i]
    }
    document.querySelector("textarea").value = words.join(" ");
});

document.getElementById("sentence-case").addEventListener("click", function sentenceCaseText() {
    let text = document.querySelector("textarea").value;
    let sentences = text.split(". ");
    text = "";
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i]
        sentences[i] = sentence.charAt(0).toUpperCase().concat(sentence.slice(1).toLowerCase());
        text += sentences[i];
    }
    document.querySelector("textarea").value = sentences.join(". ");
});

document.getElementById("save-text-file").addEventListener("click", function saveFile() {
    const filename = "text.txt";
    const text = document.querySelector("textarea").value;
    download(filename, text);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}