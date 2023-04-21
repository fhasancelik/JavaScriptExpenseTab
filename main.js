const harcamainput = document.querySelector("#harcama");
const fiyatinput = document.querySelector("#fiyat");
const formbtn = document.querySelector(".ekle-btn");
const harcamalistesi = document.querySelector(".liste");
const toplamBilgi = document.querySelector("#toplam-bilgi");
const statusinput = document.querySelector("#status-input");
const selectfilter = document.querySelector("#filter-select");

formbtn.addEventListener("click", addexpense);
harcamalistesi.addEventListener("click", handleClick);
selectfilter.addEventListener("change", handleChange);

let harcama;
let fiyat;
let fiyatValue;
let harcamadiv;
let element;
let wrapperElement;
let filtervalue;
let items;

let toplam = 0;

function handleClick(e) {
  element = e.target;

  if (element.id == "remove") {
    wrapperElement = element.parentElement.parentElement;

    fiyatValue = wrapperElement.querySelector("#fiyatvalue").innerText;
    let delPrice = -fiyatValue;
    updateFiyat(delPrice);

    wrapperElement.remove();
  } else if (element.id == "pay") {
    alert("ödeme");
  }
}

function updateFiyat(gelenFiyat) {
  toplam += Number(gelenFiyat);
  toplamBilgi.innerText = toplam;
}

function addexpense(e) {
  e.preventDefault();

  harcama = harcamainput.value;
  fiyat = fiyatinput.value;

  if (!harcama || !fiyat) {
    return alert("İlgili Alanları doldurun");
  }

  harcamadiv = document.createElement("div");
  harcamadiv.classList.add("harcama");

  if (statusinput.checked == true) {
    harcamadiv.classList.add("payed");
  }

  harcamadiv.innerHTML = `  <h2>${harcama}</h2>
<h2 id="fiyatvalue">${fiyat}</h2>
<div class="buttons">
<img id="pay" src="pay.png"/>
<img id="remove" src="remove.png"/>
</div>


`;
  updateFiyat(fiyat);

  harcamalistesi.appendChild(harcamadiv);

  harcamainput.value = "";
  fiyatinput.value = "";
}

function handleChange(e) {
  let filitredegeri = e.target.value;

  let listedekiitemler = harcamalistesi.childNodes;

  listedekiitemler.forEach((listitem) => {
    switch (filitredegeri) {
      case "all":
       listitem.style.display="flex"
        break;
      case "payed":
        if(!listitem.classList.contains("payed")){
          listitem.style.display="none"
        }else{
          listitem.style.display="flex"
        }
        break;
      case "not-payed":
        if(listitem.classList.contains("payed")){
          listitem.style.display="none"
        }else{
          listitem.style.display="flex"
        }
        break;
    }
  });
}
