let movies = {
  data: [
    {
      movieName: "Jurassic World Dominion",
      category: "Action",
      rating: "4.5",
      image: "images/jw.jpg",
      overview: "Four years after the second opus Jurassic World: Fallen Kingdom (2018), the third part of the saga Jurassic World: Dominion is finally out now. Although the film left us wanting more, the comeback of the first film's cast, the arrival of giant grasshoppers."
    },
    {
      movieName: "The Making of Doctor Strange in the Multiverse of Madness",
      category: "Action",
      rating: "5.8",
      image: "images/dr.jpg",
      overview: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse."
    },
    {
      movieName: "Annabelle: Creation",
      category: "Horror",
      rating: "7.5",
      image: "images/conju.jpg",
      overview: "Samuel and Elle embed their daughter's spirit into a doll, only to realise it is a demon. Years later, they open their home to a nun and six orphan girls, one of whom finds the doll."
    },
    {
      movieName: "The Hunger Games: Mockingjay - Part 1",
      category: "Action",
      rating: "8.6",
      image: "images/top.jpg",
      overview: "After putting a permanent end to the games, Katniss Everdeen, Gale, Finnick and Beetee join forces to save Peeta and a nation that she has inspired by her courage."
    },
    {
      movieName: "Don't Breathe 2",
      category: "Thriller",
      rating: "7.2",
      image: "images/dont.jpg",
      overview: "Norman, a visually challenged navy veteran, lives in quiet solace with his foster daughter, Phoenix. However, he is forced to tap into his darker instincts when Phoenix is abducted."
    },
    {
      movieName: "Intrusion",
      category: "Thriller",
      rating: "6.5",
      image: "images/intru.jpg",
      overview: "When a husband and wife move to a small town, a home invasion leaves the wife traumatized and suspicious that those around her might not be who they seem."
    },
    {
      movieName: "Jumanji: Welcome to the Jungle",
      category: "Adventure",
      rating: "9.3",
      image: "images/juma.jpg",
      overview: "When four students play with a magical video game, they are drawn to the jungle world of Jumanji, where they are trapped as their avatars. To return to the real world, they must finish the game."
    },
    {
      movieName: "Pirates of the Caribbean: The Curse of the Black Pearl",
      category: "Adventure",
      rating: "9.5",
      image: "images/pirates.jpg",
      overview: "A blacksmith joins forces with Captain Jack Sparrow, a pirate, in a bid to free the love of his life from Jack's associates, who kidnapped her suspecting she has the medallion."
    },
    {
      movieName: "Monster House",
      category: "Horror",
      rating: "6.5",
      image: "images/monster.jpg",
      overview: "Three teenagers discover that their neighbour's house is actually a monster that hates children. Soon, they decide to destroy the heart of the house and kill it."
    },
  ],
};

for (let i of movies.data) {

  //Create Card
  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");

  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");


  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);

  let imgOverlay = document.createElement("div");
  imgOverlay.classList.add("image-overlay");
  imgContainer.appendChild(imgOverlay);

  let imgText = document.createElement("div");
  imgText.classList.add("image-text");
  imgText.innerText = i.overview;
  imgOverlay.appendChild(imgText);

  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  //movie name
  let name = document.createElement("h5");
  name.classList.add("movie-name");
  name.innerText = i.movieName.toUpperCase();
  container.appendChild(name);

  //rating
  let rating = document.createElement("h6");
  rating.innerText = i.rating;
  container.appendChild(rating);

  card.appendChild(container);
  document.getElementById("movies").appendChild(card);
}

//button
function filterMovie(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {

  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".movie-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterMovie("all");
};
