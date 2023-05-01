var arr = [[], [], [], [], [], [], [], [], []];

var t=0;
for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);

	}
}

var board = [[0,0,0,1,0,4,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0]];


function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			arr[i][j].innerText = board[i][j];
		}
	}
}

let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

GetPuzzle.onclick =()=> {
	let m=Math.floor(Math.random()*4)+1;
	get(board,m);
	
}
var final;


function get(board,n){
	
	if(n==1){
		board=[[0,0,0,1,0,4,0,0,0],
		       [0,0,1,0,0,0,9,0,0],
			   [0,9,0,7,0,3,0,6,0],
			   [8,0,7,0,0,0,1,0,6],
			   [0,0,0,0,0,0,0,0,0],
			   [3,0,4,0,0,0,5,0,9],
			   [0,5,0,4,0,2,0,3,0],
			   [0,0,8,0,0,0,6,0,0],
			   [0,0,0,8,0,6,0,0,0]];
	}
	if(n==2){
		board=[[0,0,0,2,6,0,7,0,1],
		       [6,8,0,0,7,0,0,9,0],
			   [1,9,0,0,0,4,5,0,0],
			   [8,2,0,1,0,0,0,4,0],
			   [0,0,4,6,0,2,9,0,0],
			   [0,5,0,0,0,3,0,2,8],
			   [0,0,9,3,0,0,0,7,4],
			   [0,4,0,0,5,0,0,3,6],
			   [7,0,3,0,1,8,0,0,0]];
	}
	if(n==3){
		board=[[0,0,0,0,0,4,0,9,0],
		       [8,0,2,9,7,0,0,0,0],
			   [9,0,1,2,0,0,3,0,0],
			   [0,0,0,0,4,9,1,5,7],
			   [0,1,3,0,5,0,9,2,0],
			   [5,7,9,1,2,0,0,0,0],
			   [0,0,7,0,0,2,6,0,3],
			   [0,0,0,0,3,8,2,0,5],
			   [0,2,0,5,0,0,0,0,0]];
	}
	if(n==4){
		board=[[0,7,2,0,0,4,9,0,0],
		       [3,0,4,0,8,9,1,0,0],
			   [8,1,9,0,0,6,2,5,4],
			   [7,0,1,0,0,0,0,9,5],
			   [9,0,0,0,0,2,0,7,0],
			   [0,0,0,8,0,7,0,1,2],
			   [4,0,5,0,0,1,6,2,0],
			   [2,3,7,0,0,0,5,0,1],
			   [0,0,0,0,2,5,7,0,0]];
	}
	FillBoard(board);
	final=board;
}
SolvePuzzle.onclick = () => {
	SudokuSolver(final);
	
	FillBoard(final);
};
function SudokuSolver(board) {
	// Helper function to check if a number is valid in a particular cell
	function isValid(i,j,num){
		for(let x=0;x<9;x++){
			if(board[i][x]==num || board[x][j]==num){
				return false;
			}
		}
		let rn=3;
		let si=i-i%rn;
		let sj=j-j%rn;
		for(let x=si;x<si+rn;x++){
			for(let y=sj;y<sj+rn;y++){
				if(board[x][y]==num){
					return false;
				}
			}
		}
		return true;
	}
	
  
	// Helper function to find an empty cell
	function findEmptyCell() {
	  for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
		  if (board[i][j] === 0) {
			return [i, j];
		  }
		}
	  }
	  return null;
	}
  
	// Main recursive backtracking function
	function solve() {
	  const cell = findEmptyCell();
	  if (cell === null) {
		return true;
	  }
	  const [row, col] = cell;
	  for (let num = 1; num <= 9; num++) {
		if (isValid(row, col, num)) {
		  board[row][col] = num;
		  if (solve()) {
			return true;
		  }
		  board[row][col] = 0;
		}
	  }
	  return false;
	}
  
	solve();
	return board;
  }

