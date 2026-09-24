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
   GALLERIES
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
   TYPING
========================= */

function typeText(
    element,
    text,
    speed,
    callback
) {

    element.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(
                type,
                speed
            );

        } else {

            if (callback) {
                callback();
            }

        }

    }

    type();
}


/* =========================
   BIOS BOOT
========================= */

setTimeout(
    () => {

        logo.classList.add(
            "logo-flicker"
        );

    },
    1000
);


setTimeout(
    () => {

        boot.innerHTML =
            '<span class="cursor"></span>';

    },
    4400
);


setTimeout(
    () => {

        boot.innerHTML = "";

        typeText(
            boot,
            biosText,
            typingSpeed
        );

    },
    6400
);


const biosTypingTime =
    biosText.length * typingSpeed;


const flickerStart =
    6400 +
    biosTypingTime +
    2000;


setTimeout(
    () => {

        boot.classList.add(
            "bios-flicker-out"
        );

    },
    flickerStart
);


const biosEndTime =
    flickerStart +
    flickerDuration;


setTimeout(
    () => {

        boot.innerHTML = "";

        interfaceElement.style.opacity =
            "1";

        interfaceElement.style.pointerEvents =
            "auto";

        interfaceText.innerHTML =
            '<span class="cursor"></span>';

    },
    biosEndTime
);


/* =========================
   MENU SYSTEM
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
        '<span class="cursor"></span>';

    setTimeout(
        () => {

            typeMenu(
                menuItems,
                onSelect
            );

        },
        700
    );
}


function typeMenu(
    menuItems,
    onSelect
) {

    interfaceText.innerHTML = "";

    const menuText =
        menuItems.join("\n\n");

    typeText(
        interfaceText,
        menuText,
        typingSpeed,
        () => {

            finishMenu(
                menuItems,
                onSelect
            );

        }
    );
}


function finishMenu(
    menuItems,
    onSelect
) {

    interfaceText.innerHTML = "";

    menuItems.forEach(
        (
            item,
            index
        ) => {

            const option =
                document.createElement(
                    "div"
                );

            option.classList.add(
                "menu-option"
            );

            option.textContent =
                item;

            /*
                RETURN is option 0.
                Everything else uses its
                normal menu number.
            */

            if (
                item.includes("RETURN")
            ) {

                option.dataset.option =
                    "0";

            } else {

                option.dataset.option =
                    String(index + 1);

            }

            option.addEventListener(
                "click",
                () => {

                    selectMenuOption(
                        option,
                        Number(
                            option.dataset.option
                        ),
                        onSelect
                    );

                }
            );

            interfaceText.appendChild(
                option
            );

        }
    );


    const prompt =
        document.createElement(
            "div"
        );

    prompt.classList.add(
        "menu-prompt"
    );

    prompt.textContent =
        menuPrompt;

    interfaceText.appendChild(
        prompt
    );


    const promptCursor =
        document.createElement(
            "span"
        );

    promptCursor.classList.add(
        "cursor"
    );

    prompt.appendChild(
        promptCursor
    );
}


/* =========================
   MENU SELECTION
========================= */

function selectMenuOption(
    option,
    selectedNumber,
    onSelect
) {

    if (
        interfaceElement.classList.contains(
            "transitioning"
        )
    ) {

        return;

    }

    interfaceElement.classList.add(
        "transitioning"
    );

    option.classList.add(
        "selected"
    );


    setTimeout(
        () => {

            interfaceElement.classList.add(
                "menu-flicker-out"
            );

        },
        100
    );


    setTimeout(
        () => {

            interfaceElement.classList.remove(
                "menu-flicker-out"
            );

            interfaceElement.classList.remove(
                "transitioning"
            );

            interfaceText.innerHTML = "";

            interfaceElement.style.opacity =
                "0";

            interfaceElement.style.pointerEvents =
                "none";


            onSelect(
                selectedNumber
            );

        },
        flickerDuration
    );
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

        return;

    }

    /*
        Options 2 and 3 are currently
        intentionally unimplemented.
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


    /*
        OPTION 0 = RETURN TO MAIN MENU
    */

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


    const galleryContainer =
        document.createElement(
            "div"
        );

    galleryContainer.classList.add(
        "gallery-container"
    );


    const galleryTitle =
        document.createElement(
            "div"
        );

    galleryTitle.classList.add(
        "gallery-title"
    );

    galleryTitle.textContent =
        title + " GALLERY";


    galleryContainer.appendChild(
        galleryTitle
    );


    const grid =
        document.createElement(
            "div"
        );

    grid.classList.add(
        "gallery-grid"
    );


    gallery.forEach(
        (
            item
        ) => {

            const tile =
                document.createElement(
                    "div"
                );

            tile.classList.add(
                "gallery-tile"
            );


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


    galleryContainer.appendChild(
        grid
    );


    /*
        RETURN = OPTION 0
    */

    const returnOption =
        document.createElement(
            "div"
        );

    returnOption.classList.add(
        "menu-option",
        "gallery-return"
    );

    returnOption.textContent =
        "[ 00 ] RETURN";

    returnOption.dataset.option =
        "0";


    returnOption.addEventListener(
        "click",
        () => {

            transitionTo(
                showStaffMenu
            );

        }
    );


    galleryContainer.appendChild(
        returnOption
    );


    interfaceText.appendChild(
        galleryContainer
    );

}


/* =========================
   IMAGE VIEWER
========================= */

function openImage(
    image,
    artist
) {

    galleryImage.src =
        image;

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


galleryClose.addEventListener(
    "click",
    closeImage
);


imageViewer.addEventListener(
    "click",
    (event) => {

        if (
            event.target === imageViewer
        ) {

            closeImage();

        }

    }
);


/* =========================
   TRANSITIONS
========================= */

function transitionTo(
    nextScreen
) {

    interfaceElement.classList.add(
        "menu-flicker-out"
    );


    setTimeout(
        () => {

            interfaceElement.classList.remove(
                "menu-flicker-out"
            );

            interfaceText.innerHTML =
                "";

            nextScreen();

        },
        flickerDuration
    );

}


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
            ESC closes enlarged image.
        */

        if (
            event.key === "Escape"
        ) {

            if (
                imageViewer.classList.contains(
                    "active"
                )
            ) {

                closeImage();

            }

            return;

        }


        /*
            0 = RETURN

            This works for:
            - Staff menu
            - ACE gallery
            - EOS gallery
        */

        if (
            event.key === "0"
        ) {

            if (
                imageViewer.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            const returnOption =
                document.querySelector(
                    '[data-option="0"]'
                );


            if (returnOption) {

                returnOption.click();

            }

            return;

        }


        /*
            Normal menu numbers.
        */

        if (
            ["1", "2", "3"].includes(
                event.key
            )
        ) {

            if (
                imageViewer.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            const option =
                document.querySelector(
                    '[data-option="' +
                    event.key +
                    '"]'
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

setTimeout(
    () => {

        showMainMenu();

    },
    biosEndTime + 1000
);