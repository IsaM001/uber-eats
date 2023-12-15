"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //defining selectors
  const userInput = document.getElementById("search");
  const searchBtn = document.getElementById("button");
  const restartBtn = document.getElementById("restart");
  const resultContainer = document.querySelector(".main");

  //Function that will be used to call later
  function handleSearch() {
    const userInputValue = userInput.value.toLowerCase();
    const cuisineCards = document.querySelectorAll(".flex-item");

    let anyCardDisplayed = false; // Flag to check if any card is displayed

    cuisineCards.forEach((card) => {
      const cardText = card.querySelector(".text").textContent.toLowerCase();
      card.style.display =
        userInputValue === "" || cardText === userInputValue ? "flex" : "none"; //ternary operator truthy falsy

      // Check if the card is displayed
      if (card.style.display === "flex") {
        anyCardDisplayed = true;
        const elements = document.querySelectorAll(".rest-hidden");

        elements.forEach(function (element) {
          element.classList.remove("rest-hidden");
        });
      }
    });

    // If no card is displayed, append an h2 to the result container
    if (!anyCardDisplayed && userInputValue !== "") {
      const noResultElement = document.createElement("h2");
      noResultElement.textContent =
        "No matching cards found. Click restart and try again";
      resultContainer.appendChild(noResultElement);
      // Reload the page after half 1 second
      setTimeout(function () {
        location.reload();
      }, 1000);
    }
  }

  // Event listener for button click
  searchBtn.addEventListener("click", handleSearch);

  // Event listener for Enter key press
  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  //reloads the page
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
});
