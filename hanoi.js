
let rodA = [];
let rodB = [];
let rodC = [];

rodA = [5, 4, 3, 2, 1];
let n = rodA.length;
let moveCount = 1;
let outputArray = [];

function printHanoiLengthFormat(arr1, arr2, arr3) {
    const result = [];
    let rodHeight = n;
    while (rodHeight--) {
        const extracted = [];
        const fixedLength = n + 2;
        [arr1, arr2, arr3].forEach((arr) => {
            const num = arr[rodHeight];
            if (num) {
                const leftLength = Math.floor((fixedLength - num) / 2);
                const rightLength = fixedLength - num - leftLength;
                const element = '='.repeat(num).padStart(num + 1, ' ').padEnd(fixedLength, ' ');
                extracted.push(element);
            } else {
                extracted.push(' '.repeat(fixedLength));
            }
        });
        result.push(extracted);
    }
    let output = `----step ${moveCount}----\n`;
    output += result.map(row => `|${row.join('|')}|\n`).join('');
    outputArray.push(output);
}

function printHanoiNumFormat(arr1, arr2, arr3) {
    let result = [];
    let rodHeight = n;
    while (rodHeight--) {
        result.push([
            arr1[rodHeight] || ' ',
            arr2[rodHeight] || ' ',
            arr3[rodHeight] || ' '
        ]);
    }
    let output = `----step ${moveCount}----\n`;
    output += result.map(row => `|${row.join('|')}|\n`).join('');
    outputArray.push(output);
}

function hanoi(numOfDiscs, fromRod, toRod, auxRod) {
    if (numOfDiscs === 1) {
        //console.log(`step ${moveCount++}: Move disk 1 from rod ${fromRod} to rod ${toRod}`);
        
        toRod.push(fromRod.pop());
        printHanoiLengthFormat(rodA, rodB, rodC);
        moveCount++;
        return;
    }
    // Move n-1 discs from the source rod to the auxiliary rod
    hanoi(numOfDiscs - 1, fromRod, auxRod, toRod);
    // Move the remaining disc from the source rod to the destination rod
    //console.log(`step ${moveCount++}:Move disk ${numOfDiscs} from rod ${fromRod} to rod ${toRod}`);
    toRod.push(fromRod.pop());
    
    // Move the n-1 discs from the auxiliary rod to the destination rod
    printHanoiLengthFormat(rodA, rodB, rodC)
    moveCount++;
    hanoi(numOfDiscs - 1, auxRod, toRod, fromRod);
}

//start the program
hanoi(n, rodA, rodC, rodB);

//print it in terminal, make it visualized;
let i = 0;
let isPaused = false;
const intervalId = setInterval(() => {
    if (!isPaused) {
        console.clear();
        console.log(outputArray[i]);
        i++;
        if (i === outputArray.length) {
            clearInterval(intervalId);
            process.exit(); // exit when finished
        }
    }
}, 1000);

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else if (key.name === 'space') {
        isPaused = !isPaused;
    }
});







