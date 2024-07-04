const category_pluses = document.querySelector("#category-section>#pluses");

for (let i = 0; i < 25; ++i) {
  const plus = document.createElement('span');
  plus.textContent = "+";
  if (i === 0)
    plus.className = "red";
  if (i === 13)
    plus.className = "violet";
  if (i === 15 || i === 20 || i === 21)
    plus.className = "none";

  category_pluses.appendChild(plus);
}
