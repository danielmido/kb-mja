const tombolGenerasi1NFL = document.getElementById('tombolGenerasi1NFL');
const tombolGenerasi1FL = document.getElementById('tombolGenerasi1FL');
const tombolGenerasi2 = document.getElementById('tombolGenerasi2');

const kontenUtama = document.getElementById('kontenUtama');

function removeKontenUtama() {
  kontenUtama.innerHTML = '';
}

tombolGenerasi1NFL.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtvj3qYJdh6geeglP_6ZMJkoNRDtquNbUv9yec0q8BECmLGJqohov6ULWNCagRG_gLgqoUjao9ZZkOAdl7Y951ZSLYEz8_KjWGoB8qRsRYgOUAeka4NTky_FS1TFNVshmn2DFn9W9bWOtofgauKCONsmx0vjZ2faJPWsIVpxetaUgETsZsk7wnCpLA/s1600/brv%20g1%20nfl.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 1 Non-Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Jan 2016 - Apr 2019)</p>

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
            <span class="fs-5">E Prestige CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
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
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiN0OOz4sA3C-AtXX42roA84HK_HRAJ9TbfVSnVEFTYbk2aUb1At4whoSZ85HY2hpEu8oDntMH_CLBKi9vLP3DrXp8cTglEfFeRvfIcufKnrlrkioS1RJO8xtIGzU48HsWyScjr_Ek5NiuTR9HAd4OMlXoOqrLLS6u17og_Xf9dD7yTKpDvOtjcfSFu/s1600/brv%20g1%20fl.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 1 Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Apr 2019 - Des 2021)</p>

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
            <span class="fs-5">E Prestige CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

tombolGenerasi2.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGvANxz3hkJA3YTYVhHm2kF1WnmB6phsBaGn06cdAG03NsiHWrY-sjxYZLzUXSZKCgVHR4McnQ30HreY4XXJnua3MCIGAM5k2imqn5U2TnzS5Al4xsWWUB_G1rXYJS8ptg9oUc1BW4RERmveR5e_hZkEpPTeRBH-7lREdaRSAVy5E83NA4QP94w9ru/s1600/1806px-2022_Honda_BR-V_1.5_E_%28front%29.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 2</p>
      <p class="fs-6 mb-3 fw-light">(Des 2021 - Sekarang)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card cardBig">
            <span class="fs-5">S MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">E MT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">E CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">E Prestige CVT</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">E Prestige CVT with Honda Sensing</span>
            <span class="fs-6 fw-light">7 Seats &bull; 1500cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

