function addAllCards(type, active) {
  if (!active) {
    let elem = document.getElementById("row-cards");
    elem.innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://raw.githubusercontent.com/felipeM0/port/master/src/data/bd.json"
    );

    beforeSend();
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          elem.innerHTML = "";
          let itens = JSON.parse(xhr.responseText);
          itens.forEach((e) => {
            if (e.category == type || type == "Tudo") {
              let card = `<div class="card">
                                    <div class="card-image">
                                        <img class="b-lazy" data-src="${e.url_image}" src="https://www.dkflooring.pt/assets/images/loading.gif" alt="${e.title}"/>
                                    </div>
                                    <div class="card-content">
                                        <p>${e.category}</p>
                                        <div>
                                            <p>${e.title}</p>
                                            <p>${e.year}</p>
                                        </div>
                                    </div>
                                </div>`;

              elem.innerHTML += card;
            }
          });
          let bLazy = new Blazy({ offset: -125 });
        }
      }
    };
  }
}

function beforeSend() {
  let elem = document.getElementById("row-cards");

  let itens = `<div class="ph-item card">
                    <div class="ph-col-4-mod">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="ph-picture responsive-img"/>
                    </div>
                    <div class="ph-col-8-mod">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                        </div>
                        <div class="ph-row">
                            <div class="ph-col-8 big"></div>
                            <div class="ph-col-2 big"></div>
                        </div>
                    </div>
                </div>`;
  for (let i = 0; i < 3; i++) {
    elem.innerHTML += itens;
  }
}
