document.getElementById('navToggle').addEventListener('click', function() {
    var nav = document.getElementById('navItems');

    // Toggle nav visibility
    nav.classList.toggle('show');

    // Toggle button appearance
    this.classList.toggle('active');
});