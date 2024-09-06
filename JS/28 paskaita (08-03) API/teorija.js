// API - pagal uzklausa gaunamas ats.
// fetch() - pasiimamas ats.
// .then() - tolimesni veiksmai su ats: response.json() - perkonvertuojamas gautas JSON stringas.
// stream`as - visa paduodama uzklausos informacija.
// allow cors
// kai gaunam ats is backend, gaunam objekta.
// fetch('url').then(ats => console.log(ats)); - paiimamas visas puslapio html kodas.
// turini reikia isstraukti reikiama dali: ats.text();
// apilist.fun - nemokami api.
// visalaik svarbu pasitikrint ar informacija is backendo gauta sekmingai: .status === "success";

function getPhoto() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((response) => {
      if (response.status !== "success") return;

      document.getElementById(
        "result"
      ).innerHTML = `<img src="${response.message}"/>`;
    });
}
