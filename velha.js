var tabuleiro;
var board;
var aviso;
var jogador;
var nota;

function inicia() {
  tabuleiro = new Array(3);
  board = document.getElementById('board');
  aviso = document.getElementById('aviso');
  nota = document.getElementById('nota');
  jogador = 1;

  for (let i = 0; i < 3; i++) {
    tabuleiro[i] = new Array(3);
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }
  criaTabuleiro();
}

function criaTabuleiro() {
  var tableHTML = '';
  for (let i = 0; i < 3; i++) {
    tableHTML += '<tr>';
    for (let j = 0; j < 3; j++) {
      tableHTML +=
        '<td onclick="marcar(' + i + ',' + j + ')" class="' + (tabuleiro[i][j] === 1 ? 'X' : tabuleiro[i][j] === -1 ? 'O' : '') + '">' +
        (tabuleiro[i][j] === 1 ? 'X' : tabuleiro[i][j] === -1 ? 'O' : '') +
        '</td>';
    }
    tableHTML += '</tr>';
  }
  board.innerHTML = tableHTML;
}

function jogar() {
  aviso.innerHTML = 'Vez do jogador: ' + ((jogador) % 2 + 1);
  lin = parseInt(document.getElementById("lin").value) - 1;
  col = parseInt(document.getElementById("col").value) - 1;

  if (tabuleiro[lin][col] == 0)
    if (jogador % 2)
      tabuleiro[lin][col] = 1;
    else
      tabuleiro[lin][col] = -1;
  else {
    aviso.innerHTML = 'Campo ja foi marcado!'
    jogador--;
  }

  jogador++;
  exibe();
  checa();
}

function marcar() {
  var lin = parseInt(document.getElementById('lin').value);
  var col = parseInt(document.getElementById('col').value);

  if (lin >= 0 && lin <= 2 && col >= 0 && col <= 2 && tabuleiro[lin][col] === 0 && !aviso.innerHTML) {
    if (jogador % 2) {
      tabuleiro[lin][col] = 1;
    } else {
      tabuleiro[lin][col] = -1;
    }
    jogador++;
    criaTabuleiro();
    checa();
  }
}
function marcar() {
  var lin = parseInt(document.getElementById('lin').value);
  var col = parseInt(document.getElementById('col').value);

  if (lin >= 0 && lin <= 2 && col >= 0 && col <= 2 && tabuleiro[lin][col] === 0 && !aviso.innerHTML) {
    if (jogador % 2) {
      tabuleiro[lin][col] = 1;
    } else {
      tabuleiro[lin][col] = -1;
    }
    jogador++;
    criaTabuleiro();
    checa();
  }
}

function checa() {
  var soma;

  //Linhas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

    if (soma == 3 || soma == -3)
      aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Linha " + (i + 1) + " preenchida!";
  }

  //Colunas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

    if (soma == 3 || soma == -3)
      aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Coluna " + (i + 1) + " preenchida!";
  }

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
  if (soma == 3 || soma == -3)
    aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Diagonal preenchida!";

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
  if (soma == 3 || soma == -3)
    aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Diagonal preenchida!";
}

// function checa() {
//   var soma;

//   //Linhas
//   for (let i = 0; i < 3; i++) {
//     soma = 0;
//     soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

//     if (soma == 3 || soma == -3)
//       aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Linha " + (i + 1) + " preenchida!";
//   }

//   //Colunas
//   for (let i = 0; i < 3; i++) {
//     soma = 0;
//     soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

//     if (soma == 3 || soma == -3)
//       aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Coluna " + (i + 1) + " preenchida!";
//   }

//   //Diagonal
//   soma = 0;
//   soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
//   if (soma == 3 || soma == -3)
//     aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Diagonal preenchida!";

//   //Diagonal
//   soma = 0;
//   soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
//   if (soma == 3 || soma == -3)
//     aviso.innerHTML = "Jogador " + ((jogador) % 2 + 1) + " ganhou! Diagonal preenchida!";

//     // Verificar empate
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (tabuleiro[i][j] === 0) {
//         empate = false;
//         break;
//       }
//     }
//   }

//   if (empate) {
//     aviso.innerHTML = "Empate!";
//   }
// }

function reiniciar() {
  inicia();
}
