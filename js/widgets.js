const myButton = document.getElementById("myButton");
const myWidgets = document.getElementById("myWidgets");
const widgetsContainer = document.querySelector(".widgets");

function updateWidgetState() {
    const isHidden = localStorage.getItem('widgetsHidden') === 'true'; 

    if (isHidden) {
        myWidgets.classList.add("hidden"); 
        myButton.innerHTML = "<i class='bx bx-hide'></i>"; 
        widgetsContainer.classList.add("collapsed"); 
    } else {
        myWidgets.classList.remove("hidden");
        myButton.innerHTML = "<i class='bx bx-show'></i>"; 
        widgetsContainer.classList.remove("collapsed"); 
    }
}


myButton.addEventListener("click", () => {
    const isHidden = myWidgets.classList.contains("hidden");

    if (isHidden) {
        myWidgets.classList.remove("hidden"); 
        myButton.innerHTML = "<i class='bx bx-show'></i>"; 
        widgetsContainer.classList.remove("collapsed"); 
        localStorage.setItem('widgetsHidden', 'false'); 
    } else {
        myWidgets.classList.add("hidden"); 
        myButton.innerHTML = "<i class='bx bx-hide'></i>"; 
        widgetsContainer.classList.add("collapsed"); 
        localStorage.setItem('widgetsHidden', 'true'); 
    }
});


window.addEventListener("load", updateWidgetState);