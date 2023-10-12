const randomNumbers = Math.floor(Math.random() * 90 + 1);

const createCells = () => {
  const tombola = document.getElementById("tombola");

  for (let i = 0; i < 91; i++) {
    const randomNumberDiv = document.createElement("div");
    randomNumberDiv.classList.add("tCell");

    const randomNumberContent = document.createElement("h3");
    randomNumberContent.innerText = i;

    randomNumberDiv.appendChild(randomNumberContent);
    tombola.appendChild(randomNumberDiv);
  }
};

const getOutNumber = (window.onload = () => {
  createCells();
});
