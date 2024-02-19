var numSelected = null;
var tileSelected = null;

const urlParams = new URLSearchParams(window.location.search);
const boardId = urlParams.get("id");
const urlParam = new URLSearchParams(window.location.search);
const solutionId = urlParam.get("id");

var errors = 0;

let board = [
  [
    "-392-8715",
    "6-8--1---",
    "-5-93-846",
    "7-4-1--58",
    "81-64-37-",
    "-2-8-51-4",
    "5-3-9--21",
    "-415-3--7",
    "9--12-58-",
  ],
  [
    "-3----9--",
    "--6------",
    "---241-3-",
    "---9--7--",
    "-----2--4",
    "-8--7--2-",
    "85-------",
    "-9-7-4---",
    "-----6--1",
  ],
  [
    "-52--6---",
    "16-9----4",
    "-498-362-",
    "4-----8--",
    "-832-159-",
    "--1-----2",
    "-973-524-",
    "2----9-56",
    "---1--97-",
  ],
  [
    "234--6817",
    "957--4-63",
    "----72459",
    "54-6-17-2",
    "----23594",
    "723495---",
    "392---148",
    "-----8926",
    "8612493-5",
  ],
  [
    "-3--8---1",
    "--74-1-5-",
    "9---5-2--",
    "--2--5-1-",
    "3--21-5--",
    "59--6---2",
    "--65-2---",
    "--96---27",
    "-----8-65",
  ],
  [
    "234--6817",
    "957--4-63",
    "----72459",
    "54-6-17-2",
    "----23594",
    "723495---",
    "392---148",
    "-----8926",
    "8612493-5",
  ],
];

let solution = [
  [
    "439268715",
    "678451239",
    "152937846",
    "794312658",
    "815649372",
    "326875194",
    "583796421",
    "241583967",
    "967124583",
  ],
  [
    "132567948",
    "546389217",
    "978241635",
    "264918753",
    "715632894",
    "389475126",
    "857123469",
    "691754382",
    "423896571",
  ],
  [
    "352476189",
    "168952734",
    "749813625",
    "425697813",
    "683241597",
    "971538462",
    "897365241",
    "214789356",
    "536124978",
  ],
  [
    "234956817",
    "957814263",
    "186372459",
    "549681732",
    "618723594",
    "723495681",
    "392567148",
    "475138926",
    "861249375",
  ],
  [
    "235986741",
    "687421953",
    "914357286",
    "472835619",
    "368219574",
    "591764832",
    "146572398",
    "859643127",
    "723198465",
  ],
  [
    "234956817",
    "957814263",
    "186372459",
    "549681732",
    "618723594",
    "723495681",
    "392567148",
    "475138926",
    "861249375",
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
  if (errors == 11) {
    alert("Ta heterhiiih udaa aldsan uchir huudsiig refresh hiih gej baina!");
    window.location.reload();
  }
}
