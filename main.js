// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
let i = 0;
function parcourir_tout() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (item of data["restaurants"]) {
        document.querySelector(".restaurant_tcontainer").innerHTML += `


        <div class="customcard col-lg-4 col-10" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}">
        <img src="${item.image}" alt="image_${item.name}" class="imgcard">
        <div class="row justify-content-between">
            <div class="col-9">
                <h2 class="col-9 titlecard">
                    ${item.name}
                </h2>

                <p class="desccard fst-italic text-secondary">${item.address}</p>
                <p class="desccard">${item.description}</p>
            </div>
            <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}" aria-label="restaurants"><i
                    class="fa-solid fa-utensils"></i></button>
        </div>
        <div class="modal" tabindex="-1" id="exemplenuméro${i}">
            <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="d-flex flex-row-reverse m-2">
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <img src="${item.image2}" alt="image_${item.name}" class="imgcard-in">

                    <div class="d-flex row m-3">
                        <div class="d-flex flex-column col-lg-8 col-12">
                            <p class="titlecard">${item.name}</p>
                            <p class="desccard-in fst-italic text-secondary my-3">${item.address}</p>
                            <p class="desccard-in mb-4">${item.description2}</p>
                        </div>


                        <div class="d-flex row mx-1 col-lg-3 col-12 align-items-center justify-content-end gap-2">
                            <a href="tel:${item.tel}" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                            <a href="${item.website}" class="ctamodal" target="_blank"><i
                                    class="fa-solid fa-globe"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        `;
        i++;
      }
      for (item of data["cultural"]) {
        document.querySelector(".sorties_tcontainer").innerHTML += `
     <div class="customcard col-lg-4 col-10" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}">
                <img src="${item.image}" alt="image_${item.name}" class="imgcard">
                <div class="row justify-content-between">
                      <div class="col-9">
                    <h2 class="col-9 titlecard">
                        ${item.name}
                    </h2>

                <p class="desccard fst-italic text-secondary">${item.address}</p>
                <p class="desccard">${item.description}</p>
                    </div>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}" aria-label="Sortie culturelle"><i class="fa-solid fa-house-flag"></i></button>
                </div>
                <div class="modal" tabindex="-1" id="exemplenuméro${i}">
                    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <img src="${item.image2}" alt="image_${item.name}" class="imgcard-in">
                              <div class="d-flex row m-3">
                        <div class="d-flex flex-column col-lg-8 col-12">
                            <p class="titlecard">${item.name}</p>
                            <p class="desccard-in fst-italic text-secondary my-3">${item.address}</p>
                            <p class="desccard-in mb-4">${item.description2}</p>
                        </div>


                        <div class="d-flex row mx-1 col-lg-3 col-12 align-items-center justify-content-end gap-2 text-center">
                            <a href="tel:${item.tel}" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                            <a href="${item.website}" class="ctamodal" target="_blank"><i
                                    class="fa-solid fa-globe"></i></a>
                        </div>

                    </div>

                        </div>
                    </div>
                </div>
            </div>
        `;
        i++;
      }
      for (item of data["addresses"]) {
        document.querySelector(".adresses_tcontainer").innerHTML += `
       <div class="customcard col-lg-4 col-10" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}">
                <img src="${item.image}" alt="image_${item.name}" class="imgcard">
                <div class="row justify-content-between">
                      <div class="col-9">
                    <h2 class="col-9 titlecard">
                        ${item.name}
                    </h2>

                <p class="desccard fst-italic text-secondary">${item.address}</p>
                <p class="desccard">${item.description}</p>
                    </div>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}" aria-label="Bonnes adresses"><i class="fa-solid fa-location-dot"></i></button>
                </div>
                <div class="modal" tabindex="-1" id="exemplenuméro${i}">
                    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <img src="${item.image2}" alt="image_${item.name}" class="imgcard-in">
                         <div class="d-flex row m-3">
                        <div class="d-flex flex-column col-lg-8 col-12">
                            <p class="titlecard">${item.name}</p>
                            <p class="desccard-in fst-italic text-secondary my-3">${item.address}</p>
                            <p class="desccard-in mb-4">${item.description2}</p>
                        </div>


                        <div class="d-flex row mx-1 col-lg-3 col-12 align-items-center justify-content-end gap-2">
                            <a href="tel:${item.tel}" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                            <a href="${item.website}" class="ctamodal" target="_blank"><i
                                    class="fa-solid fa-globe"></i></a>
                        </div>

                    </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        i++;
      }
    })
    .catch((error) => console.error(error)); // en cas d'erreur, nous affichons un message d'erreur dans la console.
}
parcourir_tout();
function afficher_tout() {
  document.querySelector(
    ".restaurant_container"
  ).innerHTML = `<h1 class="text-sm-end bigtitle" id="scroll_restaurant">... une petite faim ?</h1>
        <div class="row justify-content-center gap-5 restaurant_tcontainer"></div> `;
  document.querySelector(
    ".sorties_container"
  ).innerHTML = ` <h1 class="text-sm-end bigtitle" id="scroll_sorties" >... une sortie ?</h1>
        <div class="row justify-content-center gap-5 sorties_tcontainer"></div> `;
  document.querySelector(
    ".adresses_container"
  ).innerHTML = ` <h1 class="text-sm-end bigtitle" id="scroll_adresses" >... les bonnes adresses ?</h1>
        <div class="row justify-content-center gap-5 adresses_tcontainer"></div> `;
  parcourir_tout();
}

function afficher_restau() {
  document.querySelector(".sorties_container").innerHTML = "";
  document.querySelector(".adresses_container").innerHTML = "";
  document.querySelector(
    ".restaurant_container"
  ).innerHTML = `<h1 class="text-sm-end bigtitle" id="scroll_restaurant">... une petite faim ?</h1>
        <div class="row justify-content-center gap-5 restaurant_tcontainer"></div> `;

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (item of data["restaurants"]) {
        document.querySelector(".restaurant_tcontainer").innerHTML += `
       <div class="customcard col-lg-4 col-10" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}">
                <img src="${item.image}" alt="image_${item.name}" class="imgcard">
                <div class="row justify-content-between">
                      <div class="col-9">
                    <h2 class="col-9 titlecard">
                        ${item.name}
                    </h2>

                <p class="desccard fst-italic text-secondary">${item.address}</p>
                <p class="desccard">${item.description}</p>
                    </div>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}" aria-label="restaurant"><i
                            class="fa-solid fa-utensils"></i></button>
                </div>
                <div class="modal" tabindex="-1" id="exemplenuméro${i}">
                    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <img src="${item.image2}" alt="image_${item.name}" class="imgcard-in">
                             <div class="d-flex row m-3">
                        <div class="d-flex flex-column col-lg-8 col-12">
                            <p class="titlecard">${item.name}</p>
                            <p class="desccard-in fst-italic text-secondary my-3">${item.address}</p>
                            <p class="desccard-in mb-4">${item.description2}</p>
                        </div>


                        <div class="d-flex row mx-1 col-lg-3 col-12 align-items-center justify-content-end gap-2">
                            <a href="tel:${item.tel}" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                            <a href="${item.website}" class="ctamodal" target="_blank"><i
                                    class="fa-solid fa-globe"></i></a>
                        </div>

                    </div>

                        </div>
                    </div>
                </div>
            </div>
        `;
        i++;
      }
    });
}
function afficher_sortie() {
  document.querySelector(".restaurant_container").innerHTML = "";
  document.querySelector(".adresses_container").innerHTML = "";
  document.querySelector(
    ".sorties_container"
  ).innerHTML = ` <h1 class="text-sm-end bigtitle" id="scroll_sorties" >... une sortie ?</h1>
        <div class="row justify-content-center gap-5 sorties_tcontainer"></div> `;

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (item of data["cultural"]) {
        document.querySelector(".sorties_tcontainer").innerHTML += `
       <div class="customcard col-lg-4 col-10" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}">
                <img src="${item.image}" alt="image_${item.name}" class="imgcard">
                <div class="row justify-content-between">
                      <div class="col-9">
                    <h2 class="col-9 titlecard">
                        ${item.name}
                    </h2>

                <p class="desccard fst-italic text-secondary">${item.address}</p>
                <p class="desccard">${item.description}</p>
                    </div>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}" aria-label="sortie-culturelle"><i class="fa-solid fa-house-flag"></i></button>
                </div>
                <div class="modal" tabindex="-1" id="exemplenuméro${i}">
                    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <img src="${item.image2}" alt="image_${item.name}" class="imgcard-in">
                            <div class="d-flex row m-3">
                        <div class="d-flex flex-column col-lg-8 col-12">
                            <p class="titlecard">${item.name}</p>
                            <p class="desccard-in fst-italic text-secondary my-3">${item.address}</p>
                            <p class="desccard-in mb-4">${item.description2}</p>
                        </div>


                        <div class="d-flex row mx-1 col-lg-3 col-12 align-items-center justify-content-end gap-2">
                            <a href="tel:${item.tel}" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                            <a href="${item.website}" class="ctamodal" target="_blank"><i
                                    class="fa-solid fa-globe"></i></a>
                        </div>

                    </div>

                        </div>
                    </div>
                </div>
            </div>
        `;
        i++;
      }
    });
}
function afficher_adresses() {
  document.querySelector(".restaurant_container").innerHTML = "";
  document.querySelector(".sorties_container").innerHTML = "";
  document.querySelector(
    ".adresses_container"
  ).innerHTML = ` <h1 class="text-sm-end bigtitle" id="scroll_adresses" >... les bonnes adresses ?</h1>
        <div class="row justify-content-center gap-5 adresses_tcontainer"></div> `;

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (item of data["addresses"]) {
        document.querySelector(".adresses_tcontainer").innerHTML += `
       <div class="customcard col-lg-4 col-10" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}">
                <img src="${item.image}" alt="image_${item.name}" class="imgcard">
                <div class="row justify-content-between">
                      <div class="col-9">
                    <h2 class="col-9 titlecard">
                        ${item.name}
                    </h2>

                <p class="desccard fst-italic text-secondary">${item.address}</p>
                <p class="desccard">${item.description}</p>
                    </div>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}" aria-label="bonnes-adresses"><i class="fa-solid fa-location-dot"></i></button>
                </div>
                <div class="modal" tabindex="-1" id="exemplenuméro${i}">
                    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                                 <img src="${item.image2}" alt="image_${item.name}" class="imgcard-in">
                              <div class="d-flex row m-3">
                        <div class="d-flex flex-column col-lg-8 col-12">
                            <p class="titlecard">${item.name}</p>
                            <p class="desccard-in fst-italic text-secondary my-3">${item.address}</p>
                            <p class="desccard-in mb-4">${item.description2}</p>
                        </div>


                        <div class="d-flex row mx-1 col-lg-3 col-12 align-items-center justify-content-end gap-2">
                            <a href="tel:${item.tel}" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                            <a href="${item.website}" class="ctamodal" target="_blank"><i
                                    class="fa-solid fa-globe"></i></a>
                        </div>

                    </div>

                        </div>
                    </div>
                </div>
            </div>
        `;
        i++;
      }
    });
}
