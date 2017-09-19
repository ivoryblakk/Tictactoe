var nextPlayer = true;

var boardState = [
  null, null, null,
  null, null, null,
  null, null, null
];

function play(box) {
  if (boardState[box.id] == null) {
    if (nextPlayer) {
      boardState[box.id] = 'x';
    } else {
      boardState[box.id] = 'o';
    }
    nextPlayer = !nextPlayer;
  } else {
    alert('grow up. you can\'t do that')
  };
  console.log(boardState);
};