function msgSwal(title, text) {
  Swal.fire({
    title: title,
    text: text,
    confirmButtonColor: "rgba(0,0,0,0.7)",
    confirmButtnText: "OK",
  });
}

function contactSwal() {
    Swal.fire({
      title: "Contato direto",
      html: `<div class="dv-contant">
              <div class="dv-row">
                <i class="fas fa-phone-square-alt"></i>
                <a onclick="sendMeToUrl('tel')">(98) 99611-9832</a>
              </div>
              <div class="dv-row">
                <i class="fas fa-at"></i>
                <a onclick="sendMeToUrl('mail')">felipemoreira.97@hotmail.com</a>
              </div>
              <div class="dv-row">
                <i class="fab fa-telegram"></i>
                <p>+55 (98) 99611-9832</p>
              </div>
            </div>`,
      showConfirmButton: false,
    });
  }