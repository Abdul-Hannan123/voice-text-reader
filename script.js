let button = document.querySelector("button");
let textArea = document.querySelector("textarea");
// This creates an empty speech container
let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

// This code gets all available voices from the browser and Puts them into a dropdown (<select>)
// Browsers load voices slowly So this event runs when voices are ready Without this, voice list may be empty.
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // This says the browser that Give me all available voices

    speech.voice = voices[0]; // Selects the first voice as defaul

    voices.forEach((voice, i) =>
        (voiceSelect.options[i] = new Option(voice.name, i))
    );
};
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});




button.addEventListener("click", () => {
    // it stores textarea value in speech.text
    speech.text = textArea.value;
    // it tells the browser that read the text aloud
    window.speechSynthesis.speak(speech);
});