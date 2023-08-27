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
        element1.innerHTML += `<li><a href=${datas.socials[i].url}><img src=${datas.socials[i].link} alt=${datas.socials[i].name}></a></li>`;
        
    }
}
for (let i = 0; i < socialClass.length; i++) {
    socialClass[i].innerHTML = " ";
    listSocial(socialClass[i], datas);
}


// 6.
const idWork = document.getElementById('works');

function travail(element2, datas) {
    for (let i = 0; i < datas.works.length; i++) {
        const div1 = document.createElement('div');
        div1.classList = "col-xl-4 col-lg-4 col-sm-6 col-12 my-2";

        const card = document.createElement('div');
        card.classList = 'card';
        div1.append(card);
        card.append.element2.innerHTML += `<img src=${datas.works[i].preview} alt=${datas.works[i].name}></img>`;
        
        const cardBody = document.createElement('div');
        cardBody.classList = "card-body w-100 px-0";
        card.append(cardBody);

        const h2 = document.createElement('h2');
        h2.classList = "card-title mt-0 mb-4 text-center";
        h2.textContent = datas.works.name;
        cardBody.append(h2);

        const ul = document.createElement('ul');
        ul.classList = "list-unstyled w-100 d-flex justify-content-center flex-wrap ";
        cardBody.append(ul);
        ul.append.element2.innerHTML += `<li><span>${datas.works[i].technology}</span></li>`;

        const row = document.createElement('div');
        row.classList = "row w-100";
        cardBody.append(row);

        const divFlex = document.createElement('div');
        divFlex.classList = "d-flex justify-content-center";
        row.append(divFlex);

        divFlex.append.element2.innerHTML += `<a href=${datas.works[i].url} class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>`

    }
}
for (let i = 0; i < works.length; i++) {
    works[i].innerHTML = " ";
    travail(works[i], datas);
    
}

// 7.

// 8.
