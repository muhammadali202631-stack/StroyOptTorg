document.addEventListener('DOMContentLoaded', () => {

    const sidebarOpenBtn = document.getElementById('sidebarOpen');
    const sidebar = document.querySelector('.sidebar');

    let sidebarOverlay = document.querySelector('.sidebar-overlay');
    if (!sidebarOverlay) {
        sidebarOverlay = document.createElement('div');
        sidebarOverlay.className = 'sidebar-overlay';
        document.body.appendChild(sidebarOverlay);
    }

    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sidebar) sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    sidebarOverlay.addEventListener('click', () => {
        if (sidebar) sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });


    const togglePasswordBtns = document.querySelectorAll('.password-toggle');

    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const inputWrapper = this.closest('.input-wrapper');
            const input = inputWrapper ? inputWrapper.querySelector('input') : null;

            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.style.opacity = '0.4';
                } else {
                    input.type = 'password';
                    this.style.opacity = '1';
                }
            }
        });
    });
});