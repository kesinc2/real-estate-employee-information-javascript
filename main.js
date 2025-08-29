   const calisanlar = [
    {
        isim : "Eyüp" ,
        yas: 20 ,
        meslek : "emlak danışmanı",
        foto: "user2.jpg",
        email:"eypaln65@gmail.com"
    },
     {
        isim : "kerem" ,
        yas: 30 ,
        meslek : "emlak danışmanı",
        foto: "user3.jpg",
        email:"kerem@gmail.com"
    },
      {
        isim : "Aslı" ,
        yas: 29 ,
        meslek : "emlak danışmanı",
        foto: "user1.jpg",
        email:"aslı@gmail.com"
    }
    
   ];

   const grid = document.getElementById("calisanlarGrid");
   calisanlar.forEach((calisan,index)=>{
    const card = document.createElement("div");
    card.className="calisan-card";
    
    card.innerHTML=`
    <img src="${calisan.foto}" alt ="${calisan.isim}" >
    <h3>${calisan.isim}</h3>
    <button id="btn${index}">bilgileri göster </button>
    `;
    grid.appendChild(card);

    document.getElementById(`btn${index}`).onclick=function () {
        const bilgiDiv = document.getElementById("bilgiDiv");
    bilgiDiv.style.display = "block"; // Göster
    bilgiDiv.innerHTML = `
      <h3>${calisan.isim} Bilgileri</h3>
      <p>Yaş: ${calisan.yas}</p>
      <p>Meslek: ${calisan.meslek}</p>
      <p>Email: ${calisan.email}</p>
    `;
        };
   });