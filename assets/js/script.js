document.addEventListener("DOMContentLoaded", function () {
    const cardOri = document.getElementById("cardOri");
    let cardClone, winScroll;
    let count = 5;
    document.addEventListener("scroll", function () {

        winScroll = document.body.scrollTop || document.documentElement.scrollTop; // la partie déjà scrollée
        if ((window.innerHeight + winScroll + 2) >= document.body.offsetHeight) {
            let i=1;
            while (i<=4) {
                console.log(count);
                cardClone = cardOri.cloneNode(true);
                
                document.querySelector(".row").append(cardClone);

                console.dir(cardClone.querySelector(".carousel"));

                cardClone.querySelector(".carousel").id = "carousel"+count;
                //attribut data-bs-target
                console.dir(cardClone.querySelector(".carousel-control-prev"));

                cardClone.querySelector(".carousel-control-prev").setAttribute("data-bs-target","#carousel"+count);
                cardClone.querySelector(".carousel-control-next").setAttribute("data-bs-target","#carousel"+count);
                count++;
                i++;
            };
        };
    });

});
