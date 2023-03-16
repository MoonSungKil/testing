const journalHeader = document.querySelector(".journal_header");

const pdfBanner = document.querySelector(".single_journal_pdf_banner");

const journalHeaderHeight = journalHeader.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollDistance = window.pageYOffset;

  if (scrollDistance > journalHeaderHeight + 48) {
    pdfBanner.classList.add("show_pdf_banner");
  } else {
    pdfBanner.classList.remove("show_pdf_banner");
  }
});

const clickRight = document.querySelector(".author_list_button_right");
const clickLeft = document.querySelector(".author_list_button_left");

const innerAuthorsList = document.querySelector(".authors_list");
const outerAuthorsList = document.querySelector(".authors_list_container");

let currentPosition = 0;
const itemWidth = innerAuthorsList.children[0].offsetWidth;
const maxPosition = -1 * (innerAuthorsList.children.length - 1) * itemWidth;

let moveSection = 0;

clickLeft.addEventListener("click", () => {});

clickRight.addEventListener("click", () => {});
