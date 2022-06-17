/* class Result {
    static whoWin(player, computer) {
        if (player === "batu" && computer === "gunting" || player === "gunting" && computer === "kertas" || player === "kertas" && computer === "batu") {
            return "win";
        } else if (player === "gunting" && computer === "batu" || player === "kertas" && computer === "gunting" || player === "batu" && computer === "kertas") {
            return "lose";
        } else {
            return "draw";
        }
    }
}

class Choice {
    constructor(player) {
        this.player = player;
        this.computer = this.drawComputer();
    }

    getPlayerChoice = () => this.player;
    getComputerChoice = () => this.computer;

    drawComputer() {
        const options = ["batu", "kertas", "gunting"];

        return options[Math.floor(Math.random() * options.length)];
    }
}

class Game {
    constructor() {
        this.choice = new Choice(e.target.dataset.option);

        const playerChoice = this.choice.getPlayerChoice()
        const computerChoice = this.choice.getComputerChoice();

        this.options = document.querySelectorAll('.button-click');
        this.options.forEach(options => options.addEventListener('click', this.startGame.bind(this)));
    }

    startGame(e) {
        console.log(this.options);
    }
}

const newGame = new Game(); */

function game(param) {
    const batuPlayer = document.getElementById("batu-player");
    const kertasPlayer = document.getElementById("kertas-player");
    const guntingPlayer = document.getElementById("gunting-player");
    
    const batuKomputer = document.getElementById("batu-komputer");
    const kertasKomputer = document.getElementById("kertas-komputer");
    const guntingKomputer = document.getElementById("gunting-komputer");

    const result = document.getElementById("result");

    let pilihanKomputer = Math.floor(Math.random() * 3);

    // console.log(pilihanKomputer);

    if (pilihanKomputer == 0) {
        pilihanKomputer = "batu";
        batuKomputer.classList.add("active");
        kertasKomputer.classList.remove("active");
        guntingKomputer.classList.remove("active");
    } else if (pilihanKomputer == 1) {
        pilihanKomputer = "kertas";
        batuKomputer.classList.remove("active");
        kertasKomputer.classList.add("active");
        guntingKomputer.classList.remove("active");
    } else {
        pilihanKomputer = "gunting";
        batuKomputer.classList.remove("active");
        kertasKomputer.classList.remove("active");
        guntingKomputer.classList.add("active");
    }

    // console.log(pilihanKomputer);

    if (param === 'batu') {    
        batuPlayer.classList.add("active");
        kertasPlayer.classList.remove("active");
        guntingPlayer.classList.remove("active");

        if (param === pilihanKomputer) {
            return result.innerHTML = '<span class="result-draw">DRAW</span>';
        }

        if(pilihanKomputer === "gunting") {
            return result.innerHTML = '<span class="result-player">PLAYER 1 WINS</span>';
        } else {
            return result.innerHTML = '<span class="result-com">COM WINS</span>';
        }
    }
    
    if (param === 'kertas') {
        batuPlayer.classList.remove("active");
        kertasPlayer.classList.add("active");
        guntingPlayer.classList.remove("active");

        if (param === pilihanKomputer) {
            return result.innerHTML = '<span class="result-draw">DRAW</span>';
        }

        if (pilihanKomputer === 'gunting') {
            return result.innerHTML = '<span class="result-com">COM WINS</span>';
        } else {
            return result.innerHTML = '<span class="result-player">PLAYER 1 WINS</span>';
        }
    }
    
    if (param === 'gunting') {
        batuPlayer.classList.remove("active");
        kertasPlayer.classList.remove("active");
        guntingPlayer.classList.add("active");

        if (param === pilihanKomputer) {
            return result.innerHTML = '<span class="result-draw">DRAW</span>';
        }

        if (pilihanKomputer === 'batu') {
            return result.innerHTML = '<span class="result-com">COM WINS</span>';
        } else {
            return result.innerHTML = '<span class="result-player">PLAYER 1 WINS</span>';
        }
    }
}
