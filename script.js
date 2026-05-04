const topicsData = {
    mathematics: {
        title: "Matemática",
        color: "var(--math)",
        items: [
            { 
                id: "time", name: "Medidas de Tempo", icon: "clock", 
                concept: "Medidas de tempo!",
                details: [
                    { icon: "clock", label: "Horas", voice: "Usamos as horas para marcar os compromissos." },
                    { icon: "hourglass", label: "Minutos", voice: "Sessenta segundos formam um minuto." },
                    { icon: "calendar", label: "Dias", voice: "O calendário mostra os dias e os meses." },
                    { icon: "clock", label: "Segundos", voice: "O ponteiro fino marca os segundos." },
                    { icon: "calendar", label: "Anos", voice: "Doze meses formam um ano inteiro." }
                ],
                question: {
                    text: "{name}, quantos minutos tem uma hora inteira?",
                    options: ["30 minutos", "60 minutos", "10 minutos"],
                    correct: 1
                }
            },
            { 
                id: "triangles", name: "Triângulos e Quadriláteros", icon: "triangle", 
                concept: "Geometria!",
                details: [
                    { draw: "equilateral", label: "Equilátero", voice: "O triângulo equilátero tem os três lados iguaizinhos!" },
                    { draw: "isosceles", label: "Isósceles", voice: "O triângulo isósceles tem dois lados iguais." },
                    { draw: "scalene", label: "Escaleno", voice: "O triângulo escaleno tem todos os lados diferentes." },
                    { draw: "square", label: "Quadrado", voice: "O quadrado tem quatro lados e quatro cantos iguais." },
                    { draw: "rectangle", label: "Retângulo", voice: "O retângulo é um quadrilátero com dois lados compridos e dois curtos." }
                ],
                question: {
                    text: "{name}, quantos lados tem um triângulo?",
                    options: ["4 lados", "3 lados", "5 lados"],
                    correct: 1
                }
            },
            { 
                id: "angles", name: "Ângulos", icon: "pencil-ruler", 
                concept: "Ângulos!",
                details: [
                    { draw: "agudo", label: "Agudo", voice: "O ângulo agudo é fechadinho, menor que noventa graus." },
                    { draw: "reto", label: "Reto", voice: "O ângulo reto forma um canto perfeito de noventa graus." },
                    { draw: "obtuso", label: "Obtuso", voice: "O ângulo obtuso é bem aberto, maior que noventa graus." }
                ],
                question: {
                    text: "{name}, qual ângulo forma um canto perfeito como o de uma mesa?",
                    options: ["Ângulo Agudo", "Ângulo Obtuso", "Ângulo Reto"],
                    correct: 2
                }
            },
            { 
                id: "cartesian", name: "Plano Cartesiano", icon: "grid", 
                concept: "Plano Cartesiano!",
                details: [
                    { draw: "x-axis", label: "Linha X", voice: "A linha X é o eixo horizontal, deitada no gráfico." },
                    { draw: "y-axis", label: "Linha Y", voice: "A linha Y é o eixo vertical, em pé no gráfico." },
                    { draw: "point", label: "Ponto (X, Y)", voice: "Onde o X e o Y se cruzam, encontramos um ponto exato." }
                ],
                question: {
                    text: "{name}, qual o nome da linha deitada no plano cartesiano?",
                    options: ["Linha Y", "Linha X", "Linha Z"],
                    correct: 1
                }
            },
            { 
                id: "tabuada", name: "Tabuada do 6 ao 9", icon: "hash", 
                concept: "Tabuada!",
                details: [
                    { text: "6x6", label: "36", voice: "Seis vezes seis é igual a trinta e seis.", color: "orange" },
                    { text: "6x7", label: "42", voice: "Seis vezes sete é igual a quarenta e dois.", color: "orange" },
                    { text: "7x8", label: "56", voice: "Sete vezes oito é igual a cinquenta e seis.", color: "orange" },
                    { text: "8x9", label: "72", voice: "Oito vezes nove é igual a setenta e dois.", color: "orange" }
                ],
                question: {
                    text: "{name}, quanto é 6 vezes 7?",
                    options: ["42", "40", "36"],
                    correct: 0
                }
            },
            { 
                id: "operations", name: "Operações Naturais", icon: "calculator", 
                concept: "Operações!",
                details: [
                    { text: "+", label: "Adição", voice: "Na adição, nós juntamos as quantidades.", color: "orange" },
                    { text: "-", label: "Subtração", voice: "Na subtração, nós tiramos uma quantidade de outra.", color: "orange" },
                    { text: "x", label: "Multiplicação", voice: "A multiplicação é somar o mesmo número várias vezes.", color: "orange" },
                    { text: "÷", label: "Divisão", voice: "Na divisão, nós repartimos o todo em partes iguais.", color: "orange" }
                ],
                question: {
                    text: "{name}, qual sinal usamos para somar e juntar coisas?",
                    options: ["Sinal de -", "Sinal de +", "Sinal de x"],
                    correct: 1
                }
            },
            { 
                id: "expressions", name: "Expressões Numéricas", icon: "list-ordered", 
                concept: "Expressões!",
                details: [
                    { text: "( )", label: "Prioridade 1", voice: "Primeiro, resolvemos tudo o que está dentro dos parênteses.", color: "orange" },
                    { text: "x ÷", label: "Prioridade 2", voice: "Depois, fazemos as multiplicações e divisões.", color: "orange" },
                    { text: "+ -", label: "Prioridade 3", voice: "Por fim, fazemos as somas e subtrações.", color: "orange" }
                ],
                question: {
                    text: "{name}, o que resolvemos primeiro em uma expressão?",
                    options: ["Os parênteses", "A conta de mais", "A conta de menos"],
                    correct: 0
                }
            },
            { 
                id: "integers", name: "Números Inteiros", icon: "move-horizontal", 
                concept: "Números Inteiros!",
                details: [
                    { draw: "number-line-neg", label: "Negativos", voice: "Os números negativos ficam à esquerda do zero.", color: "orange" },
                    { draw: "number-line-zero", label: "Origem", voice: "O zero é o ponto central da nossa reta numérica.", color: "orange" },
                    { draw: "number-line-pos", label: "Positivos", voice: "Os números positivos ficam à direita do zero.", color: "orange" }
                ],
                question: {
                    text: "{name}, de qual lado do zero ficam os números negativos?",
                    options: ["Direito", "Esquerdo", "Em cima"],
                    correct: 1
                }
            }
        ]
    },
    portuguese: {
        title: "Português",
        color: "var(--portuguese)",
        items: [
            { 
                id: "morphology", name: "Revisão Morfológica", icon: "puzzle", 
                concept: "Morfologia!",
                details: [
                    { icon: "puzzle", label: "Raiz", voice: "O radical é a parte da palavra que carrega o significado principal." },
                    { icon: "type", label: "Prefixo", voice: "O prefixo é o pedacinho que vem antes da palavra." },
                    { icon: "settings", label: "Sufixo", voice: "O sufixo é o pedacinho que colocamos no final da palavra." }
                ],
                question: {
                    text: "{name}, como chamamos o pedacinho que vem antes da palavra?",
                    options: ["Sufixo", "Prefixo", "Raiz"],
                    correct: 1
                }
            },
            { 
                id: "noun", name: "Estudo do Substantivo", icon: "package", 
                concept: "Substantivo!",
                details: [
                    { icon: "home", label: "Lugar", voice: "Casa e escola são substantivos que indicam lugares." },
                    { icon: "user", label: "Pessoa", voice: "Menino, menina e professor são substantivos." },
                    { icon: "dog", label: "Animal", voice: "Cachorro, gato e passarinho são nomes de animais." }
                ],
                question: {
                    text: "{name}, qual destas palavras é um substantivo que dá nome a um animal?",
                    options: ["Cachorro", "Pular", "Feliz"],
                    correct: 0
                }
            },
            { 
                id: "adjective", name: "Estudo do Adjetivo", icon: "sparkles", 
                concept: "Adjetivo!",
                details: [
                    { icon: "smile", label: "Estado", voice: "Feliz e triste são qualidades, ou seja, adjetivos." },
                    { icon: "star", label: "Qualidade", voice: "Bom, grande e brilhante são adjetivos." }
                ],
                question: {
                    text: "{name}, se eu digo que o dia está 'Bonito', a palavra Bonito é um...",
                    options: ["Verbo", "Substantivo", "Adjetivo"],
                    correct: 2
                }
            },
            { 
                id: "article", name: "Estudo do Artigo", icon: "tag", 
                concept: "Artigo!",
                details: [
                    { text: "O / A", label: "Definido", voice: "O artigo definido indica algo específico, como 'O Menino'.", color: "blue" },
                    { text: "Um / Uma", label: "Indefinido", voice: "O artigo indefinido indica algo qualquer, como 'Um Gato'.", color: "blue" }
                ],
                question: {
                    text: "{name}, qual artigo usamos para falar de 'O Menino'?",
                    options: ["Um", "O", "Uns"],
                    correct: 1
                }
            },
            { 
                id: "pronoun", name: "Estudo do Pronome", icon: "users", 
                concept: "Pronome!",
                details: [
                    { text: "Eu", label: "Eu", voice: "Eu é o pronome que uso para falar de mim mesmo.", color: "blue" },
                    { text: "Você", label: "Você", voice: "Você é o pronome para falar com o outro.", color: "blue" }
                ],
                question: {
                    text: "{name}, qual pronome usamos para falar de nós mesmos?",
                    options: ["Ele", "Você", "Eu"],
                    correct: 2
                }
            },
            { 
                id: "images", name: "Leitura de Imagens", icon: "image", 
                concept: "Imagens!",
                details: [
                    { icon: "eye", label: "Observar", voice: "Primeiro, olhamos com atenção para todos os detalhes." },
                    { icon: "image", label: "Cenário", voice: "Onde a cena acontece nos ajuda a entender a história." }
                ],
                question: {
                    text: "{name}, o que devemos fazer primeiro para entender uma imagem?",
                    options: ["Correr", "Observar os detalhes", "Fechar os olhos"],
                    correct: 1
                }
            },
            { 
                id: "characters", name: "Personagens e Ações", icon: "user-check", 
                concept: "Personagens!",
                details: [
                    { icon: "user", label: "Quem?", voice: "O personagem é quem vive a aventura na nossa história." },
                    { icon: "play", label: "O que faz?", voice: "A ação é o que o personagem está fazendo no momento." }
                ],
                question: {
                    text: "{name}, quem é a pessoa que vive a aventura em uma história?",
                    options: ["O Personagem", "O Cenário", "O Título"],
                    correct: 0
                }
            },
            { 
                id: "drawing", name: "Expressão por Desenho", icon: "palette", 
                concept: "Arte!",
                details: [
                    { icon: "brush", label: "Pintar", voice: "Pintar com cores alegres ajuda a mostrar sentimentos." },
                    { icon: "pencil", label: "Desenhar", voice: "O desenho dá forma à nossa imaginação." }
                ],
                question: {
                    text: "{name}, qual ferramenta usamos para dar cor aos nossos desenhos?",
                    options: ["Lápis de escrever", "Pincel e tintas", "Borracha"],
                    correct: 1
                }
            },
            { 
                id: "narratives", name: "Narrativas Visuais", icon: "film", 
                concept: "Histórias!",
                details: [
                    { emoji: "🌱", label: "Começo", voice: "No começo da história, algo está apenas começando a surgir." },
                    { emoji: "🌿", label: "Meio", voice: "No meio da história, os fatos estão se desenvolvendo." },
                    { emoji: "🌸", label: "Fim", voice: "No fim da história, temos a conclusão da nossa aventura." }
                ],
                question: {
                    text: "{name}, qual parte da história vem depois do começo?",
                    options: ["O Fim", "O Meio", "O Título"],
                    correct: 1
                }
            }
        ]
    }
};

let currentSubject = null;
let currentTopic = null;
let userName = '';
let score = 0;
let transformationCount = 0;

// Game Logic
function startGame() {
    const input = document.getElementById('userNameInput');
    if (input.value.trim() === "") {
        speak("Por favor, me diga o seu nome!");
        return;
    }
    userName = input.value.trim();
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('mainScreen').classList.add('active');
    speak(`Olá ${userName}! Estou muito feliz em jogar com você. Escolha uma disciplina para começar!`);
}

function selectTopic(topic) {
    currentTopic = topic;
    transformationCount = 0;
    gameTopicTitle.innerText = topic.name;
    showScreen(gameScreen);
    resetGame();
    setupToolbox(topic);
}

// Speech Synthesis
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
    }
}

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const mainScreen = document.getElementById('mainScreen');
const topicsScreen = document.getElementById('topicsScreen');
const gameScreen = document.getElementById('gameScreen');
const backBtn = document.getElementById('backBtn');
const topicsGrid = document.getElementById('topicsGrid');
const subjectTitle = document.getElementById('subjectTitle');
const gameTopicTitle = document.getElementById('gameTopicTitle');
const characterStage = document.getElementById('characterStage');
const toolbox = document.getElementById('toolbox');
const conceptCard = document.getElementById('conceptCard');
const cardTitle = document.getElementById('cardTitle');
const diagramContainer = document.getElementById('diagramContainer');
const scoreValue = document.getElementById('scoreValue');

// Navigation
function showScreen(screen) {
    [loginScreen, mainScreen, topicsScreen, gameScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
    
    if (screen === mainScreen || screen === loginScreen) backBtn.style.display = 'none';
    else backBtn.style.display = 'flex';
}

backBtn.addEventListener('click', () => {
    if (gameScreen.classList.contains('active')) showScreen(topicsScreen);
    else if (topicsScreen.classList.contains('active')) showScreen(mainScreen);
});

function showTopics(subject) {
    currentSubject = subject;
    const data = topicsData[subject];
    subjectTitle.innerText = data.title;
    subjectTitle.style.color = data.color;
    speak(`Legal! Escolha um tópico de ${data.title}.`);
    
    topicsGrid.innerHTML = '';
    data.items.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.innerText = item.name;
        btn.onclick = () => selectTopic(item);
        topicsGrid.appendChild(btn);
    });
    showScreen(topicsScreen);
}

function resetGame() {
    const slots = document.querySelectorAll('.character-slot');
    slots.forEach(slot => {
        const img = slot.querySelector('img');
        img.src = 'assets/base.png';
        slot.classList.remove('anim-bounce');
    });
}

function setupToolbox(topic) {
    toolbox.innerHTML = '';
    for (let i = 1; i <= 7; i++) {
        const item = document.createElement('div');
        item.className = 'tool-item';
        item.draggable = true;
        item.dataset.toolId = i;
        const img = document.createElement('img');
        img.src = currentSubject === 'mathematics' ? 'assets/math.png' : 'assets/portuguese.png';
        item.appendChild(img);
        const label = document.createElement('div');
        label.className = 'tool-label';
        label.innerText = topic.name;
        item.appendChild(label);
        item.addEventListener('dragstart', handleDragStart);
        toolbox.appendChild(item);
    }
}

// Drag and Drop
let draggedTool = null;
function handleDragStart(e) {
    draggedTool = e.target.closest('.tool-item');
    e.dataTransfer.setData('text/plain', draggedTool.dataset.toolId);
}

const slotsElements = document.querySelectorAll('.character-slot');
slotsElements.forEach(slot => {
    slot.addEventListener('dragover', (e) => { e.preventDefault(); slot.classList.add('drag-over'); });
    slot.addEventListener('dragleave', () => { slot.classList.remove('drag-over'); });
    slot.addEventListener('drop', (e) => {
        e.preventDefault();
        slot.classList.remove('drag-over');
        applyToolToCharacter(slot);
    });
});

function applyToolToCharacter(slot) {
    if (slot.classList.contains('anim-bounce')) return; // Already transformed

    const img = slot.querySelector('img');
    img.src = currentSubject === 'mathematics' ? 'assets/math.png' : 'assets/portuguese.png';
    slot.classList.add('anim-bounce');
    
    transformationCount++;
    
    if (transformationCount < 7) {
        showConceptCard(currentTopic);
    } else {
        showQuizCard(currentTopic);
    }
}

function showConceptCard(topic) {
    cardTitle.innerText = topic.name;
    diagramContainer.innerHTML = '';
    
    if (topic.details && topic.details.length > 0) {
        const randomIndex = Math.floor(Math.random() * topic.details.length);
        const detail = topic.details[randomIndex];
        
        const item = document.createElement('div');
        item.className = 'diagram-item';
        
        if (detail.draw) {
            const drawContainer = document.createElement('div');
            if (detail.draw.includes('equilateral') || detail.draw.includes('isosceles') || detail.draw.includes('scalene')) {
                drawContainer.className = `triangle-draw draw-${detail.draw}`;
            } else if (detail.draw.includes('square') || detail.draw.includes('rectangle')) {
                drawContainer.className = `draw-${detail.draw}`;
            } else if (detail.draw.includes('axis') || detail.draw === 'point') {
                drawContainer.className = `cartesian-draw draw-${detail.draw}`;
                if (detail.draw === 'x-axis') drawContainer.innerHTML = '<span class="axis-label label-x">X</span>';
                if (detail.draw === 'y-axis') drawContainer.innerHTML = '<span class="axis-label label-y">Y</span>';
                if (detail.draw === 'point') drawContainer.innerHTML = '<span class="axis-label label-x">X</span><span class="axis-label label-y">Y</span><div class="point-dot"></div>';
            } else if (detail.draw.includes('number-line')) {
                drawContainer.className = 'number-line';
                for (let i = 0; i <= 4; i++) {
                    const tick = document.createElement('div');
                    tick.className = 'tick-mark';
                    tick.style.left = `${i * 25}%`;
                    const label = document.createElement('div');
                    label.className = 'tick-label';
                    let val = i - 2;
                    label.innerText = val;
                    if (detail.draw === 'number-line-neg' && val < 0) tick.style.background = 'var(--primary)';
                    if (detail.draw === 'number-line-zero' && val === 0) tick.style.background = 'var(--primary)';
                    if (detail.draw === 'number-line-pos' && val > 0) tick.style.background = 'var(--primary)';
                    tick.appendChild(label);
                    drawContainer.appendChild(tick);
                }
            } else {
                drawContainer.className = `angle-draw draw-${detail.draw}`;
                if (detail.draw === 'reto') {
                    const symbol = document.createElement('div');
                    symbol.className = 'draw-reto-symbol';
                    drawContainer.appendChild(symbol);
                }
            }
            item.appendChild(drawContainer);
        } else if (detail.text) {
            const textBlock = document.createElement('div');
            textBlock.className = `text-icon-block bg-${detail.color}`;
            textBlock.innerText = detail.text;
            item.appendChild(textBlock);
        } else if (detail.emoji) {
            const emojiBlock = document.createElement('div');
            emojiBlock.className = 'narrative-visual';
            emojiBlock.innerText = detail.emoji;
            item.appendChild(emojiBlock);
        } else {
            const icon = document.createElement('i');
            icon.setAttribute('data-lucide', detail.icon);
            item.appendChild(icon);
        }
        
        const label = document.createElement('span');
        label.className = 'diagram-label';
        label.innerText = detail.label;
        item.appendChild(label);
        
        diagramContainer.appendChild(item);
        
        // Final action: Speak and show
        conceptCard.classList.add('active');
        lucide.createIcons();
        
        const congrats = [`${userName}, olha que legal!`, `Muito bem ${userName}!`, `Veja só ${userName}!`];
        const randomCongrats = congrats[Math.floor(Math.random() * congrats.length)];
        
        speak(`${randomCongrats} ${detail.voice || topic.concept}`);
    }
}

function showQuizCard(topic) {
    const quiz = topic.question;
    cardTitle.innerText = "Desafio Final!";
    diagramContainer.innerHTML = '';
    
    const questionText = document.createElement('p');
    questionText.style.fontSize = '1.8rem';
    questionText.style.fontWeight = '600';
    questionText.style.marginBottom = '2rem';
    questionText.innerText = quiz.text.replace('{name}', userName);
    diagramContainer.appendChild(questionText);
    
    const optionsContainer = document.createElement('div');
    optionsContainer.style.display = 'flex';
    optionsContainer.style.flexDirection = 'column';
    optionsContainer.style.gap = '1rem';
    optionsContainer.style.width = '100%';
    
    quiz.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.style.width = '100%';
        btn.style.padding = '1.5rem';
        btn.style.fontSize = '1.4rem';
        btn.innerText = opt;
        btn.onclick = (e) => {
            e.stopPropagation();
            if (idx === quiz.correct) {
                score += 50;
                scoreValue.innerText = score;
                createConfetti();
                speak(`Parabéns ${userName}! Você acertou e ganhou 50 pontos!`);
                conceptCard.classList.remove('active');
            } else {
                speak(`Quase lá ${userName}! Tente de novo!`);
                btn.style.borderColor = 'red';
                btn.style.color = 'red';
            }
        };
        optionsContainer.appendChild(btn);
    });
    
    diagramContainer.appendChild(optionsContainer);
    
    conceptCard.classList.add('active');
    speak(questionText.innerText);
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#54A0FF', '#FF9F43'][Math.floor(Math.random() * 5)];
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Close Card on click
document.addEventListener('click', (e) => {
    if (conceptCard.classList.contains('active') && !conceptCard.contains(e.target)) {
        // Only close if we clicked outside OR if the card was already shown (handled by simple toggle for TEA)
    }
    if (conceptCard.classList.contains('active')) {
        conceptCard.classList.remove('active');
    }
});

// Initialize
lucide.createIcons();
