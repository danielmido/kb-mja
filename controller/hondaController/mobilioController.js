const FL = document.getElementById('FL');
const NFL = document.getElementById('NFL');

const kontenUtama = document.getElementById('kontenUtama');

function removeKontenUtama() {
  kontenUtama.innerHTML = '';
}

FL.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0EBLhAVwvhyphenhyphenlw6wRZFoBVT7HTULk9TIowq5faZuz2_WGFFzSBP26nwYSADbM6qKWIE-60Bgv1sK6HRYkVmmIvmXGM_9-ouNFfP0ZKqWiuFICL9GwQQQfj-9HXrp3jMI8moaz2cP8vrr4ljFONt3HGKi0QIL1_KnQaqq79yOwKm0s3uox5JrlZVYid/s1600/3539px-2018_Honda_Mobilio_1.5_RS_wagon_%28DD4;_12-09-2018%29,_South_Tangerang.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Januari 2017 - Sekarang)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">S MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">RS MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">RS CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

NFL.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjur4eIMxM23sVBHfe696R43qzM48fUT53xqjnG-Cb7A3MCklGHx4QdopN7yuokkynp7BNIuZKwzABaxXAsYdmaBKQ-tkcuep9T8hUojySy9nar5gLDCbJ5sQH0Xp1Gn2UjD6Gdr9m1rUGcIxhvUtwSrwLgRDWWEf5VM6v6McH2sRPesU93QqOQLEXW/s1600/1800px-2016_Honda_Mobilio_E_%28Indonesia%29_front_view.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Non-Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Januari 2015 - Januari 2017)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">S MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">RS MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">RS CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});