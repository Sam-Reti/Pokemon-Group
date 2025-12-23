const saveButton = document.getElementById("submit");
const inputBox = document.getElementById("pokename");
const pokeCard = document.getElementById("pokecard");

function clearInput() {
  document.getElementById("inputBox").value = "";
}

saveButton.addEventListener("click", () => {
  let poke_name = document.createElement("span");
  poke_name.textContent = inputBox.value;
  pokeCard.append(inputBox.name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${inputBox.value}`)
    .then((response) => {
      return response.json(); // Parses JSON response into native JavaScript objects
    })
    .then((data) => {
      console.log(data); // Handle your data here

      const displayName = document.createElement("span");
      displayName.className = "displayName";
      displayName.textContent = data.species.name;

      const img = document.createElement("img");
      img.src = data.sprites.front_default;
      img.className = "img";
      img.alt = data.name;

      const pokeType = document.createElement("span");
      pokeType.className = "pokeType";
      pokeType.textContent = data.types[0].type.name;

      pokeCard.append(displayName, img, pokeType);
    });

  inputBox.value = "";
  pokeCard.innerHTML = "";
});
