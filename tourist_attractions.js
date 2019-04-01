"use strict";

{
    const init = () => {
        $('figure.column img#at').on("load", showDescriptionOf);
        $$('figure.column img').on("click", showDescriptionOf);
    }

    const showDescriptionOf = e => {
        $('#info p').textContent = e.target.dataset.description;
        $('#info h3').textContent = e.target.alt;
        $('#info img').src = "media/" + e.target.dataset.country + ".png";
        $('#info img').alt = e.target.dataset.flag;
        $('#info p.photo span').textContent = e.target.nextElementSibling.textContent;
    }

    init();
}