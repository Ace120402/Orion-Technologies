const logo =
    document.getElementById("logo");

const boot =
    document.getElementById("boot");

const interfaceElement =
    document.getElementById("interface");

const interfaceText =
    document.getElementById("interface-text");

const imageViewer =
    document.getElementById("image-viewer");

const galleryImage =
    document.getElementById("gallery-image");

const galleryCredit =
    document.getElementById("gallery-credit");

const galleryClose =
    document.getElementById("gallery-close");


/* =========================
   SETTINGS
========================= */

const typingSpeed = 30;
const flickerDuration = 900;


/* =========================
   BIOS TEXT
========================= */

const biosText =
`ORION BIOS v7.4.21

Initializing system...
Neural interface........ ONLINE
AXON network............ ONLINE
Core systems............ ONLINE

Loading ORION framework...
[████████████████████] 100%

EOS CORE............... DETECTED

System ready.
Welcome.`;


/* =========================
   LOGO BOOT
========================= */

setTimeout(() => {

    logo.classList.add(
        "logo-flicker"
    );

}, 1000);


/* =========================
   BIOS CURSOR
========================= */

setTimeout(() => {

    boot.innerHTML =
        '<span class="cursor"></span>';

}, 4400);


/* =========================
   GENERIC TYPING FUNCTION
========================= */

function typeText(
    element,
    text,
    cursorHTML,
    onComplete
) {

    let currentCharacter = 0;

    element.innerHTML =
        cursorHTML;

    const typingInterval =
        setInterval(() => {

            if (
                currentCharacter >=
                text.length
            ) {

                clearInterval(
                    typingInterval
                );

                if (onComplete) {
                    onComplete();
                }

                return;
            }

            currentCharacter++;

            element.innerHTML =
                text
                    .substring(
                        0,
                        currentCharacter
                    )
                    .replace(
                        /\n/g,
                        "<br>"
                    )
                +
                cursorHTML;

        }, typingSpeed);
}


/* =========================
   BIOS TYPING
========================= */

setTimeout(() => {

    typeText(
        boot,
        biosText,
        '<span class="cursor"></span>'
    );

}, 6400);


/* =========================
   BIOS TIMING
========================= */

const biosTypingTime =
    biosText.length *
    typingSpeed;

const biosFlickerStart =
    6400 +
    biosTypingTime +
    2000;


setTimeout(() => {

    boot.classList.add(
        "bios-flicker-out"
    );

}, biosFlickerStart);


const biosEndTime =
    biosFlickerStart +
    flickerDuration;


setTimeout(() => {

    boot.innerHTML = "";

    boot.classList.remove(
        "bios-flicker-out"
    );

}, biosEndTime);


/* =========================
   MENUS
========================= */

const mainMenu = [
    "[ 01 ] STAFF",
    "[ 02 ] ARCHIVES",
    "[ 03 ] EOS PROJECT"
];

const staffMenu = [
    "[ 01 ] ACE",
    "[ 02 ] EOS",
    "[ 00 ] RETURN"
];

const menuPrompt =
    "> SELECTION:";


/* =========================
   GALLERY DATA
========================= */

const aceGallery = [

    {
        image: "images/acemain.png",
        artist: "JoltzDrawz"
    },

    {
        image: "images/acesweet.jpeg",
        artist: "sweeetlii"
    },

    {
        image: "images/acemb.png",
        artist: "Madnessbliss"
    }

];


const eosGallery = [

    {
        image: "images/eosmain.png",
        artist: "JoltzDrawz"
    },

    {
        image: "images/eosfc.png",
        artist: "fixy_cookies"
    },

    {
        image: "images/eosluc.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eosmb.png",
        artist: "Madnessbliss"
    },

    {
        image: "images/eosvr.jpeg",
        artist: "Gelboretsu"
    },

    {
        image: "images/eoszl1.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl2.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl3.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl4.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl5.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl6.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl7.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl8.png",
        artist: "ZestyLemonss"
    },

    {
        image: "images/eoszl9.png",
        artist: "ZestyLemonss"
    }

];


/* =========================
   CURSORS
========================= */

function centeredCursor() {

    return (
        '<span class="interface-cursor-centered"></span>'
    );

}


function menuCursor() {

    return (
        '<span class="interface-cursor"></span>'
    );

}


/* =========================
   SHOW MENU
========================= */

function showMenu(
    menuItems,
    onSelect
) {

    interfaceElement.style.opacity =
        "1";

    interfaceElement.style.pointerEvents =
        "auto";

    interfaceText.innerHTML =
        centeredCursor();

    setTimeout(() => {

        typeMenu(
            menuItems,
            onSelect
        );

    }, 700);

}


/* =========================
   TYPE MENU
========================= */

function typeMenu(
    menuItems,
    onSelect
) {

    let currentCharacter = 0;

    const fullMenu =
        menuItems.join("\n");

    interfaceText.innerHTML =
        menuCursor();

    const menuTypingInterval =
        setInterval(() => {

            if (
                currentCharacter >=
                fullMenu.length
            ) {

                clearInterval(
                    menuTypingInterval
                );

                finishMenu(
                    menuItems,
                    onSelect
                );

                return;
            }

            currentCharacter++;

            interfaceText.innerHTML =
                fullMenu
                    .substring(
                        0,
                        currentCharacter
                    )
                    .replace(
                        /\n/g,
                        "<br>"
                    )
                +
                menuCursor();

        }, typingSpeed);

}


/* =========================
   FINISH MENU
========================= */

function finishMenu(
    menuItems,
    onSelect
) {

    interfaceText.innerHTML = "";

    menuItems.forEach(
        (option, index) => {

            const optionElement =
                document.createElement(
                    "span"
                );

            optionElement.className =
                "menu-option";

            optionElement.dataset.option =
                index + 1;

            optionElement.textContent =
                option;

            interfaceText.appendChild(
                optionElement
            );

            if (
                index <
                menuItems.length - 1
            ) {

                interfaceText.appendChild(
                    document.createElement(
                        "br"
                    )
                );

            }

        }
    );


    const prompt =
        document.createElement(
            "span"
        );

    prompt.className =
        "menu-prompt";

    interfaceText.appendChild(
        prompt
    );


    typeText(
        prompt,
        menuPrompt,
        "",
        () => {

            const cursor =
                document.createElement(
                    "span"
                );

            cursor.className =
                "menu-prompt-cursor";

            prompt.appendChild(
                cursor
            );

        }
    );


    interfaceText.onclick =
        (event) => {

            const option =
                event.target.closest(
                    ".menu-option"
                );

            if (!option) {
                return;
            }

            selectMenuOption(
                option.dataset.option,
                onSelect
            );

        };

}


/* =========================
   SELECT MENU OPTION
========================= */

function selectMenuOption(
    option,
    onSelect
) {

    if (
        interfaceElement.classList.contains(
            "menu-flicker-out"
        )
    ) {

        return;
    }


    const selectedOption =
        interfaceText.querySelector(
            `[data-option="${option}"]`
        );


    if (!selectedOption) {
        return;
    }


    selectedOption.classList.add(
        "selected"
    );


    interfaceElement.classList.add(
        "menu-flicker-out"
    );


    setTimeout(() => {

        interfaceText.innerHTML =
            "";

        interfaceElement.classList.remove(
            "menu-flicker-out"
        );

        interfaceElement.style.opacity =
            "0";

        interfaceElement.style.pointerEvents =
            "none";


        if (onSelect) {

            onSelect(
                Number(option)
            );

        }

    }, flickerDuration);

}


/* =========================
   MAIN MENU
========================= */

function showMainMenu() {

    showMenu(
        mainMenu,
        handleMainMenuSelection
    );

}


function handleMainMenuSelection(
    option
) {

    if (option === 1) {

        showStaffMenu();

    }

    /*
       Options 2 and 3 are intentionally
       left unimplemented for now.
    */

}


/* =========================
   STAFF MENU
========================= */

function showStaffMenu() {

    showMenu(
        staffMenu,
        handleStaffMenuSelection
    );

}


function handleStaffMenuSelection(
    option
) {

    if (option === 1) {

        showGallery(
            "ACE",
            aceGallery
        );

        return;
    }


    if (option === 2) {

        showGallery(
            "EOS",
            eosGallery
        );

        return;
    }


    if (option === 0) {

        showMainMenu();

    }

}


/* =========================
   GALLERY
========================= */

function showGallery(
    title,
    gallery
) {

    interfaceElement.style.opacity =
        "1";

    interfaceElement.style.pointerEvents =
        "auto";


    interfaceText.innerHTML = "";


    const container =
        document.createElement(
            "div"
        );

    container.className =
        "gallery-container";


    const galleryTitle =
        document.createElement(
            "div"
        );

    galleryTitle.className =
        "gallery-title";

    galleryTitle.textContent =
        title + " GALLERY";


    container.appendChild(
        galleryTitle
    );


    const grid =
        document.createElement(
            "div"
        );

    grid.className =
        "gallery-grid";


    gallery.forEach(
        (item) => {

            const tile =
                document.createElement(
                    "div"
                );

            tile.className =
                "gallery-tile";


            const image =
                document.createElement(
                    "img"
                );

            image.src =
                item.image;

            image.alt =
                title + " artwork";


            tile.appendChild(
                image
            );


            tile.addEventListener(
                "click",
                () => {

                    openImage(
                        item.image,
                        item.artist
                    );

                }
            );


            grid.appendChild(
                tile
            );

        }
    );


    container.appendChild(
        grid
    );


    const returnOption =
        document.createElement(
            "div"
        );

    returnOption.className =
        "menu-option gallery-return";

    returnOption.dataset.option =
        "0";

    returnOption.textContent =
        "[ 00 ] RETURN";


    returnOption.addEventListener(
        "click",
        () => {

            transitionTo(
                showStaffMenu
            );

        }
    );


    container.appendChild(
        returnOption
    );


    interfaceText.appendChild(
        container
    );

}


/* =========================
   GALLERY IMAGE VIEWER
========================= */

function openImage(
    image,
    artist
) {

    galleryImage.src =
        image;

    galleryImage.alt =
        "Enlarged artwork";


    galleryCredit.textContent =
        "ARTIST: " + artist;


    imageViewer.classList.add(
        "active"
    );

}


function closeImage() {

    imageViewer.classList.remove(
        "active"
    );

    galleryImage.src =
        "";

    galleryCredit.textContent =
        "";

}


/* =========================
   CLOSE IMAGE
========================= */

galleryClose.addEventListener(
    "click",
    () => {

        closeImage();

    }
);


/* Clicking the dark area closes it */

imageViewer.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            imageViewer
        ) {

            closeImage();

        }

    }
);


/* =========================
   TRANSITION
========================= */

function transitionTo(
    nextScreen
) {

    if (
        interfaceElement.classList.contains(
            "menu-flicker-out"
        )
    ) {

        return;
    }


    interfaceElement.classList.add(
        "menu-flicker-out"
    );


    setTimeout(() => {

        interfaceText.innerHTML =
            "";

        interfaceElement.classList.remove(
            "menu-flicker-out"
        );

        interfaceElement.style.opacity =
            "0";

        interfaceElement.style.pointerEvents =
            "none";


        if (nextScreen) {

            nextScreen();

        }

    }, flickerDuration);

}


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        /* ESC closes enlarged artwork */

        if (
            event.key === "Escape" &&
            imageViewer.classList.contains(
                "active"
            )
        ) {

            closeImage();

            return;

        }


        /*
           0 returns from a gallery.
           This specifically checks for
           the gallery RETURN option.
        */

        if (
            event.key === "0" &&
            !imageViewer.classList.contains(
                "active"
            )
        ) {

            const returnOption =
                interfaceText.querySelector(
                    '[data-option="0"]'
                );

            if (returnOption) {

                returnOption.click();

                return;

            }

        }


        /*
           Number keys 1-3 select
           normal menu options.
        */

        if (
            event.key === "1" ||
            event.key === "2" ||
            event.key === "3"
        ) {

            const option =
                interfaceText.querySelector(
                    `[data-option="${event.key}"]`
                );

            if (option) {

                option.click();

            }

        }

    }
);


/* =========================
   START MAIN MENU
========================= */

setTimeout(() => {

    interfaceElement.style.opacity =
        "1";

    interfaceElement.style.pointerEvents =
        "auto";

    interfaceText.innerHTML =
        centeredCursor();

}, biosEndTime);


const menuStartTime =
    biosEndTime +
    1000;


setTimeout(() => {

    showMainMenu();

}, menuStartTime);