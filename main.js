let elArr = [];
let formArr = [
  {
    id:"king",
    imgURL:"images/forms5.svg",
  },  {
    id:"rock",
    imgURL:"images/forms1.svg",
  },  {
    id:"bishop",
    imgURL:"images/forms3.svg",
  },  {
    id:"queen",
    imgURL:"images/forms4.svg",
  },  {
    id:"knight",
    imgURL:"images/forms2.svg",
  },  {
    id:"pawn",
    imgURL:"images/forms6.svg",
  }
]
let chessForms = document.querySelector(".chess__forms");

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    elArr.push({ y: i, x: j });
  }
}

let elList = document.querySelector(".chess__list");


//! print list item
elArr.forEach((items) => {
  let li = document.createElement("li");
  li.classList.add("chess__item");
  if ((items.x + items.y) % 2 != 0) {
    li.classList.add("itemWhite");
  } else {
    li.classList.add("itemBlack");
  }

  li.innerHTML = `
      <span class="span2">${items.x}</span>
      <span class="span1">${items.y}</span>
  `;

  elList.appendChild(li);
});

//! print buttons
formArr.forEach((items)=>{
  let img = document.createElement("img");
  img.src = items.imgURL;
  let button = document.createElement("button");
  button.id = items.id;
  button.className = "ches__forms-btns";
  button.appendChild(img);
  chessForms.appendChild(button);
})


let items = document.querySelectorAll(".chess__item");
let span1 = document.querySelectorAll(".span1");
let span2 = document.querySelectorAll(".span2");
let xNum = document.querySelector(".x-num");
let yNum = document.querySelector(".y-num");
let x, y;
let elBtns = document.querySelectorAll(".ches__forms-btns");
let chessDosc = document.querySelector(".chess__dosc");
let chess3D = document.querySelector(".chess__3d");


//!chess figures variable
let king = document.querySelector("#king");
let rock = document.querySelector("#rock");
let knight = document.querySelector("#knight");
let pawn = document.querySelector("#pawn");
let bishop = document.querySelector("#bishop");
let queen = document.querySelector("#queen");


//! button background change clicked *************************
elBtns.forEach((item) => {
  item.addEventListener("click", () => {
    elBtns.forEach((value) => {
      value.classList.remove("orange");
    });
    item.classList.add("orange");
  });
});

//! King btn *********************************
function btnKing() {
  king.addEventListener("click", () => {
    items.forEach((e) => {
      e.addEventListener("mouseover", () => {
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;
        btnsKing(x, y);
      });
    });
  });
}
function btnsKing(x, y) {
  items.forEach((item) => {
    if (
      (item.childNodes[1].textContent == x && item.childNodes[3].textContent == y-1) ||
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y) ||
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-1)||
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y)||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-1)){
      item.classList.add("green");
    } else {
      item.classList.remove("green");
    }
  });
}
btnKing();

//! Rook btn *********************************
function btnRook() {
  rock.addEventListener("click", () => {
    items.forEach((e) => {
      e.addEventListener("mouseover", () => {
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsRook(x, y);
      });
    });
  });   
}
function btnsRook(x, y) {
  items.forEach((item) => {
    if (
      item.childNodes[1].textContent == x ||
      item.childNodes[3].textContent == y
    ) {
      item.classList.add("green");
    } else {
      item.classList.remove("green");
    }
  });
}
btnRook();


//! Bishop btn *********************************
function btnBishop() {
  bishop.addEventListener("click", () => {
    items.forEach((e) => {
      e.addEventListener("mouseover", () => {
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsBishop(x, y);
      });
    });
  });   
}
function btnsBishop(x, y) {
  items.forEach((item) => {
    if (
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-1) ||
      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-1+4 && item.childNodes[3].textContent == y-3)||
      (item.childNodes[1].textContent == x-1+5 && item.childNodes[3].textContent == y-4)||      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-1+6 && item.childNodes[3].textContent == y-5)||
      (item.childNodes[1].textContent == x-1+7 && item.childNodes[3].textContent == y-6)||
      (item.childNodes[1].textContent == x-1+8 && item.childNodes[3].textContent == y-7)||
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x-2 && item.childNodes[3].textContent == y-1+3)||
      (item.childNodes[1].textContent == x-3 && item.childNodes[3].textContent == y-1+4)||
      (item.childNodes[1].textContent == x-4 && item.childNodes[3].textContent == y-1+5)||
      (item.childNodes[1].textContent == x-5 && item.childNodes[3].textContent == y-1+6)||
      (item.childNodes[1].textContent == x-6 && item.childNodes[3].textContent == y-1+7)||
      (item.childNodes[1].textContent == x-7 && item.childNodes[3].textContent == y-1+8)||
      // ****************************************************************
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-1) ||
      (item.childNodes[1].textContent == x-2 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-3 && item.childNodes[3].textContent == y-3)||
      (item.childNodes[1].textContent == x-4 && item.childNodes[3].textContent == y-4)||      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-5 && item.childNodes[3].textContent == y-5)||
      (item.childNodes[1].textContent == x-6 && item.childNodes[3].textContent == y-6)||
      (item.childNodes[1].textContent == x-7 && item.childNodes[3].textContent == y-7)||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-1+3)||
      (item.childNodes[1].textContent == x-1+4 && item.childNodes[3].textContent == y-1+4)||
      (item.childNodes[1].textContent == x-1+5 && item.childNodes[3].textContent == y-1+5)||
      (item.childNodes[1].textContent == x-1+6 && item.childNodes[3].textContent == y-1+6)||
      (item.childNodes[1].textContent == x-1+7 && item.childNodes[3].textContent == y-1+7)||
      (item.childNodes[1].textContent == x-1+8 && item.childNodes[3].textContent == y-1+8)
      ){
      item.classList.add("green");
    } else {
      item.classList.remove("green");
    }
  });
}
btnBishop();


//! Queen btn *********************************
function btnQueen() {
  queen.addEventListener("click", () => {
    items.forEach((e) => {
      e.addEventListener("mouseover", () => {
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsQueen(x, y);
      });
    });
  });   
}
function btnsQueen(x, y) {
  items.forEach((item) => {
    if (
      (item.childNodes[1].textContent == x || item.childNodes[3].textContent == y) ||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-1) ||
      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-1+4 && item.childNodes[3].textContent == y-3)||
      (item.childNodes[1].textContent == x-1+5 && item.childNodes[3].textContent == y-4)||      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-1+6 && item.childNodes[3].textContent == y-5)||
      (item.childNodes[1].textContent == x-1+7 && item.childNodes[3].textContent == y-6)||
      (item.childNodes[1].textContent == x-1+8 && item.childNodes[3].textContent == y-7)||
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x-2 && item.childNodes[3].textContent == y-1+3)||
      (item.childNodes[1].textContent == x-3 && item.childNodes[3].textContent == y-1+4)||
      (item.childNodes[1].textContent == x-4 && item.childNodes[3].textContent == y-1+5)||
      (item.childNodes[1].textContent == x-5 && item.childNodes[3].textContent == y-1+6)||
      (item.childNodes[1].textContent == x-6 && item.childNodes[3].textContent == y-1+7)||
      (item.childNodes[1].textContent == x-7 && item.childNodes[3].textContent == y-1+8)||
      // ****************************************************************
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-1) ||
      (item.childNodes[1].textContent == x-2 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-3 && item.childNodes[3].textContent == y-3)||
      (item.childNodes[1].textContent == x-4 && item.childNodes[3].textContent == y-4)||      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-5 && item.childNodes[3].textContent == y-5)||
      (item.childNodes[1].textContent == x-6 && item.childNodes[3].textContent == y-6)||
      (item.childNodes[1].textContent == x-7 && item.childNodes[3].textContent == y-7)||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-1+3)||
      (item.childNodes[1].textContent == x-1+4 && item.childNodes[3].textContent == y-1+4)||
      (item.childNodes[1].textContent == x-1+5 && item.childNodes[3].textContent == y-1+5)||
      (item.childNodes[1].textContent == x-1+6 && item.childNodes[3].textContent == y-1+6)||
      (item.childNodes[1].textContent == x-1+7 && item.childNodes[3].textContent == y-1+7)||
      (item.childNodes[1].textContent == x-1+8 && item.childNodes[3].textContent == y-1+8)
      ){
      item.classList.add("green");
    } else {
      item.classList.remove("green");
    }
  });
}
btnQueen();

//! Knight btn *********************************
function btnKnight() {
  knight.addEventListener("click", () => {
    items.forEach((e) => {
      e.addEventListener("mouseover", () => {
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsKnight(x, y);
      });
    });
  });
}
function btnsKnight(x, y) {
  items.forEach((item) => {
    if (
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-2) ||
      (item.childNodes[1].textContent == x-2 && item.childNodes[3].textContent == y-1+2) ||
      (item.childNodes[1].textContent == x-1 && item.childNodes[3].textContent == y-1+3)||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-1+3)||
      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-1+2)||
      (item.childNodes[1].textContent == x-1+3 && item.childNodes[3].textContent == y-1)||
      (item.childNodes[1].textContent == x-1+2 && item.childNodes[3].textContent == y-2)||
      (item.childNodes[1].textContent == x-2 && item.childNodes[3].textContent == y-1)){
      item.classList.add("green");
    } else {
      item.classList.remove("green");
    }
  });
}
btnKnight();

//! Pawn btn *********************************
function btnPawn() {
  pawn.addEventListener("click", () => {
    items.forEach((e) => {
      e.addEventListener("mouseover", () => {
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsPawn(x, y);
      });
    });
  });   
}
function btnsPawn(x, y) {
  items.forEach((item) => {
    if(y != 7){
      if (
        item.childNodes[1].textContent == x &&
        item.childNodes[3].textContent == y-1
      ) {
        item.classList.add("green");
      } else {
        item.classList.remove("green");
      }
    }else{
      if (
        item.childNodes[1].textContent == x && item.childNodes[3].textContent == y-1 ||
        item.childNodes[1].textContent == x && item.childNodes[3].textContent == y-2 
      ) {
        item.classList.add("green");
      } else {
        item.classList.remove("green");
      }
    }
  });
}
btnPawn();



//! all item hover **************************************
function itemsFun() {
  items.forEach((e) => {
    e.addEventListener("mouseover", () => {
      items.forEach((item) => {
        item.classList.remove("movitem2");
      });

      e.classList.add("movitem2");
      xNum.innerHTML = e.childNodes[1].textContent;
      yNum.innerHTML = e.childNodes[3].textContent;
    });
  });
}
itemsFun();

//! chess 3d clicked ***********************************
chess3D.addEventListener('click',()=>{
  chessDosc.classList.toggle("anim3D");
  if(chessDosc.className == "chess__dosc anim3D"){
    chess3D.innerHTML = "2D";
  }else{
    chess3D.innerHTML = "3D";
  }
})


//! chess desk mouse out remove selected *******************
elList.addEventListener('mouseout', () => {
  items.forEach(im => {
    im.classList.remove("green");
    im.classList.remove("movitem2");

    xNum.innerHTML = 0;
    yNum.innerHTML = 0;
  })
})



