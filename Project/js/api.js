//Backend API çağrıları burada olacak

// Deneme amaçlı: giriş yapıldığında değişiyor
let isLoggedIn = true; 

function updateNavbar() {
  if (isLoggedIn === true) {
    document.body.classList.add("logged-in");
  } else {
    document.body.classList.remove("logged-in");
  }
}// İlk yüklemede kontrol et
updateNavbar();


// Navbar Çıkış yapma buttonu
const logOut = document.getElementById('logOut');

logOut.addEventListener("click",function(){
  document.body.classList.remove("logged-in");
  isLoggedIn = false;
})