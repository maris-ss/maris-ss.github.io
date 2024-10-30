let draggedElem;
const parentLeft = document.querySelector(".left");
const parentRight = document.querySelector(".right");
const parentTop = document.querySelector("#widgets-grid");

const popupMap = {
    widgets: '#popup',
    info: '#popup2',
    fac: '#popup3',
    widgets2: '#popup4'
};

let isPinned = false;

function createPopup(id) {
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector('.overlay');
    let closeBtn = popupNode.querySelector('.close-btn');

    function openPopup() {
        popupNode.classList.add('active');
    }
    function closePopup() {
        popupNode.classList.remove('active');
    }

    overlay.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);
    return openPopup;
}

const addEventListeners = () => {
    document.querySelectorAll('i[data-category]').forEach(i => {
        const category = i.dataset.category;
        const popupId = popupMap[category];
        const popup = createPopup(popupId);
        i.addEventListener('click', () => {
            popup();
        });
    });
};

const handleDragStart = (event) => {
    draggedElem = event.target.closest("[draggable]");
};

const handleDragOver = (event) => {
    event.preventDefault();
};

const savePositions = () => {
    if (isPinned) return; 
    const leftWidgets = Array.from(parentLeft.querySelectorAll(".widget")).map(widget => widget.outerHTML);
    const rightWidgets = Array.from(parentRight.querySelectorAll(".widget")).map(widget => widget.outerHTML);

    localStorage.setItem("leftWidgets", JSON.stringify(leftWidgets));
    localStorage.setItem("rightWidgets", JSON.stringify(rightWidgets));
};

const handleDrop = (event, parent) => {
    event.preventDefault();
    const target = event.target.closest("[draggable]");
    if (target) {
        if (parent == draggedElem.parentNode) {
            const temp = document.createElement("div");
            target.before(temp);
            draggedElem.replaceWith(target);
            temp.replaceWith(draggedElem);
        } else {
            parent.insertBefore(draggedElem, target);
        }
    } else {
        parent.appendChild(draggedElem);
    }

    savePositions();
};

const loadPositions = () => {
    const leftWidgets = JSON.parse(localStorage.getItem("leftWidgets"));
    const rightWidgets = JSON.parse(localStorage.getItem("rightWidgets"));

    if (leftWidgets) {
        parentLeft.innerHTML = leftWidgets.join("");
    }

    if (rightWidgets) {
        parentRight.innerHTML = rightWidgets.join("");
    }

    addEventListeners();
};

const togglePinWidgets = () => {
    isPinned = !isPinned; 
    const pinIcon = document.getElementById("pin-icon");

    // Atualiza o ícone de pin
    pinIcon.textContent = isPinned ? 'keep_off' : 'keep'; 

    localStorage.setItem("isPinned", JSON.stringify(isPinned));
};

window.onload = () => {
    const savedState = JSON.parse(localStorage.getItem("isPinned"));
    if (savedState !== null) {
        isPinned = savedState; 
    }
    
    const pinIcon = document.getElementById("pin-icon");
    pinIcon.textContent = isPinned ? 'keep_off' : 'keep'; 
    
    loadPositions(); 
};

parentLeft.addEventListener("dragstart", handleDragStart);
parentLeft.addEventListener("dragover", handleDragOver);
parentLeft.addEventListener("drop", (event) => handleDrop(event, parentLeft));

parentRight.addEventListener("dragstart", handleDragStart);
parentRight.addEventListener("dragover", handleDragOver);
parentRight.addEventListener("drop", (event) => handleDrop(event, parentRight));

parentTop.addEventListener("dragstart", handleDragStart);
parentTop.addEventListener("dragover", handleDragOver);
parentTop.addEventListener("drop", (event) => handleDrop(event, parentTop));

document.getElementById("pin-icon").addEventListener("click", togglePinWidgets);