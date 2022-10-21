const textContainer = document.querySelector(".textPart");

const text = document.createElement("p");
text.style.margin = "0";
text.style.padding = "20px";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);

    if (button.id === "tab1") {
      text.textContent = "Tab1";
      button.style.backgroundColor = "orange";
      textContainer.style.backgroundColor = "orange";
      textContainer.appendChild(text);
    } else if (button.id === "tab2") {
      text.textContent = "Tab2";
      button.style.backgroundColor = "blue";
      textContainer.style.backgroundColor = "blue";
      textContainer.appendChild(text);
    } else if (button.id === "tab3") {
      text.textContent = "Tab3";
      button.style.backgroundColor = "green";
      textContainer.style.backgroundColor = "green";
      textContainer.appendChild(text);
    }
  });
});
