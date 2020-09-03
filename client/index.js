const container = document.querySelector("#main");
if (container) {
  const Child = function (parent, nodeType, content, className) {
    const node = document.createElement(nodeType);
    className && node.classList.add(className);
    if (content) {
      if (nodeType === "a") {
        node.href = content;
        node.target = "_blank";
        if (className !== "card-link") {
          node.innerText = "Play";
        }
      } else {
        if (className !== "card-front") {
          node.innerText = content;
        } else {
          const p = document.createElement("h2");
          p.classList.add("title");
          p.innerText = content;
          node.appendChild(p);
        }
      }
    }
    parent.appendChild(node);
    return node;
  };

  const Card = function (data) {
    const cardLink = Child(container, "a", data.uri, "card-link");
    const cardContainer = Child(cardLink, "div", "", "card-container");

    const card = Child(cardContainer, "div", "", "card");
    const cardFront = Child(card, "div", data.title, "card-front");
    const cardBack = Child(card, "div", "", "card-back");
    const back = `url(${data.image}) no-repeat center/cover`;

    cardBack.style.background = back;
    cardFront.style.background = back;
    cardLink.title = data.title;
    Child(cardBack, "h1", data.title, "title");
    Child(cardBack, "a", data.uri, "link");
  };

  songs.forEach((card) => Card(card));
}

const submito = (event) => {
  event.preventDefault();

  const {
    target: { title, uri, image },
  } = event;
  if (uri.value === "") {
    return;
  }
  const newSong = {
    title: title.value,
    uri: uri.value.replace(/&list.*/, ""),
    image: image.value,
  };
  songs.push(newSong);
  title.value = "";
  uri.value = "";
  image.value = "";
  console.log(JSON.stringify(songs, null, 2));
};
