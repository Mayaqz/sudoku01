var numSelected = null;
var tileSelected = null;

const urlParams = new URLSearchParams(window.location.search);
const boardId = urlParams.get("id");
const urlParam = new URLSearchParams(window.location.search);
const solutionId = urlParam.get("id");

var errors = 0;

let board = [
  [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---",
  ],
  [
    "53--7----",
    "6--195---",
    "-98----6-",
    "8---6---3",
    "4--8-3--1",
    "7---2---6",
    "-6----28-",
    "---419--5",
    "----8--79",
  ],

  [
    "3-65-84--",
    "52-------",
    "-87----31",
    "--3-1--8-",
    "9--863--5",
    "-5--9-6--",
    "13----25-",
    "-------74",
    "--52-63--",
  ],
  [
    "8--------",
    "--36-----",
    "-7--9-2--",
    "-5---7---",
    "----457--",
    "---1---3-",
    "--1----68",
    "--85---1-",
    "-9----4--",
  ],
  [
    "--3--2614",
    "--2641--8",
    "-16-35-7-",
    "---3---97",
    "65---7-31",
    "-37-54---",
    "-79--62--",
    "---5837--",
    "84--2--6-",
  ],
];

let solution = [
  [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763",
  ],
  [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179",
  ],
  [
    "316578492",
    "529134768",
    "263415987",
    "974863125",
    "851792643",
    "138947256",
    "692351874",
    "745286319",
  ],
  [
    "812753649",
    "943682175",
    "675491283",
    "154237896",
    "369845721",
    "287169534",
    "521974368",
    "438526917",
    "796318452",
  ],
  [
    "583971614",
    "792641358",
    "416835972",
    "124368597",
    "658297431",
    "937154826",
    "379416285",
    "261583749",
    "845729163",
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
