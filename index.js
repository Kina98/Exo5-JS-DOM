// -console.log(datas);
// Structure de datas:
// - fullname: string
// - profil: string
// - email : string
// - description : string
// - socials : [Social, Social, ...]
// - works : [Work, Work, ...]
// - experience : [Experience, Experience, ...]

// Structure de Social:
// name : string
// url : string
// link : string

// Structure de Work:
// name: string,
// url: string,
// technology: [Techo, Techno, ...],
// preview: string

// Structure de Experience:
// name: string,
// link: string,
// technology: [Techo, Techno, ...]

// 1.
    const fullName = document.getElementById('fullName');
    fullName.textContent = "Hey, I'm datas " + datas.fullname;

// 2.
    const profil = document.getElementById('profil');
    profil.textContent = datas.profil;

// 3.
    const description = document.getElementById('description');
    description.textContent = datas.description;

// 4.
    const img = document.getElementById('picture');
    const src = img.attributes[0];
    src.value = datas.picture;

// 5.
const socialClass = document.getElementsByClassName('socials');

function listSocial(element1, datas) {
    for (let i = 0; i < datas.socials.length; i++) {
        element1.innerHTML += `<li><a href=${datas.socials[i].url}><img src=${datas.socials[i].link} alt=${datas.socials[i].name}></a></li>`
        
    }
}
for (let i = 0; i < socialClass.length; i++) {
    socialClass[i].innerHTML = " ";
    listSocial(socialClass[i], datas);
}

// 6.

// 7.

// 8.
