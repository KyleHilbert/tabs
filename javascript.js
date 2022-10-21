const textContainer = document.querySelector(".textPart");

const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

const text = document.createElement("p");
text.style.margin = "0";
text.style.padding = "20px";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "tab1") {
      text.textContent = "Tab1";
      tab2.style.backgroundColor = "lightGray";
      tab3.style.backgroundColor = "lightGray";
      button.style.backgroundColor = "orange";
      textContainer.style.backgroundColor = "orange";
      textContainer.appendChild(text);
    } else if (button.id === "tab2") {
      text.textContent = "Tab2";
      tab1.style.backgroundColor = "lightGray";
      tab3.style.backgroundColor = "lightGray";
      button.style.backgroundColor = "blue";
      textContainer.style.backgroundColor = "blue";
      textContainer.appendChild(text);
    } else if (button.id === "tab3") {
      text.textContent = "Tab3";
      tab1.style.backgroundColor = "lightGray";
      tab2.style.backgroundColor = "lightGray";
      button.style.backgroundColor = "green";
      textContainer.style.backgroundColor = "green";
      textContainer.appendChild(text);
    }
  });
});
