// Pengukuran divPlaceholder
const navElement = document.getElementById('navElement').offsetHeight;
const tombolPilihElement = document.getElementById('tombolPilihElement').offsetHeight;
const kontenUtamaElement = document.querySelector('.kontenUtamaElement').offsetHeight;
const footerElement = document.getElementById('footerElement').offsetHeight;
const divPlaceholder = document.querySelector('.divPlaceholder');

let variabelPenguranganPlaceholder = `${navElement + tombolPilihElement + kontenUtamaElement + footerElement}px`;
document.documentElement.style.setProperty(`--penguranganPlaceholder`, variabelPenguranganPlaceholder);

// Tombol pilih generasi
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});

// Card slider
const wrapper = document.querySelector('.wrapper');

document.addEventListener('click', e => {
  if (e.target.closest('.wrapper') && e.target.matches('#left, #right')) {
    const carousel = document.querySelector('.carousel');
    const firstCardWidth = carousel.querySelector('.card').offsetWidth;
    carousel.scrollLeft += e.target.id === 'left' ? -firstCardWidth : firstCardWidth;
  }
});


