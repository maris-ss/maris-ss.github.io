
let icon = document.getElementById("icon-theme");
let localData = localStorage.getItem("theme");
        
    if(localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "light");
    };
        
    if(localData == "light"){
        icon.src = "./icones/light_mode_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png";
        document.body.classList.remove("dark-theme");
    }
    else if(localData == "dark"){
        icon.src = "./icones/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
        document.body.classList.add("dark-theme");
    }
        
        icon.onclick = function () {
            document.body.classList.toggle("dark-theme");
                
                if (document.body.classList.contains("dark-theme")) {
                        icon.src = "./icones/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
                        localStorage.setItem("theme", "dark");
                } else {
                        icon.src = "./icones/light_mode_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png";
                        localStorage.setItem("theme", "light");
                }
            
        };