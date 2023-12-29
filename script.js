const toggler = document.querySelectorAll(".toggler");
toggler.forEach((li) => {
  li.addEventListener("click", () => {
    let that=this;
    toggler.forEach((elem) => {
      if (elem !== li) {
        elem.classList.remove("active");
        elem.nextElementSibling.classList.add("hidden");
        elem.lastElementChild.classList.remove("rotate");
      }
    });
    li.classList.toggle("active");
    li.nextElementSibling.classList.toggle("hidden");
    li.lastElementChild.classList.toggle("rotate");
  });
});
