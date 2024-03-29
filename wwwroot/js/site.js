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
window.addEventListener('load', () => {
    // 3 saniye sonra çalışacak olan kodu setTimeout ile belirtiyoruz
    setTimeout(() => {
        // Sayfa yüklendiğinde navbar'a 'navbar-loaded' sınıfını ekle
        document.querySelector('.navbar').classList.add('navbar-loaded');
    }, 1000);
    setTimeout(() => {
        // Sayfa yüklendiğinde navbar'a 'navbar-loaded' sınıfını ekle
        document.querySelector('.navbar').classList.add('lg:w-5/6', 'w-3/4');
    }, 5000);
    var txtOpaElement = document.querySelectorAll('.navbar .txtOpa');

    // Belirli bir süre sonra display özelliğini değiştirin
    var txtOpaElements = document.querySelectorAll('.navbar .txtOpa');

    // Her bir öğe için işlem yapın
    txtOpaElements.forEach(function (txtOpaElement) {
        // Belirli bir süre sonra display özelliğini değiştirin
        setTimeout(function () {
            txtOpaElement.style.display = 'flex';
        }, 5200);
    });
    var otherContentElements = document.querySelectorAll('.other-content');

    // Her bir elemente 'show' sınıfını ekleyin
    otherContentElements.forEach(function (element) {
        element.classList.add('show');
    });
    setTimeout(function () {
        // Elementi seçin
        var myElement = document.getElementById('arkaplan');

        // Arka plan rengini değiştirin
        myElement.style.backgroundColor = 'rgb(255, 237, 213)';
    }, 5000);
});