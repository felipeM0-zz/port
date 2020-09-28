function sendNew(v, id) {
  let elclick = document.getElementById(id);
  let el = elclick.parentElement;

  addAllCards(v, elclick.classList.contains("active"));

  for (let i = 0; i < 3; i++) {
    el.children[i].classList.remove("active", "pulse");
  }
  elclick.classList.add("active", "pulse");
}
