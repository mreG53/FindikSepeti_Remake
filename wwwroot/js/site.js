document.addEventListener('DOMContentLoaded', function () {
    // Menü düğmesine tıklandığında
    document.getElementById('menuButton').addEventListener('click', function () {
        // Mobil menüyü aç veya kapat
        var mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    });
});
