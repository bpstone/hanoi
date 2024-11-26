# Tower of Hanoi Visualization

An interactive visualization of the Tower of Hanoi puzzle solution, built with HTML, CSS, and JavaScript.

## Features

- Visual representation of the Tower of Hanoi puzzle with 5 disks
- Interactive controls:
  - Start/Restart button to begin or restart the animation
  - Play/Pause button to control animation flow
  - Reset button to return to initial state
  - Previous/Next buttons for step-by-step movement visualization
- Background music with volume control
- Smooth disk movement animations
- Step counter to track progress
- Responsive design

## Controls

- **Start/Restart**: Begin the animation or restart from the beginning
- **Play/Pause**: Control the animation flow
- **Reset**: Return all disks to their initial position
- **Previous (←)**: Move one step backward in the solution
- **Next (→)**: Move one step forward in the solution
- **Music Toggle**: Turn background music on/off
- **Volume Slider**: Adjust music volume

## How to Run

1. Clone this repository
2. Open the project directory
3. Start a local web server (e.g., using Python's built-in server):
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```

## Technical Implementation

- Pure JavaScript implementation without external dependencies
- CSS animations for smooth disk movements
- Recursive algorithm for solving the Tower of Hanoi puzzle
- State management for tracking moves and animation progress

## Authors

- Qinran Li
- Baoping Li

## License

MIT License

## Explanation of Hanoi Tower Code

The provided code in hanoi.js solves the classic problem of the Tower of Hanoi. The problem consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. No disk may be placed on top of a smaller disk.

The code uses recursion to solve the problem. The hanoi function takes three parameters: the number of disks, the rod from which to move the disks, the rod to which to move the disks, and the auxiliary rod. The base case is when there is only one disk, in which case the function simply moves the disk from the source rod to the destination rod. Otherwise, the function recursively moves the top n-1 disks from the source rod to the auxiliary rod, then moves the nth disk from the source rod to the destination rod, and finally moves the n-1 disks from the auxiliary rod to the destination rod.

The code also includes two functions to print the state of the rods at each step of the solution. The printHanoiLengthFormat function prints the state of the rods in a visual format, where the disks are represented by equal signs of varying lengths. The printHanoiNumFormat function prints the state of the rods in a numerical format, where the disks are represented by their size.

Finally, the code includes a loop that prints the state of the rods at each step of the solution in the terminal, and allows the user to pause and resume the animation by pressing the space bar.
