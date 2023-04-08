
let rodA = [];
let rodB = [];
let rodC = [];

rodA = [5, 4, 3, 2, 1];
let n = rodA.length;
let moveCount = 1;

let outputArray = [];
function printHanoiLengthFormat(arr1, arr2, arr3) {
    let arr1Copy = [...arr1];
    let arr2Copy = [...arr2];
    let arr3Copy = [...arr3];
    const result = [];
    let rodHeight = n;
    while (arr1Copy.length || arr2Copy.length || arr3Copy.length || rodHeight > 0) {
        const extracted = [];
        const fixedLength = n+2;
        if (arr1Copy.length) {
            const num = arr1Copy.shift();
            const leftLength = Math.floor((fixedLength - num)/2);
            const rightLength = fixedLength - num - leftLength;
            const element = '='.repeat(num).padStart(num + 1, ' ').padEnd(fixedLength, ' ');
            //const element = '='.repeat(num).padEnd(leftLength + num + rightLength, ' ');
            extracted.push(element);
        } else { extracted.push(' '.repeat(fixedLength)) }
        if (arr2Copy.length) {
            const num = arr2Copy.shift();
            const leftLength = Math.floor((fixedLength - num)/2);
            const rightLength = fixedLength - num - leftLength;
            const element = '='.repeat(num).padStart(num + 1, ' ').padEnd(fixedLength, ' ');
            //const element = '='.repeat(num).padEnd(leftLength + num + rightLength, ' ');
            extracted.push(element);
        } else { extracted.push(' '.repeat(fixedLength)) }
        if (arr3Copy.length) {
            const num = arr3Copy.shift();
            const leftLength = Math.floor((fixedLength - num)/2);
            const rightLength = fixedLength - num - leftLength;
            const element = '='.repeat(num).padStart(num + 1, ' ').padEnd(fixedLength, ' ');
            //const element = '='.repeat(num).padEnd(leftLength + num + rightLength, ' ');
            extracted.push(element);
        } else { extracted.push(' '.repeat(fixedLength)) }
        result.push(extracted);
        rodHeight--;
    }
    let output = '';
    output+= '----' + 'step ' + moveCount + '----' + '\n';
    for (let i = result.length - 1; i >= 0; i--) {
        output += '|' + result[i].join('|') + '|\n';
    }


    
    //console.log(output);
    outputArray.push(output);
}

function printHanoiNumFormat(arr1, arr2, arr3) {
    let arr1Copy = [...arr1];
    let arr2Copy = [...arr2];
    let arr3Copy = [...arr3];
    const result = [];
    let rodHeight = n;
    while (arr1Copy.length || arr2Copy.length || arr3Copy.length || rodHeight > 0) {
        const extracted = [];
        if (arr1Copy.length) {
            extracted.push(arr1Copy.shift());
        } else { extracted.push(' ') }
        if (arr2Copy.length) {
            extracted.push(arr2Copy.shift());
        } else { extracted.push(' ') }
        if (arr3Copy.length) {
            extracted.push(arr3Copy.shift());
        } else { extracted.push(' ') }
        result.push(extracted);
        rodHeight--;
    }
    let output = '';
    output+= '----' + 'step ' + moveCount + '----' + '\n';
    for (let i = result.length - 1; i >= 0; i--) {
        output += '|' + result[i].join('|') + '|\n';
    }
    
    //console.log(output);
    outputArray.push(output);
}


let print
function hanoi(numOfDiscs, fromRod, toRod, auxRod) {
    if (numOfDiscs === 1) {
        //console.log(`step ${moveCount++}: Move disk 1 from rod ${fromRod} to rod ${toRod}`);
        
        toRod.push(fromRod.pop());
        printHanoiNumFormat(rodA, rodB, rodC);
        moveCount++;
        return;
    }
    // Move n-1 discs from the source rod to the auxiliary rod
    hanoi(numOfDiscs - 1, fromRod, auxRod, toRod);
    // Move the remaining disc from the source rod to the destination rod
    //console.log(`step ${moveCount++}:Move disk ${numOfDiscs} from rod ${fromRod} to rod ${toRod}`);
    toRod.push(fromRod.pop());
    
    // Move the n-1 discs from the auxiliary rod to the destination rod
    printHanoiNumFormat(rodA, rodB, rodC)
    moveCount++;
    hanoi(numOfDiscs - 1, auxRod, toRod, fromRod);
}



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







