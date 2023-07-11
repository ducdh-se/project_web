(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (let key in names) {
        if (names[key].charAt(0).toLowerCase() == 'j') {
            byeSpeaker.speak(names[key]);
        } else {
            helloSpeaker.speak(names[key]);
        }
    }
})();