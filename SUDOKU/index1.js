var numSelected = null;
var tileSelected = null;

const urlParams = new URLSearchParams(window.location.search);
const boardId = urlParams.get("id");
const urlParam = new URLSearchParams(window.location.search);
const solutionId = urlParam.get("id");

var errors = 0;

let board = [
  [
    "--8---7--",
    "-42---65-",
    "96-------",
    "--9--6-2-",
    "82--1--36",
    "-3-2--9--",
    "-------95",
    "-95---41-",
    "-8---3---",
  ],
  [
    "916--4-72",
    "8--62--5-",
    "5----893-",
    "-6----2--",
    "---2-7---",
    "--5----9-",
    "-978----3",
    "-8--76--9",
    "45-1--687",
  ],

  [
    "-----6-2-",
    "---18--9-",
    "-87--31--",
    "-4----2-7",
    "--5---3--",
    "6-3----1-",
    "--26--95-",
    "-7--24---",
    "-6-9-----",
  ],
  [
    "-7--2-9--",
    "-4-8-6---",
    "-12---3--",
    "------87-",
    "-6-972-5-",
    "-25------",
    "--1---29-",
    "----5-4-3-",
    "--7-6--1-",
  ],
  [
    "2-9---6--",
    "-4-87--12",
    "8---19-4-",
    "-3-7--8-1",
    "-65--8-3-",
    "1---3---7",
    "---65-7-9",
    "6-4----2-",
    "-8-3-145-",
  ],
  [
    "--7861---",
    "--8--3---",
    "56--9--1-",
    "1---7--85",
    "---345---",
    "63--1---7",
    "-5--2--98",
    "---6--5--",
    "---5371--",
  ],
  [
    "-8---5179",
    "---2-6-84",
    "9-3---6--",
    "27--8-5-3",
    "4---5-812",
    "--8-42--7",
    "8----3--1",
    "354-1--9-",
    "-96-247--",
  ],
];

let solution = [
  [
    "513864279",
    "742931658",
    "968725341",
    "459386127",
    "827419536",
    "631257984",
    "376142895",
    "295678413",
    "184593762",
  ],
  [
    "916354872",
    "873629154",
    "524718936",
    "768935241",
    "149287365",
    "235461798",
    "697842513",
    "381576429",
    "452193687",
  ],
  [
    "931746528",
    "456182793",
    "287593146",
    "148359267",
    "725461389",
    "693278415",
    "812637954",
    "579824631",
    "264915872",
  ],
  [
    "876123945",
    "543986721",
    "912645386",
    "394651872",
    "168972453",
    "725438169",
    "651387294",
    "289514637",
    "437269518",
  ],
  [
    "219543678",
    "543876912",
    "876219345",
    "432765891",
    "765198234",
    "198432567",
    "321654789",
    "654987123",
    "987321456",
  ],
  [
    "947861253",
    "218453697",
    "563792814",
    "194276385",
    "782345961",
    "635918427",
    "356124798",
    "471689532",
    "829537146",
  ],
  [
    "682435179",
    "715296384",
    "943871625",
    "271689543",
    "469357812",
    "538142967",
    "827963451",
    "354718296",
    "196524738",
  ],
];

window.onload = function () {
  setGame();
};

function setGame() {
  // toonuud 1-9
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  // Board ni 9x9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (board[boardId][r][c] != "-") {
        tile.innerText = board[boardId][r][c];
        tile.classList.add("tile-start");
      }
      if (r == 2 || r == 5) {
        tile.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}
// console.log(numSelected);

function selectTile() {
  // document.getElementById("board").childNodes[0].style.backgroundColor = "red";

  const blocks = document.getElementById("board").childNodes;
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.backroundcolor = "green";
  }

  if (numSelected) {
    if (this.innerText != "") {
      return;
    }

    // "0-0" "0-1" .. "3-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[solutionId][r][c] == numSelected.id) {
      this.innerText = numSelected.id;
    } else errors += 1;
    document.getElementById("errors").innerText = errors;
  }
  if (errors == "11") {
    alert("Ta heterhiiih udaa aldsan uchir huudsiig refresh hiih gej baina!");
    window.location.reload();
  }
}
