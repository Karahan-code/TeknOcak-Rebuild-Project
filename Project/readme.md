Proje açıklama !

Siteyi visual studio code (live server) eklentisi ile açılıp önizlenmesini gerekiyor.

// 1- Giriş Çıkış Simüle Edildi!

api.js dosyasında isLoggedIn değeri eklendi ve girş çıkışlar simüle edildi. Bu sayede navbar için her sayfa 2 defa yapılmadı. Değeri true veya false yaparak fark görülebilir veya çıkış yap buttonuna basılarak değer false yapılabilir.

let isLoggedIn = true; 


// 2- Sitenin tüm renkleri değiştirilebilir şekilde yapıldı!

main.css dosyasının en başına root özelliği eklendi. Bu sayede sitenin tüm renklerini tek satır değiştirerek isteğinize uygun olarak değiştirilebilir şekilde ayarlandı.

    /* ===========================================
           Renk Paleti Değişkenleri
           =========================================== */
    :root {
        /* Ana Arka Plan */
        --renk-bg-1: #004e92;
        --renk-bg-2: #000428;
        /* Metin Renkleri */
        --renk-metin-ana: #F5F5F5;
        --renk-metin-ikincil: #adb5bd;
        /* VURGU RENKLERİ */
        --renk-vurgu: #F48C06;
        --renk-vurgu-hover: #E85D04;
        /* Kart (Glassmorphism) Stilleri */
        --renk-kart-zemin: rgba(255, 255, 255, 0.1);
        --renk-kart-cizgi: rgba(255, 255, 255, 0.2);
        --kart-blur: blur(10px);
        /* Sistem Renkleri */
        --renk-hata: #FF6B6B;
        --renk-basari: #3DDC97;
        /* Standart Stiller */
        --radius-kart: 16px;
        --golge-kart: 0 4px 30px rgba(0, 0, 0, 0.1);
    }


3- Kullanıcı giriş çıkış yaparken şifre görme özelliği eklendi!

4- Kullanıcı bilgileri profilim sayfasından değiştirilebilir şekilde ayarlandı!

5- Kullanıcı bildirimleri yarışmaları vb. hepsi tek bir sayfada toplandı ve örnek dizaynlar eklendi.
(profile.html)

6- Ana sayfa kaydırma animasyonları eklendi ve telefon boyutuna gelince tüm animasyonlar kapanacak şekilde ayarlandı. Bu sayede telefonda kullanırken performansın artması hedeflendi.

7-Ana sayfa soru kartları animasyonlu yapıldı ve video yüksekliği soru kartların yüksekliği ile değer alıyor.

8- Her sayfaya yükleme ekranı eklendi bu yükleme ekranı istendiği zaman değiştirilebilecek şekilde ayarlandı. Ben gif koydum.

9- Yarışmaların detaylarının olduğu sayfa boşluklar detaylandırıldı ve indirme buttonları eklendi. Fakat 1 tane yapıldı diğerleri için html kodlarını yeni bir .html dosyasına kopyala yapıştır yapılarak sadece resimleri ve metinleri değiştirilebilir.

10- Siteye yeni favicon yapıldı her sayfaya eklendi.

11- Tablet veya telefon boyutunda navbar özellikleri tek bir buttonla açılacak şekilde ayarlandı.
Bu boyutta yan bar çıkıyor ve overlay eklenerek yan barın dışına basılarak da kapanabiliyor.


