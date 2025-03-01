const games = [
    { name: "Minecraft", url: "games/minecraft.html", img: "https://tse4.mm.bing.net/th?id=OIP.l6MZZynh7ZPVmvvTNNvAFAHaEK&pid=Api&P=0&h=180" },
    { name: "Pac-Man", url: "games/pacman.html", img: "https://tse1.mm.bing.net/th?id=OIP._Gw9uH3x7VwKX4nODkjlcQHaEK&pid=Api&P=0&h=180" },
    { name: "Tetris", url: "games/tetris.html", img: "https://pkmanager.twingalaxies.com/assets/article/2019/06/06/tetris-celebrates-its-35th-anniversary-with-new-logo-events_feature.jpg" },
    // Add more games here
];

const gameList = document.getElementById("game-list");

games.forEach(game => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = game.url;
    
    const image = document.createElement("img");
    image.src = game.img;
    image.alt = game.name;

    const name = document.createElement("span");
    name.textContent = game.name;

    link.appendChild(image);
    link.appendChild(name);
    listItem.appendChild(link);
    gameList.appendChild(listItem);
});
