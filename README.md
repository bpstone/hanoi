## Explanation of Hanoi Tower Code

The provided code in hanoi.js solves the classic problem of the Tower of Hanoi. The problem consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. No disk may be placed on top of a smaller disk.

The code uses recursion to solve the problem. The hanoi function takes three parameters: the number of disks, the rod from which to move the disks, the rod to which to move the disks, and the auxiliary rod. The base case is when there is only one disk, in which case the function simply moves the disk from the source rod to the destination rod. Otherwise, the function recursively moves the top n-1 disks from the source rod to the auxiliary rod, then moves the nth disk from the source rod to the destination rod, and finally moves the n-1 disks from the auxiliary rod to the destination rod.

The code also includes two functions to print the state of the rods at each step of the solution. The printHanoiLengthFormat function prints the state of the rods in a visual format, where the disks are represented by equal signs of varying lengths. The printHanoiNumFormat function prints the state of the rods in a numerical format, where the disks are represented by their size.

Finally, the code includes a loop that prints the state of the rods at each step of the solution in the terminal, and allows the user to pause and resume the animation by pressing the space bar.

## Hanoi Tower 中文注释

hanoi.js 中提供的代码解决了汉诺塔的经典问题。该问题由三个杆和一些不同大小的盘组成，这些盘可以滑动到任何杆上。谜题从盘子在一个杆上按升序排列开始，最小的在顶部，从而形成一个圆锥形。谜题的目标是将整个堆栈移动到另一个杆上，遵守以下简单规则：

1. 一次只能移动一个盘子。
2. 每次移动都包括从一个堆栈中取出上面的盘子，并将其放在另一个堆栈或空杆上。
3. 不能将盘子放在较小的盘子上面。

代码使用递归来解决问题。hanoi 函数接受三个参数：盘子的数量，要移动盘子的杆，要移动盘子的杆和辅助杆。基本情况是只有一个盘子的情况，在这种情况下，函数只是将盘子从源杆移动到目标杆。否则，函数递归地将源杆上面的前 n-1 个盘子移动到辅助杆上，然后将第 n 个盘子从源杆移动到目标杆上，最后将辅助杆上的 n-1 个盘子移动到目标杆上。

代码还包括两个函数，用于在解决方案的每个步骤中打印杆的状态。printHanoiLengthFormat 函数以可视格式打印杆的状态，其中盘子由长度不同的等号表示。printHanoiNumFormat 函数以数字格式打印杆的状态，其中盘子由其大小表示。

最后，代码包括一个循环，在终端中打印解决方案的每个步骤的杆的状态，并允许用户通过按空格键暂停和恢复动画。
