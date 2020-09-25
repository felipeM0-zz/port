function addAllCards() {
  let elem = document.getElementById("row-cards");
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/felipeM0/port/master/src/scripts/bd.json"
  );

  beforeSend();

  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        elem.innerHTML = "";
        var itens = JSON.parse(xhr.responseText);
        itens.forEach((e) => {
          var card = `<div class="card">
                            <div class="card-image">
                                <img src="${e.url_image}"/>
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
        });
      }
    }
  };
}

function beforeSend() {
  var itens = `<div class="ph-item card">
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
                </div>
                <div class="ph-item card">
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
                </div>
                <div class="ph-item card">
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
                </div>
                <div class="ph-item card">
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
                </div>
                <div class="ph-item card">
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

  document.getElementById("row-cards").innerHTML += itens;
}
