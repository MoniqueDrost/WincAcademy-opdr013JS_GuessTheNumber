
const startGame = function() {
    let person = prompt("Welkom! Wat is je naam?", "Anoniem");
    if (person != null) { 
      greeting = alert ("Hey " + person + "! Welkom bij Guess the number, speel je mee?");
    }
    console.log(greeting);
    }
    
    
        let x = Math.floor(Math.random() * 25) + 1;
        let turns = 5;
        let hint = 'Ik heb een getal in geachten tussen 0 en 25, welk getal denk je dat dit is?';
    
        while (turns > 0) {
            let guess = prompt(hint + ' Je hebt nog ' + turns + ' pogingen.');
            if (!guess) break;
            guess = Number(guess);
            if (guess == x) {
                document.getElementById('gelukt').innerText = 'GEFELICITEERD ' + person + ', je hebt het getal geraden!';
                turns = 0;
            } else {
                hint = 'Helaas,';
                if (guess < x) hint += ' te laag!';
                if (guess > x) hint += ' te hoog!';
                turns = turns - 1;
            }
        }
        alert('Het geheime getal was ' + x + '.');