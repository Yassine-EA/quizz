class Game {
	welcomeScreen() {
		const body = document.body;
		const main = document.createElement("main");
		const h1 = document.createElement("h1");

		h1.textContent = "Bienvenue dans le Quiz Challenge";
		h1.classList.add("text-gradient");
		main.appendChild(h1);

		const slogan = document.createElement("p");
		const start = document.createElement("div");
		const button = document.createElement("button");

		slogan.textContent =
			'"Prépare-toi à tester tes connaissances dans une série de questions captivantes. Que tu sois un expert ou un débutant curieux, chaque bonne réponse te rapprochera de la victoire. Alors, es-tu prêt à relever le défi ?"';
		slogan.classList.add("text-gradient");

		button.textContent = "Jouer";
		button.classList.add("button-start");

    button.addEventListener("click", () => {
      this.playerName();
    });

		main.appendChild(slogan);
		start.appendChild(button);
		main.appendChild(start);

		body.appendChild(main);
	}

	playerName() {
		const main = document.querySelector("main");
		this.clearScreen(main);

		const form = document.createElement("form");
		const label = document.createElement("label");
		const input = document.createElement("input");
		const button = document.createElement("button");
		const alert = document.createElement("small");

		label.textContent = "Entrez votre pseudo : ";
		input.type = "text";
		input.id = "playerName";
		input.placeholder = "Pseudo";
		button.type = "submit";
		button.textContent = "S'inscrire";
		button.classList.add("button-start");

		button.addEventListener("click", (e) => {
			e.preventDefault();

			if (!input.value) {
				alert.textContent = "Veuillez entrer votre pseudo.";
				alert.classList.add("error");
				form.appendChild(alert);
				return;
			}

			if (input.value.trim().length < 3) {
				alert.textContent =
					"Veuillez entrer votre pseudo. minimum 3 caractères.";
				alert.classList.add("error");
				form.appendChild(alert);
				return;
			}

			const playerName = document
				.getElementById("playerName")
				.value.trim();
			localStorage.setItem("playerName", playerName);

      this.playStart();
		});

		form.appendChild(label);
		form.appendChild(input);
		form.appendChild(alert);
		form.appendChild(button);
		main.appendChild(form);
	}

  playStart(){
    const questionItem = {
		question: "Quel animal miaule ?",
		answers: ["Chien", "Chat", "Vache", "Lapin"],
		correctAnswer: "Chat",
		level: 1,
		category: "Sciences",
		icon: "fa-solid fa-microscope",
	};

    const main = document.querySelector("main");
    this.clearScreen(main);

    const h1 = document.createElement("h1");
    const startBtn = document.createElement("button");
    h1.textContent = "Bienvenue " + localStorage.getItem("playerName");
    h1.classList.add("text-gradient");

    startBtn.textContent = "Commençons !";
    startBtn.classList.add("button-start");
    startBtn.addEventListener("click", () => {
      this.levelRender(questionItem);
    });

    main.appendChild(h1);
    main.appendChild(startBtn);


  }

  levelRender(question) {

    const main = document.querySelector("main");
    this.clearScreen(main);

		const screenHeader = document.createElement("div");
    screenHeader.classList.add("question-header");

		const screenTitle = document.createElement("h2");
    screenTitle.textContent = `Question N° ${question.level}`;
    screenTitle.classList.add("text-gradient");

		const screenCategory = document.createElement("p");
    screenCategory.textContent = question.category;
    screenCategory.classList.add("text-gradient");

		const screenIcon = document.createElement("i");
    screenIcon.className = question.icon;
    screenIcon.classList.add("text-gradient");

    screenCategory.appendChild(screenIcon);
    screenHeader.appendChild(screenTitle);
    screenHeader.appendChild(screenCategory);
    
		const screenMain = document.createElement("div");
    screenMain.classList.add("question-main");
		const screenContent = document.createElement("p");
		screenContent.textContent = question.content;
    
		const screenAnswer = document.createElement("div");
    screenAnswer.classList.add("question-answers");
    
    
		question.answers.forEach((answer) => {
      const answerButton = document.createElement("button");
			answerButton.textContent = answer;
      answerButton.classList.add("answer");
			screenAnswer.appendChild(answerButton);
		});
    screenMain.appendChild(screenContent);
    screenMain.appendChild(screenAnswer);
    main.appendChild(screenHeader);
    main.appendChild(screenMain);
    main.appendChild(screenAnswer);
	}

	header() {
		const body = document.body;

		const header = document.createElement("header");

		body.appendChild(header);
	}

	footer() {
		const body = document.body;
		const footer = document.createElement("footer");
		const footerText = document.createElement("p");

		footerText.textContent = "© 2023 Yassine EL ABOUBI";
		footer.appendChild(footerText);
		body.appendChild(footer);
	}

	clearScreen(element) {
		element.innerHTML = "";
	}

  
}

export default Game;
