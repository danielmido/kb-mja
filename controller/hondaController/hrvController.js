const tombolGenerasi2 = document.getElementById('tombolGenerasi2');
const tombolGenerasi1FL = document.getElementById('tombolGenerasi1FL');
const tombolGenerasi1NFL = document.getElementById('tombolGenerasi1NFL');

const kontenUtama = document.getElementById('kontenUtama');

function removeKontenUtama() {
  kontenUtama.innerHTML = '';
}

tombolGenerasi2.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWcDFZI5K1Acxjx9nR5FBUdPRQ9Ge-FpEZycjr9h_t6Pee76MqDFCAVvg70vUedizZv8lLWKNGKV-LqVMX9m87jC75gFrz3u66RZQARACFiJTU9EDP9QUSNPj1jPoVjZGShJCx0NRcL_ep04Qi-vvQrELjo9r6L5aBGFlE1MEZLL73ODyHDVN3yACt/s1600/honda-hr-v-2022-di-indonesia-1-20220324100421.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 2</p>
      <p class="fs-6 mb-3 fw-light">(Maret 2022 - Sekarang)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">S CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">SE CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">RS Turbo CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

tombolGenerasi1FL.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEsCyMH10QP26eNez0NunExOI4LX8j2ks6NdNUgk8CBEN8eMP6t4G7cdo8S5tDi1_mXfpbO8w9KQQdzftAdWCOqmv_kI95lvWKhwDQNCozyW14WO43DGjtloat08hJ9kIW0Rc802B2r0IFyGQtOxSB0Nejc2rSRuPrk96KRLfl51ioE48W0rVSPor_/s1600/HR-V-Menadi-Mobil-Honda-Paling-Laris-di-Indonesia-Foto-HPM.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 1 Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Agustus 2018 - Maret 2022)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">S MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E SE CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E Prestige CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1800cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

tombolGenerasi1NFL.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2gOZtyIcgoJPIVU2Q1e1zmHqxMeytU7G79Cek9r_fWYJZphcfyTCoix6D1dEdLJ2X-WloM1qXfY_aQtElnkiwF4YejoyREk1mxZY_jbqPuOXGfLPa_jwgEHatKkkvhjur5X9A3uHQ3O2ARJx4sPlym5dGcUYVjWXfNEeYOn7WgXgWzv95sPNvB1mF/s1600/426556883_122096796578214449_5867899253001769798_n.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 1 Non-Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Januari 2015 - Agustus 2018)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">S MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E Prestige CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1800cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});