function showResume(me) {
  let elem = document.getElementById("flip-box");

  elem.classList.contains("active")
    ? (elem.classList.remove("active"),
      (me.children[0].innerHTML = "Ver meu resumo"))
    : (elem.classList.add("active"),
      (me.children[0].innerHTML = "Ocultar resumo"));
}
