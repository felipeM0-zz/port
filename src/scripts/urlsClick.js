function sendMeToUrl(type) {
  type == "linkedin"
    ? window.open("https://www.linkedin.com/in/luis-felipe-9088471b7", "_blank")
    : type == "face"
    ? window.open("https://www.facebook.com/feliph.moreira", "_blank")
    : type == "insta"
    ? window.open("https://www.instagram.com/feliphmoreira", "_blank")
    : type == "git"
    ? window.open("https://github.com/felipeM0", "_blank")
    : type == "mail"
    ? window.open("mailto:felipemoreira.97@hotmail.com")
    : type == "tel"
    ? window.open("tel:98996119832")
    : null;
}
