document.addEventListener('DOMContentLoaded', () => {
    const sidebarOpenBtn = document.getElementById('sidebarOpen');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.createElement('div');

    sidebarOverlay.classList.add('sidebar-overlay');
    document.body.appendChild(sidebarOverlay);


    function openSidebar() {
        if (sidebar) sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener('click', openSidebar);
    }
    sidebarOverlay.addEventListener('click', closeSidebar);
});