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
    },
    english: {
        title: "Inglês",
        color: "var(--english)",
        items: [
            { 
                id: "biography", name: "Social Studies: Biography", icon: "user-plus", 
                concept: "Biography and Autobiography!",
                details: [
                    { icon: "user", label: "Biography", voice: "A biography is a story about someone else's life." },
                    { icon: "user-check", label: "Autobiography", voice: "An autobiography is a story about your own life." },
                    { icon: "calendar", label: "Timeline", voice: "A timeline shows the order of events in a life." }
                ],
                question: {
                    text: "{name}, what is an autobiography?",
                    options: ["A story about yourself", "A story about a cat", "A story about someone else"],
                    correct: 0
                }
            },
            { 
                id: "past", name: "ELA: Simple Past", icon: "history", 
                concept: "Simple Past!",
                details: [
                    { text: "+ed", label: "Regular Verbs", voice: "We add 'ed' to many verbs in the past, like 'played' and 'walked'." },
                    { icon: "calendar", label: "Yesterday", voice: "Yesterday is a word that tells us it happened before." },
                    { icon: "check-circle", label: "Finished", voice: "Simple past is for actions that are already finished." }
                ],
                question: {
                    text: "{name}, how do we usually change a regular verb to the past?",
                    options: ["Add 'ing'", "Add 'ed'", "Add 's'"],
                    correct: 1
                }
            },
            { 
                id: "volcanoes", name: "Earthquakes and Volcanoes", icon: "flame", 
                concept: "Earthquakes and Volcanoes!",
                details: [
                    { icon: "thermometer", label: "Magma", voice: "Magma is hot liquid rock inside the Earth." },
                    { icon: "zap", label: "Lava", voice: "Lava is the magma that comes out of a volcano." },
                    { icon: "layers", label: "Tectonic Plates", voice: "Tectonic plates are moving pieces of the Earth's surface." }
                ],
                question: {
                    text: "{name}, what is the hot liquid called when it comes out of a volcano?",
                    options: ["Water", "Ice", "Lava"],
                    correct: 2
                }
            },
            { 
                id: "richter", name: "Richter Scale", icon: "activity", 
                concept: "Richter Scale!",
                details: [
                    { icon: "bar-chart-2", label: "Magnitude", voice: "Magnitude tells us the size of an earthquake." },
                    { icon: "wave-pulse", label: "Seismograph", voice: "A seismograph is a machine that measures ground movement." },
                    { text: "1-10", label: "Intensity", voice: "The scale goes from one to ten to show intensity." }
                ],
                question: {
                    text: "{name}, what does the Richter scale measure?",
                    options: ["Temperature", "Earthquake strength", "Wind speed"],
                    correct: 1
                }
            },
            { 
                id: "atmosphere", name: "Atmosphere Composition", icon: "wind", 
                concept: "Atmosphere Composition!",
                details: [
                    { text: "78%", label: "Nitrogen", voice: "Nitrogen is the most common gas in our atmosphere." },
                    { text: "21%", label: "Oxygen", voice: "Oxygen is the gas we need to breathe." },
                    { icon: "cloud", label: "Atmosphere", voice: "The atmosphere is the layer of gases around Earth." }
                ],
                question: {
                    text: "{name}, which gas is the most common in the atmosphere?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
                    correct: 1
                }
            },
            { 
                id: "changes", name: "Changes in Atmosphere", icon: "refresh-cw", 
                concept: "Changes in Atmosphere!",
                details: [
                    { icon: "sun", label: "Natural", voice: "Natural changes are caused by nature, like volcanoes and solar cycles." },
                    { icon: "factory", label: "Anthropic", voice: "Anthropic changes are caused by humans, like pollution from cars." },
                    { icon: "thermometer-sun", label: "Greenhouse", voice: "The greenhouse effect helps keep our planet warm." }
                ],
                question: {
                    text: "{name}, is pollution from factories a natural or anthropic change?",
                    options: ["Natural", "Anthropic", "Neither"],
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
let maxTransformations = 7; // Default for desktop

const characterFiles = [
    'brud.png', 'durple.png', 'garnold.png', 'gray.png', 
    'jevin.png', 'mrsun.png', 'oren.jpg', 'pinki.png', 
    'raddy.png', 'simon.png', 'vineria.png', 'wenda.png'
];

// Game Logic
function startGame() {
    const input = document.getElementById('userNameInput');
    if (input.value.trim() === "") {
        speak("Por favor, me diga o seu nome!");
        return;
    }
    userName = input.value.trim();
    
    // Check if mobile to adjust game length
    if (window.innerWidth <= 768) {
        maxTransformations = 3;
    } else {
        maxTransformations = 7;
    }

    // Set user name in all card tags
    document.querySelectorAll('.user-name-tag').forEach(tag => {
        tag.innerText = userName;
    });

    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('mainScreen').classList.add('active');
    
    // Affective Welcome
    const welcomeMsg = `Olá ${userName}! Que bom que você está aqui. Eu preparei tudo com muito carinho para nós aprendermos juntos. Qual disciplina vamos explorar hoje?`;
    speak(welcomeMsg);
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
let voices = [];
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        
        let targetLang = currentSubject === 'english' ? 'en-US' : 'pt-BR';
        utterance.lang = targetLang;
        utterance.rate = currentSubject === 'english' ? 0.8 : 0.85;
        utterance.pitch = 1.2;

        // Try to find a "Natural" or "Google" voice for the target language
        const bestVoice = voices.find(v => v.lang.includes(targetLang) && (v.name.includes('Natural') || v.name.includes('Google'))) 
                       || voices.find(v => v.lang.includes(targetLang));
        
        if (bestVoice) {
            utterance.voice = bestVoice;
        }
        
        utterance.onstart = () => {
            conceptCard.classList.add('speaking-active');
        };
        utterance.onend = () => {
            conceptCard.classList.remove('speaking-active');
        };
        
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
    
    let welcome;
    if (subject === 'english') {
        welcome = `Welcome ${userName}! Let's learn English together. Pick a topic!`;
    } else {
        welcome = `Legal! Escolha um tópico de ${data.title}.`;
    }
    speak(welcome);
    
    topicsGrid.innerHTML = '';
    data.items.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.innerText = item.name;
        btn.onclick = () => selectTopic(item);
        topicsGrid.appendChild(btn);
    });
    const instruction = document.querySelector('.game-instruction');
    const scoreBadge = document.getElementById('scoreBadge');
    const backBtn = document.getElementById('backBtn');
    
    if (subject === 'english') {
        instruction.innerText = "Drag the card to the frame with your name";
        scoreBadge.innerHTML = `<i data-lucide="star" style="fill: var(--math);"></i> <span id="scoreValue">${score}</span> Points`;
        backBtn.innerHTML = `<i data-lucide="arrow-left"></i> Back`;
    } else {
        instruction.innerText = "Arraste a carta até o quadro com o seu nome";
        scoreBadge.innerHTML = `<i data-lucide="star" style="fill: var(--math);"></i> <span id="scoreValue">${score}</span> Pontos`;
        backBtn.innerHTML = `<i data-lucide="arrow-left"></i> Voltar`;
    }
    lucide.createIcons();
    
    const hint = document.querySelector('.close-hint');
    if (subject === 'english') {
        hint.innerText = "Click anywhere to keep playing!";
    } else {
        hint.innerText = "Clique em qualquer lugar para continuar jogando!";
    }
    
    showScreen(topicsScreen);
}

function resetGame() {
    const slots = document.querySelectorAll('.character-slot');
    slots.forEach(slot => {
        const sprite = slot.querySelector('.character-sprite');
        
        // Pick a random character file
        const randomChar = characterFiles[Math.floor(Math.random() * characterFiles.length)];
        sprite.style.backgroundImage = `url('assets/${randomChar}')`;
        
        sprite.style.opacity = "0"; // Ensure it's hidden initially
        sprite.style.filter = "none"; // Reset filter
        slot.classList.remove('anim-bounce', 'transformed');
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
        
        // Dynamic icon based on subject
        if (currentSubject === 'mathematics') {
            img.src = 'assets/math.png';
        } else if (currentSubject === 'portuguese') {
            img.src = 'assets/portuguese.png';
        } else {
            img.src = 'assets/english.png';
        }
        
        item.appendChild(img);
        const label = document.createElement('div');
        label.className = 'tool-label';
        label.innerText = topic.name;
        item.appendChild(label);
        
        item.addEventListener('dragstart', handleDragStart);
        
        // Mobile Touch Support
        item.addEventListener('touchstart', handleTouchStart, { passive: false });
        item.addEventListener('touchmove', handleTouchMove, { passive: false });
        item.addEventListener('touchend', handleTouchEnd);
        
        // Click support (fallback)
        item.addEventListener('click', () => {
            document.querySelectorAll('.tool-item').forEach(t => t.classList.remove('selected'));
            item.classList.add('selected');
            selectedToolForClick = item;
            speak(topic.name);
        });
        
        toolbox.appendChild(item);
    }
}

let selectedToolForClick = null;
let touchDraggedElement = null;
let touchGhost = null;
let touchStartX = 0;
let touchStartY = 0;
let touchMoved = false;

function handleTouchStart(e) {
    const item = e.target.closest('.tool-item');
    if (!item) return;
    
    touchDraggedElement = item;
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchMoved = false;
    
    const rect = item.getBoundingClientRect();
    
    // Create ghost after a short delay or if moved, 
    // but for immediate feedback we'll create it and hide it until moved?
    // Actually, let's create it immediately but only show it after a tiny move
    // to distinguish from a simple tap.
    
    touchGhost = item.cloneNode(true);
    touchGhost.style.position = 'fixed';
    touchGhost.style.left = rect.left + 'px';
    touchGhost.style.top = rect.top + 'px';
    touchGhost.style.width = rect.width + 'px';
    touchGhost.style.height = rect.height + 'px';
    touchGhost.style.zIndex = '10000';
    touchGhost.style.opacity = '0'; // Start invisible
    touchGhost.style.pointerEvents = 'none';
    touchGhost.classList.add('dragging-ghost');
    
    document.body.appendChild(touchGhost);
}

function handleTouchMove(e) {
    if (!touchDraggedElement || !touchGhost) return;
    
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    
    const dist = Math.hypot(x - touchStartX, y - touchStartY);
    
    if (dist > 10) { // Threshold for dragging
        touchMoved = true;
        touchGhost.style.opacity = '0.8';
        touchDraggedElement.style.opacity = '0.5';
        
        // Update ghost position (centered on touch)
        touchGhost.style.left = (x - touchGhost.offsetWidth / 2) + 'px';
        touchGhost.style.top = (y - touchGhost.offsetHeight / 2) + 'px';
        
        // Check for hover effect on slots
        const hoveredSlot = document.elementFromPoint(x, y)?.closest('.character-slot');
        document.querySelectorAll('.character-slot').forEach(s => s.classList.remove('drag-over'));
        if (hoveredSlot) {
            hoveredSlot.classList.add('drag-over');
        }
        
        // Only prevent default if we are actually dragging
        if (e.cancelable) e.preventDefault();
    }
}

function handleTouchEnd(e) {
    if (!touchDraggedElement) return;
    
    if (!touchMoved) {
        // It was a tap, trigger the click logic
        touchDraggedElement.click();
    } else {
        const touch = e.changedTouches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        
        const dropTarget = document.elementFromPoint(x, y)?.closest('.character-slot');
        
        if (dropTarget) {
            applyToolToCharacter(dropTarget);
        }
    }
    
    // Cleanup
    if (touchGhost) {
        touchGhost.remove();
        touchGhost = null;
    }
    if (touchDraggedElement) {
        touchDraggedElement.style.opacity = '1';
    }
    touchDraggedElement = null;
    document.querySelectorAll('.character-slot').forEach(s => s.classList.remove('drag-over'));
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
    
    // Mobile/Click support
    slot.addEventListener('click', () => {
        if (selectedToolForClick) {
            applyToolToCharacter(slot);
            selectedToolForClick.classList.remove('selected');
            selectedToolForClick = null;
        }
    });
});

function applyToolToCharacter(slot) {
    if (slot.classList.contains('anim-bounce')) return; // Already transformed

    const sprite = slot.querySelector('.character-sprite');
    slot.classList.add('anim-bounce', 'transformed');
    
    sprite.style.opacity = "1"; // Show the character
    // Optional: add visual feedback that it's transformed
    sprite.style.filter = "drop-shadow(0 0 15px var(--primary)) brightness(1.2)";
    
    transformationCount++;
    
    if (transformationCount < maxTransformations) {
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
        
        const congrats = currentSubject === 'english' ? 
            [`${userName}, look how cool!`, `Very well ${userName}!`, `Look at this ${userName}!`] :
            [`${userName}, olha que legal!`, `Muito bem ${userName}!`, `Veja só ${userName}!`];
            
        const randomCongrats = congrats[Math.floor(Math.random() * congrats.length)];
        
        speak(`${randomCongrats} ${detail.voice || topic.concept}`);
    }
}

function showQuizCard(topic) {
    const quiz = topic.question;
    cardTitle.innerText = currentSubject === 'english' ? "Final Challenge!" : "Desafio Final!";
    diagramContainer.innerHTML = '';
    
    const questionText = document.createElement('p');
    questionText.className = 'quiz-question';
    questionText.innerText = quiz.text.replace('{name}', userName);
    diagramContainer.appendChild(questionText);
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';
    
    quiz.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn quiz-opt-btn';
        btn.innerText = opt;
        btn.onclick = (e) => {
            e.stopPropagation();
            if (idx === quiz.correct) {
                score += 50;
                scoreValue.innerText = score;
                createConfetti();
                const msg = currentSubject === 'english' ? 
                    `Congratulations ${userName}! You got it right and earned 50 points!` :
                    `Parabéns ${userName}! Você acertou e ganhou 50 pontos!`;
                speak(msg);
                conceptCard.classList.remove('active');
            } else {
                const msg = currentSubject === 'english' ?
                    `Almost there ${userName}! Try again!` :
                    `Quase lá ${userName}! Tente de novo!`;
                speak(msg);
                btn.classList.add('wrong-answer');
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

// Section Navigation
function showSection(sectionId) {
    // Hide all main sections
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    if (sectionId === 'home') {
        document.getElementById('homeSection').classList.add('active');
    } else if (sectionId === 'prompts') {
        document.getElementById('promptsSection').classList.add('active');
    } else if (sectionId === 'docs') {
        document.getElementById('documentationSection').classList.add('active');
    }
    
    // Re-create icons for the new section content
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Initialize
lucide.createIcons();
resetGame();

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
    if (music.paused) {
        music.play();
        music.volume = 0.3;
        btn.innerHTML = '<i data-lucide="volume-x"></i> Parar Música';
    } else {
        music.pause();
        btn.innerHTML = '<i data-lucide="volume-2"></i> Música';
    }
    lucide.createIcons();
}
