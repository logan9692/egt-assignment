

// SCRIPT FOR APPEARANCE OPTIONS

const lightmode = document.getElementById("lightmode");
const darkmode = document.getElementById("darkmode");
const contrast = document.getElementById("highcontrast");

lightmode.addEventListener('change', appearance);
darkmode.addEventListener('change', appearance);
contrast.addEventListener('change', appearance);

    function appearance() {

        document.body.classList.remove("darkmode", "lightmode", "highcontrast");

        let mode="";

        if (darkmode.checked) {
            mode = "darkmode"
        }
        else if (lightmode.checked) {
            mode = "lightmode"
        }
        else if (contrast.checked) {
            mode = "highcontrast"
            document.body.classList.remove("highlightLinks");
            localStorage.removeItem("highlightLinks");
            highlightLinks.checked = false;
        }

        if (mode !== "") {
            document.body.classList.add(mode);
            localStorage.setItem("mode", mode);
        }
    }

// SCRIPT FOR ACCESSIBILITY OPTIONS

// reduce transparency

const reduceTransparency = document.getElementById("reduceTransparency");

reduceTransparency.addEventListener('change', feature);

    function feature() {

        if (reduceTransparency.checked) {

            document.body.classList.add("reduceTransparency");
            localStorage.setItem("reduceTransparency", "true");
        }
        else {
            document.body.classList.remove("reduceTransparency");
            localStorage.removeItem("reduceTransparency");
        }

    }

// larger text

const textSize = document.getElementById("textSize");

textSize.addEventListener('change', LargeText);

    function LargeText() {

        if (textSize.checked) {
            document.body.classList.add("textSize");
            localStorage.setItem("textSize", "true");
        }
        else {
            document.body.classList.remove("textSize");
            localStorage.removeItem("textSize");
        }
    }

// highlight links

const highlightLinks = document.getElementById("highlightLinks");

highlightLinks.addEventListener('change', Links);

    function Links() {

        if (highlightLinks.checked) {
            document.body.classList.add("highlightLinks");
            localStorage.setItem("highlightLinks", "true");
        }
        else {
            document.body.classList.remove("highlightLinks");
            localStorage.removeItem("highlightLinks");
        }
    }





// ------------- MODALS ------------- //

// SEARCH MODAL

const searchButton = document.querySelector('#open-search')
const searchModal = document.querySelector('#search-modal')
const closeButton = document.querySelector('#close-search')

searchButton.addEventListener('click', () => {
    searchModal.showModal();
})

closeButton.addEventListener('click', () => {
    searchModal.close();
})

// SETTINGS MODAL

const settingsButton = document.querySelector('#openmodal')
const settingsModal = document.querySelector('#settings-modal')
const closeSettings = document.querySelector('#close-settings')

settingsButton.addEventListener('click', () => {
    settingsModal.showModal();
})

closeSettings.addEventListener('click', () => {
    settingsModal.close();
})

// ANNUAL REPORTS MODAL

const reportButton = document.querySelector('#report-modal')
const reportPopup = document.querySelector('#report-popup')
const closeReportModal = document.querySelector('#close-report-modal')

if (reportButton && reportPopup && closeReportModal) {

    reportButton.addEventListener('click', () => {
    reportPopup.showModal();
})

closeReportModal.addEventListener('click', () => {
    reportPopup.close();
})

}


// EMAIL POPUP MODAL

const emailButton = document.querySelector('#email-modal')
const emailPopup = document.querySelector('#email-popup')
const cancelEmail = document.querySelector('#close-email-modal')

if (emailButton && emailPopup && cancelEmail) {

    emailButton.addEventListener('click', () => {
    emailPopup.showModal();
})

cancelEmail.addEventListener('click', () => {
    emailPopup.close();
})
    
}

// INVENTORY MODAL

const inventoryButton = document.querySelector('#open-inventory-modal')
const inventoryPopup = document.querySelector('#inventory-popup')
const closeInventory = document.querySelector('#closeInventory')

if (inventoryButton && inventoryPopup && closeInventory) {

    inventoryButton.addEventListener('click', () => {
    inventoryPopup.showModal();
})

closeInventory.addEventListener('click', () => {
    inventoryPopup.close();
})
    
}

// ORDER POPUP MODAL

const orderButton = document.querySelector('#order-modal')
const orderPopup = document.querySelector('#order-popup')
const cancelOrder = document.querySelector('#close-order-modal')

if (orderButton && orderPopup && cancelOrder) {

    orderButton.addEventListener('click', () => {
    orderPopup.showModal();
})

cancelOrder.addEventListener('click', () => {
    orderPopup.close();
})
    
}

// EDIT EVENTS CARDS

// Admin form script

        // event 1

        async function loadAdminForm() {
            const savedContent = localStorage.getItem("websiteContent");

            if (savedContent) {
                const data = JSON.parse(savedContent);
                fillForm(data);
            } else {
                const response = await fetch("events.json");
                const data = await response.json();
                fillForm(data);
            }
        }

        function fillForm(data) {
            document.getElementById("title").value = data.title;
            document.getElementById("description").value = data.description;
            document.getElementById("date").value = data.date;
            document.getElementById("location").value = data.location;
        }

        function saveContent() {
            const data = {
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                date: document.getElementById("date").value,
                location: document.getElementById("location").value
            };

            localStorage.setItem("websiteContent", JSON.stringify(data));
            alert("Event 1 added.");
        }

        function resetContent() {
            localStorage.removeItem("websiteContent");
            alert("Content reset to default");
            loadAdminForm();
        }

        loadAdminForm();

// event tile script

async function loadContent() {
    const savedContent = localStorage.getItem("websiteContent");

    if (savedContent) {
        const data = JSON.parse(savedContent);
        displayContent(data);
    } else {
        const response = await fetch("events.json");
        const data = await response.json();
        displayContent(data);
    }
}

function displayContent(data) {
    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.description;
    document.getElementById("date").textContent = data.date;
    document.getElementById("location").textContent = data.location;
}

loadContent();

        // event 2

        async function loadAdminForm2() {
            const savedContent2 = localStorage.getItem("websiteContent2");

            if (savedContent2) {
                const data = JSON.parse(savedContent2);
                fillForm2(data);
            } else {
                const response = await fetch("events.json");
                const data = await response.json();
                fillForm2(data);
            }
        }

        function fillForm2(data) {
            document.getElementById("title2").value = data.title2;
            document.getElementById("description2").value = data.description2;
            document.getElementById("date2").value = data.date2;
            document.getElementById("location2").value = data.location2;
        }

        function saveContent2() {
            const data = {
                title2: document.getElementById("title2").value,
                description2: document.getElementById("description2").value,
                date2: document.getElementById("date2").value,
                location2: document.getElementById("location2").value
            };

            localStorage.setItem("websiteContent2", JSON.stringify(data));
            alert("Event 2 Added.");
        }

        function resetContent2() {
            localStorage.removeItem("websiteContent2");
            alert("Content reset to default");
            loadAdminForm2();
        }

        loadAdminForm2();

// event tile script

async function loadContent2() {
    const savedContent2 = localStorage.getItem("websiteContent2");

    if (savedContent2) {
        const data = JSON.parse(savedContent2);
        displayContent2(data);
    } else {
        const response = await fetch("events.json");
        const data = await response.json();
        displayContent2(data);
    }
}

function displayContent2(data) {
    document.getElementById("title2").textContent = data.title2;
    document.getElementById("description2").textContent = data.description2;
    document.getElementById("date2").textContent = data.date2;
    document.getElementById("location2").textContent = data.location2;
}

loadContent2(); 

        // event 3

        async function loadAdminForm3() {
            const savedContent3 = localStorage.getItem("websiteContent3");

            if (savedContent3) {
                const data = JSON.parse(savedContent3);
                fillForm3(data);
            } else {
                const response = await fetch("events.json");
                const data = await response.json();
                fillForm3(data);
            }
        }

        function fillForm3(data) {
            document.getElementById("title3").value = data.title3;
            document.getElementById("description3").value = data.description3;
            document.getElementById("date3").value = data.date3;
            document.getElementById("location3").value = data.location3;
        }

        function saveContent3() {
            const data = {
                title3: document.getElementById("title3").value,
                description3: document.getElementById("description3").value,
                date3: document.getElementById("date3").value,
                location3: document.getElementById("location3").value
            };

            localStorage.setItem("websiteContent3", JSON.stringify(data));
            alert("Event 3 Added.");
        }

        function resetContent3() {
            localStorage.removeItem("websiteContent3");
            alert("Content reset to default");
            loadAdminForm3();
        }

        loadAdminForm3();

// event tile script

async function loadContent3() {
    const savedContent3 = localStorage.getItem("websiteContent3");

    if (savedContent3) {
        const data = JSON.parse(savedContent3);
        displayContent3(data);
    } else {
        const response = await fetch("events.json");
        const data = await response.json();
        displayContent3(data);
    }
}

function displayContent3(data) {
    document.getElementById("title3").textContent = data.title3;
    document.getElementById("description3").textContent = data.description3;
    document.getElementById("date3").textContent = data.date3;
    document.getElementById("location3").textContent = data.location3;
}

loadContent3();

/* LOAD THEMING & APPEARANCE ON EACH PAGE */

    document.addEventListener("DOMContentLoaded", function () {

    const savedMode = localStorage.getItem("mode");

    if (savedMode == "darkmode") {
    document.body.classList.add("darkmode");
    darkmode.checked = true;
    }
    else if (savedMode == "highcontrast") {
    document.body.classList.add("highcontrast");
    highcontrast.checked = true;
    }
    else if (savedMode == "lightmode") {
    document.body.classList.add("lightmode");
    lightmode.checked = true;
    }
    else if (!savedMode) {
    document.body.classList.add("lightmode");
    lightmode.checked = true;
    }

    const savedTransparency = localStorage.getItem("reduceTransparency");

    if (savedTransparency == "true") {
    document.body.classList.add("reduceTransparency");
    reduceTransparency.checked = true;
    }
    else if (!savedTransparency) {
    localStorage.removeItem("reduceTransparency");
    }

    const savedSize = localStorage.getItem("textSize");

    if (savedSize == "true") {
        document.body.classList.add("textSize");
        textSize.checked = true;
    }
    else if (!savedSize) {
        localStorage.removeItem("textSize");
    }

    const savedLinkChoice = localStorage.getItem("highlightLinks");

    if (savedLinkChoice == "true") {
        document.body.classList.add("highlightLinks");
        highlightLinks.checked = true;
    }
    else if (!savedLinkChoice) {
        localStorage.removeItem("highlightLinks");
    }

});

        





