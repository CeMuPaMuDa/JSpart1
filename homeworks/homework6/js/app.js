var goodsCatalog = document.querySelector(".cards_catalog");
var goodTitle = ["Фрезье", "Вишневый аромат", "Мокко", "Малиновый"];
var goodImage = 1;
var cardArr = [];

function Catalog(id, title, amount, image) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.image = image;
}

for (i = 0; i <= 3; i++) {
    var card = new Catalog(
        i,
        goodTitle[i],
        parseInt(Math.random() * (1001 - 250) + 250),
        "img/cake-" + goodImage + ".jpg"
    );
    goodImage++;
    cardArr.push(card);
}
console.log(cardArr);
console.log(cardArr[1].title);