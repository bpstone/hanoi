// Initialize the game state
let rodA = [];
let rodB = [];
let rodC = [];
let n = 5;
let moveCount = 1;
let moves = [];
let intervalId = null;
let currentMoveIndex = 0;
let isPaused = true;

// Initialize the discs and generate moves
function initializeGame() {
    // Reset all variables
    rodA = [];
    rodB = [];
    rodC = [];
    moves = [];
    moveCount = 1;
    currentMoveIndex = 0;
    
    // Initialize discs on rod A
    for (let i = n; i > 0; i--) {
        rodA.push(i);
    }
    
    // Add initial state
    moves.push({
        a: [...rodA],
        b: [],
        c: [],
        step: 1
    });
    
    // Generate all moves
    hanoi(n, rodA, rodC, rodB);
    
    // Reset to initial state
    rodA = moves[0].a.slice();
    rodB = moves[0].b.slice();
    rodC = moves[0].c.slice();
    
    // Display initial state
    updateVisualization();
}

// Function to create a move snapshot
function createMoveSnapshot() {
    moves.push({
        a: [...rodA],
        b: [...rodB],
        c: [...rodC],
        step: moveCount
    });
    moveCount++;
}

// Hanoi algorithm
function hanoi(numOfDiscs, fromRod, toRod, auxRod) {
    if (numOfDiscs === 1) {
        toRod.push(fromRod.pop());
        createMoveSnapshot();
        return;
    }
    hanoi(numOfDiscs - 1, fromRod, auxRod, toRod);
    toRod.push(fromRod.pop());
    createMoveSnapshot();
    hanoi(numOfDiscs - 1, auxRod, toRod, fromRod);
}

// Update the visual representation
function updateVisualization() {
    const state = currentMoveIndex === 0 ? {
        a: rodA,
        b: rodB,
        c: rodC,
        step: 1
    } : moves[currentMoveIndex];
    
    if (!state) return;

    document.getElementById('step-counter').textContent = `Step: ${state.step}`;

    // Update each rod
    ['a', 'b', 'c'].forEach((rod, index) => {
        const rodElement = document.getElementById(`rod${index + 1}`);
        rodElement.innerHTML = '';
        
        state[rod].forEach(size => {
            const disc = document.createElement('div');
            disc.className = 'disc';
            disc.style.width = `${size * 30}px`;
            rodElement.appendChild(disc);
        });
    });
}

// Animation control functions
function startAnimation() {
    if (isPaused) {
        isPaused = false;
        document.getElementById('startBtn').textContent = 'Restart';
        document.getElementById('playPauseBtn').textContent = 'Pause';
        if (currentMoveIndex >= moves.length) {
            currentMoveIndex = 0;
        }
        animate();
    } else {
        resetAnimation();
        startAnimation();
    }
}

function togglePlayPause() {
    if (isPaused) {
        // Resume animation
        if (currentMoveIndex < moves.length) {
            isPaused = false;
            document.getElementById('playPauseBtn').textContent = 'Pause';
            animate();
        }
    } else {
        // Pause animation
        isPaused = true;
        document.getElementById('playPauseBtn').textContent = 'Resume';
        if (intervalId) {
            clearInterval(intervalId);
        }
    }
}

function resetAnimation() {
    isPaused = true;
    document.getElementById('playPauseBtn').textContent = 'Pause';
    if (intervalId) {
        clearInterval(intervalId);
    }
    currentMoveIndex = 0;
    document.getElementById('startBtn').textContent = 'Start';
    initializeGame();
    updateVisualization();
}

function animate() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    intervalId = setInterval(() => {
        if (currentMoveIndex >= moves.length) {
            pauseAnimation();
            return;
        }
        
        if (!isPaused) {
            updateVisualization();
            currentMoveIndex++;
        }
    }, 1000);
}

function pauseAnimation() {
    isPaused = true;
    document.getElementById('playPauseBtn').textContent = 'Resume';
    if (intervalId) {
        clearInterval(intervalId);
    }
}

// Navigation functions
function previousMove() {
    if (currentMoveIndex > 0) {
        currentMoveIndex--;
        updateVisualization();
    }
}

function nextMove() {
    if (currentMoveIndex < moves.length - 1) {
        currentMoveIndex++;
        updateVisualization();
    }
}

// Music control functions
let isMusicPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const toggleMusicBtn = document.getElementById('toggleMusic');
const volumeSlider = document.getElementById('volumeSlider');
const audioStatus = document.getElementById('audioStatus');

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        toggleMusicBtn.innerHTML = '🔇 Music Off';
        audioStatus.textContent = 'Music paused';
    } else {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                toggleMusicBtn.innerHTML = '🔊 Music On';
                audioStatus.textContent = 'Playing music';
            })
            .catch(error => {
                console.log("Audio playback failed:", error);
                audioStatus.textContent = 'Failed to play music';
            });
        }
    }
    isMusicPlaying = !isMusicPlaying;
}

function updateVolume() {
    bgMusic.volume = volumeSlider.value / 100;
    audioStatus.textContent = `Volume: ${volumeSlider.value}%`;
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners
    document.getElementById('startBtn').addEventListener('click', startAnimation);
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('resetBtn').addEventListener('click', resetAnimation);
    document.getElementById('prevBtn').addEventListener('click', previousMove);
    document.getElementById('nextBtn').addEventListener('click', nextMove);
    
    // Set up music controls
    toggleMusicBtn.addEventListener('click', toggleMusic);
    volumeSlider.addEventListener('input', updateVolume);
    bgMusic.volume = volumeSlider.value / 100;
    
    // Audio loading status
    bgMusic.addEventListener('loadeddata', () => {
        audioStatus.textContent = 'Music loaded';
        toggleMusicBtn.disabled = false;
    });
    
    bgMusic.addEventListener('error', (e) => {
        audioStatus.textContent = 'Error loading music';
        console.error('Audio error:', e);
    });
    
    // Initialize the game
    initializeGame();
    
    // Set initial button state
    document.getElementById('playPauseBtn').textContent = 'Pause';
});
