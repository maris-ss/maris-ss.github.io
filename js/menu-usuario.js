 src="https://cdn.tailwindcss.com"

 const iconNotiWrap = document.getElementById("iconNotiWrap");
    const subMenu = document.getElementById("subMenu");
    const userPic = document.querySelector('.user-pic');
    const notificationIcon = document.getElementById('notificacao');

    function toggleMenu(menuElement, className) {
        menuElement.classList.toggle(className);
    }

    document.addEventListener('click', function(event) {
        if (!subMenu.contains(event.target) && event.target !== userPic) {
            subMenu.classList.remove('open-menu');
        }
        if (!iconNotiWrap.contains(event.target) && event.target !== notificationIcon) {
            iconNotiWrap.classList.remove('open-noti');
        }
    });

    
    function toggleSubMenu() {
        toggleMenu(subMenu, 'open-menu');
    }

    function toggleNotificationMenu() {
        toggleMenu(iconNotiWrap, 'open-noti');
    }   