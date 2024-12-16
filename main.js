// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data) 
      for (item of data["restaurants"]) {
        
        document.querySelector('.restaurant_tcontainer').innerHTML += `
        <div class="customcard col-lg-4 col-10">
                <img src="./img/1b6b82b0-c1bf-47f5-9ad8-10b26eeed083.jpg" alt="photo-restau" class="imgcard">
                <div class="row justify-content-between">
                    <h2 class="col-9 titlecard">
                        Horlys
                    </h2>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro1"><i
                            class="fa-solid fa-utensils"></i></button>
                </div>
                <p class="desccard">357 rue Beaumarchais, Le Havre</p>
                <div class="modal" tabindex="-1" id="exemplenuméro1">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="d-flex flex-row-reverse mx-1">
                                <a href="tel:+330000000" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                                <a href="#" class="ctamodal"><i class="fa-solid fa-globe"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        `
      }
      for (item of data["cultural"]) { 
        
        document.querySelector('.sorties_tcontainer').innerHTML += `
        <div class="customcard col-lg-4 col-10">
                <img src="./img/1b6b82b0-c1bf-47f5-9ad8-10b26eeed083.jpg" alt="photo-restau" class="imgcard">
                <div class="row justify-content-between">
                    <h2 class="col-9 titlecard">
                        Horlys
                    </h2>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro1"><i
                            class="fa-solid fa-utensils"></i></button>
                </div>
                <p class="desccard">357 rue Beaumarchais, Le Havre</p>
                <div class="modal" tabindex="-1" id="exemplenuméro1">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="d-flex flex-row-reverse mx-1">
                                <a href="tel:+330000000" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                                <a href="#" class="ctamodal"><i class="fa-solid fa-globe"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        `
      }
      for (item of data["addresses"]) { 
        document.querySelector('.adresses_tcontainer').innerHTML += `
        <div class="customcard col-lg-4 col-10">
                <img src="./img/1b6b82b0-c1bf-47f5-9ad8-10b26eeed083.jpg" alt="photo-restau" class="imgcard">
                <div class="row justify-content-between">
                    <h2 class="col-9 titlecard">
                        Horlys
                    </h2>
                    <button type="button" class="fork" data-bs-toggle="modal" data-bs-target="#exemplenuméro1"><i
                            class="fa-solid fa-utensils"></i></button>
                </div>
                <p class="desccard">357 rue Beaumarchais, Le Havre</p>
                <div class="modal" tabindex="-1" id="exemplenuméro1">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="d-flex flex-row-reverse m-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>


                            <div class="d-flex flex-row-reverse mx-1">
                                <a href="tel:+330000000" class="ctamodal"><i class="fa-solid fa-phone"></i></a>
                                <a href="#" class="ctamodal"><i class="fa-solid fa-globe"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        `
      }
    
  })
  .catch(error => console.error(error)); // en cas d'erreur, nous affichons un message d'erreur dans la console.