// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// <div class="customcard col-lg-4 col-10">
//         <img src="${item.image}" alt="photo-restau" class="imgcard w-100">
//         <div class="row justify-content-between">
//               <div class="col-9">
//             <h2 class="col-9 titlecard">
//                 ${item.name}
//             </h2>

//         <p class="desccard">${item.address}</p>
//             </div>
//             <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}"><i
//                     class="fa-solid fa-utensils"></i></button>
//         </div>
//         <div class="modal" tabindex="-1" id="exemplenuméro${i}">
//             <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//                 <div class="modal-content">
//                     <div class="d-flex flex-row-reverse m-2">
//                         <button type="button" class="btn-close" data-bs-dismiss="modal"
//                             aria-label="Close"></button>
//                     </div>
//                     <p>${item.description}</p>

//                     <div class="d-flex flex-row-reverse mx-1">
//                         <a href="tel:+330000000" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
//                         <a href="#" class="ctamodal"><i class="fa-solid fa-globe"></i></a>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>

fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let i = 0;
        for (item of data["restaurants"]) {

            document.querySelector(".restaurant_tcontainer").innerHTML += `
                <div class="customcard col-lg-4 col-10" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}">
                    <img src="${item.image}" alt="photo-restau" class="imgcard w-100">
                    <div class="row justify-content-between">
                        <div class="col-9">
                            <h2 class="col-9 titlecard">
                                ${item.name}
                            </h2>
                            <p class="desccard">${item.address}</p>
                         </div>
        <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}"><i
                class="fa-solid fa-utensils"></i></button>
        </div>
        <div class="modal" tabindex="-1" id="exemplenuméro${i}">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="d-flex flex-row-reverse m-2">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <p>${item.description}</p>

                    <div class="d-flex flex-row-reverse mx-1">
                        <a href="tel:+330000000" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                        <a href="#" class="ctamodal"><i class="fa-solid fa-globe"></i></a>
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
                <img src="${item.image}" alt="photo-restau" class="imgcard w-100">
                    <div class="row justify-content-between">
                        <div class="col-9">
                            <h2 class="col-9 titlecard">
                                ${item.name}
                            </h2>
                            <p class="desccard">${item.address}</p>
                         </div>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro${i}"><i class="fa-solid fa-location-dot"></i></button>

                <div class="modal" tabindex="-1" id="exemplenuméro${i}">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <p>${item.description}</p>
                            <div class="d-flex flex-row-reverse mx-1">
                                <a href="tel:+330000000" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                                <a href="#" class="ctamodal"><i class="fa-solid fa-globe"></i></a>
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
                <img src="${item.image}" alt="photo-restau" class="imgcard w-100">
                                    <div class="row justify-content-between">
                        <div class="col-9">
                            <h2 class="col-9 titlecard">
                                ${item.name}
                            </h2>
                            <p class="desccard">${item.address}</p>
                         </div>
                    <button type="button" class="fork" data-bs-toggle="modal"  data-bs-target="#exemplenuméro${i}"><i class="fa-solid fa-house-flag"></i></button>
                </div>
                <div class="modal" tabindex="-1" id="exemplenuméro${i}">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                        
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                                    
                            </div>
                            <p>${item.description}</p>

                            <div class="d-flex flex-row-reverse mx-1">
                                <a href="tel:+330000000" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                                <a href="#" class="ctamodal"><i class="fa-solid fa-globe"></i></a>
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
