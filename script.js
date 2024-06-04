const questions = [
    { question: "¿Cuál es la capital de Francia?", answers: [{ text: "A. París", correct: true }, { text: "B. Londres", correct: false }, { text: "C. Roma", correct: false }] },
    { question: "¿Cuál es el río más largo del mundo?", answers: [{ text: "A. Amazonas", correct: true }, { text: "B. Nilo", correct: false }, { text: "C. Yangtsé", correct: false }] },
    { question: "¿Quién escribió 'Cien años de soledad'?", answers: [{ text: "A. Gabriel García Márquez", correct: true }, { text: "B. Mario Vargas Llosa", correct: false }, { text: "C. Julio Cortázar", correct: false }] },
    { question: "¿Cuál es el planeta más cercano al sol?", answers: [{ text: "A. Mercurio", correct: true }, { text: "B. Venus", correct: false }, { text: "C. Marte", correct: false }] },
    { question: "¿En qué año comenzó la Segunda Guerra Mundial?", answers: [{ text: "A. 1939", correct: true }, { text: "B. 1941", correct: false }, { text: "C. 1937", correct: false }] },
    { question: "¿Cuál es el elemento químico con el símbolo O?", answers: [{ text: "A. Oxígeno", correct: true }, { text: "B. Oro", correct: false }, { text: "C. Osmio", correct: false }] },
    { question: "¿Qué idioma se habla en Brasil?", answers: [{ text: "A. Portugués", correct: true }, { text: "B. Español", correct: false }, { text: "C. Francés", correct: false }] },
    { question: "¿Cuál es el animal terrestre más rápido?", answers: [{ text: "A. Guepardo", correct: true }, { text: "B. León", correct: false }, { text: "C. Tigre", correct: false }] },
    { question: "¿Qué país tiene la mayor población del mundo?", answers: [{ text: "A. China", correct: true }, { text: "B. India", correct: false }, { text: "C. Estados Unidos", correct: false }] },
    { question: "¿Cuál es la montaña más alta del mundo?", answers: [{ text: "A. Everest", correct: true }, { text: "B. K2", correct: false }, { text: "C. Kangchenjunga", correct: false }] },
    // Añadir 90+ preguntas más siguiendo el mismo formato...
    { question: "¿Cuál es la capital de Japón?", answers: [{ text: "A. Tokio", correct: true }, { text: "B. Kioto", correct: false }, { text: "C. Osaka", correct: false }] },
    { question: "¿Qué instrumento mide la presión atmosférica?", answers: [{ text: "A. Barómetro", correct: true }, { text: "B. Termómetro", correct: false }, { text: "C. Anemómetro", correct: false }] },
    { question: "¿En qué año se llegó a la Luna?", answers: [{ text: "A. 1969", correct: true }, { text: "B. 1971", correct: false }, { text: "C. 1965", correct: false }] },
    { question: "¿Quién pintó la Mona Lisa?", answers: [{ text: "A. Leonardo da Vinci", correct: true }, { text: "B. Miguel Ángel", correct: false }, { text: "C. Rafael", correct: false }] },
    { question: "¿Qué país es famoso por la torre Eiffel?", answers: [{ text: "A. Francia", correct: true }, { text: "B. Italia", correct: false }, { text: "C. España", correct: false }] },
    { question: "¿Cuál es el océano más grande del mundo?", answers: [{ text: "A. Pacífico", correct: true }, { text: "B. Atlántico", correct: false }, { text: "C. Índico", correct: false }] },
    { question: "¿Qué invento es atribuido a los hermanos Wright?", answers: [{ text: "A. El avión", correct: true }, { text: "B. El automóvil", correct: false }, { text: "C. El teléfono", correct: false }] },
    { question: "¿Cuál es el país más grande del mundo por área?", answers: [{ text: "A. Rusia", correct: true }, { text: "B. Canadá", correct: false }, { text: "C. China", correct: false }] },
    { question: "¿Quién escribió 'Don Quijote de la Mancha'?", answers: [{ text: "A. Miguel de Cervantes", correct: true }, { text: "B. Federico García Lorca", correct: false }, { text: "C. Gabriel García Márquez", correct: false }] },
    { question: "¿Qué planeta es conocido como el planeta rojo?", answers: [{ text: "A. Marte", correct: true }, { text: "B. Júpiter", correct: false }, { text: "C. Saturno", correct: false }] }
    // Más preguntas hasta tener más de 100...
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    shuffleArray(question.answers).forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
  
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        setTimeout(() => {
            nextQuestion();
        }, 1000); // Espera 1 segundo antes de mostrar la siguiente pregunta
    } else {
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        startGame();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

nextButton.addEventListener('click', nextQuestion);

 
startGame();
