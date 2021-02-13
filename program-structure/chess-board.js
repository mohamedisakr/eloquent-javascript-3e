/**
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting
a grid of the given width and height.
 */

const n = 8;
let board = ``;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if ((i + j) % 2 === 0) {
      board += ".";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
