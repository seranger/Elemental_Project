const hamburgerMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamburgerMenu.addEventListener('click', () => {
  offScreenMenu.classList.toggle('active');
  hamburgerMenu.classList.toggle('active'); 
});

document.querySelectorAll(".carousel").forEach(carousel =>{
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () =>{
        return `<span class="carousel__button"><span>`;
    });

    carousel.insertAdjacentHTML("beforeend",`
        <div class="carousel__nav">
        ${ buttonsHtml.join("") }
        <div>
    `);

    const buttons = carousel.querySelectorAll(".carousel__button");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () =>{
            // unselects all the items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            button.forEach(button => button.classList.remove("carousel__button--selected"));
        });

    });
});
