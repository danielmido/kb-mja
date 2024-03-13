const tombolGenerasi2FL = document.getElementById('tombolGenerasi2FL');
const tombolGenerasi2NFL = document.getElementById('tombolGenerasi2NFL');
const tombolGenerasi1FL = document.getElementById('tombolGenerasi1FL');
const tombolGenerasi1_2013 = document.getElementById('tombolGenerasi1_2013');
const tombolGenerasi1_2012 = document.getElementById('tombolGenerasi1_2012');

const kontenUtama = document.getElementById('kontenUtama');

function removeKontenUtama() {
  kontenUtama.innerHTML = '';
}

tombolGenerasi2FL.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8MovcxHRGb_eGMNMAJIY32pJBoMfwNQKuYWydqo7Pgtezcy3E08kxtF7W6uEOi-Mh95C-M_XFiIuvPzUL4LprBcWMupULcYCFRDZXPgwA5vYW2hpNoOSScET_5hgdJH45ivsB4H5b0IvNC0BKbDONw_gfgJ_sUvNmXyvFBR20Rb_3V9TSvKFyVDLi/s1600/3600px-2023_Honda_Brio_RS_%28Indonesia%29_front_view.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 2 Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Mei 2023 - Sekarang)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">Satya S MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">Satya E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">Satya E CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">RS CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

tombolGenerasi2NFL.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXo9n1725deLmCcr689PQslWH0o0kB5QXxjwWYn51HWdZuYv4gK4RFb_jfyR8vn8iREc7kxOBpWwTIRKMDL-Mr93hDXN-M4bgEcqY6E42NCQxaao2L1I0qkcGiSdt6R4ZZdjdJUXhERU5LF3uqH5DYKwksBlUleHoq_po6cyDgQZuDKcBhfF8QAG6s/s1600/2022_Honda_Brio_RS_Urbanite,_IIMS_Hybrid,_Grand_City,_Central_Surabaya_%28cropped%29.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 2 Non-Facelift</p>
      <p class="fs-6 mb-3 fw-light">(Agustus 2018 - Mei 2023)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card cardBig">
            <span class="fs-5">Satya S MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">Satya E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">Satya E CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">RS CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">RS Urbanite Edition <br>CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
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
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAdKGxU7ESlsI9Ma5iB1y50fBChqVNxKKlCG8VkKEgTO8IjbaKR1kIcg_u1BdN-nMehd8EKod2K9Ji2_5JEqcaerHME1CtGS8b5WVwcbsVgtMXCTLvVCMIdA2rpHsgaElGRIVvNxXsEX3PbJSOSBVeFS8V3f2dc8t5yIruQkqVUlx6HWTq-d0MT9Wc/s1600/3600px-2017_Honda_Brio_RS_1.2_DD1_%2820191020%29.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 1 Facelift</p>
      <p class="fs-6 mb-3 fw-light">(April 2016 - Agustus 2018)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card cardBig">
            <span class="fs-5">Satya S MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">Satya E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">Satya E CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">RS MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card cardBig">
            <span class="fs-5">RS CVT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

tombolGenerasi1_2013.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfDWONJWW8pJfr48F7GU7wJvgqzp-Iit4dI7umdxpI9SASgygXlvJ4pix5MM3OfV3EmCfi4jb9mzG7oEPtYIq6oK6e2bdy03waFlG_ddZonadEdHVvuHVAh3RVJabKPF56SYYW71rBEg2K-X0u_bkAI7uBfYDTYUdYNwIPuSpQ_WQQGk6PwdkdykLW/s1600/Honda_Brio_S_1.3_-_Front_view_-_February_2_2014.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 1 Non-Facelift (2013)</p>
      <p class="fs-6 mb-3 fw-light">(September 2013 - April 2016)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">Satya A MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">Satya S MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">Satya E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">S AT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E AT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1200cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">Sports E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1300cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">Sports E AT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1300cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});

tombolGenerasi1_2012.addEventListener('click', () => {
  removeKontenUtama();
  kontenUtama.innerHTML = /* html */`
  <div class="row mt-4 mt-lg-5 px-lg-2 py-lg-5 latarIsi normalisasiMargin">
    <div class="col-lg-6">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUgKgTNz5OQ-jceijtl99X-byH3oA5JAso-xdn3C3cgYbQtPEx8nvgJftDf0T5OsabK4hg9HPer_xrhP8PXifCvBBuXwxRVvqgaUjkzZZYYLhYBN5nRYsWyqtF0CeIhnp8mZAklx1ye9KJA_DxcAVVZhjSWMHhiPtmzMNw2_6wdCc2gLAC0SpjM-Ho/s1600/brio.jpg"
        alt="gambar" class="img-fluid roundedFoto">
    </div>

    <div class="col-lg-6 pt-3 ps-lg-5 pt-lg-0">
      <p class="fs-2 mb-0">Generasi 1 Non-Facelift (2012)</p>
      <p class="fs-6 mb-3 fw-light">(Agustus 2012 - September 2013)</p>

      <p class="fs-5 fw-semibold">Tipe:</p>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <ul class="carousel text-center overflow-hidden">
          <li class="card">
            <span class="fs-5">S MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1300cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">S AT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1300cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E MT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1300cc &bull; Bensin</span>
          </li>
          <li class="card">
            <span class="fs-5">E AT</span>
            <span class="fs-6 fw-light">5 Seats &bull; 1300cc &bull; Bensin</span>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  `
});