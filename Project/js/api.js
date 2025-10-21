//Backend API çağrıları burada olacak

// Deneme amaçlı: giriş yapıldığında değişiyor
let isLoggedIn = true; 

function updateNavbar() {
  if (isLoggedIn) {
    document.body.classList.add("logged-in");
  } else {
    document.body.classList.remove("logged-in");
  }
}
// İlk yüklemede kontrol et
updateNavbar();
