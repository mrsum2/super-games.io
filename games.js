const games = [
    { name: "Minecraft", url: "games/minecraft.html" },
    { name: "Pac-Man", url: "games/pacman.html" },
    { name: "Tetris", url: "games/tetris.html" },
    // Add more games here
];

const gameList = document.getElementById("game-list");

games.forEach(game => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = game.url;
    link.textContent = game.name;
    listItem.appendChild(link);
    gameList.appendChild(listItem);
});
