let btn = document.querySelector('#btn-sidebar');
let sidebar = document.querySelector('.sidebar');
let btnIcon = document.querySelector('#btn-sidebar');
let spanContents = document.querySelectorAll('#span'); 

spanContents.forEach(function(spanContent) {
    spanContent.style.display = 'none';
});

btn.onclick = function () {
    sidebar.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        btnIcon.className = 'bx bx-left-arrow-alt';
    } else {
        btnIcon.className = 'bx bx-right-arrow-alt';
    }
    
    spanContents.forEach(function(spanContent) {
        if (spanContent.style.display === 'none') {
            spanContent.style.display = 'block'; 
        } else {
            spanContent.style.display = 'none'; 
        }
    });
};