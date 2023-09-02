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

// 1. selection et modification du contenu h1 qui a id fullName
    const fullName = document.getElementById('fullName');
    fullName.textContent = "Hey, I'm " + datas.fullname;

// 2. selection et modification du contenu h1 qui a id profil
    const profil = document.getElementById('profil');
    profil.textContent = datas.profil;

// 3. selection et modification du contenu p qui a id description
    const description = document.getElementById('description');
    description.textContent = datas.description;

// 4. selection et modification du contenu img qui a id picture
    const img = document.getElementById('picture');
    const src = img.attributes[0];
    src.value = datas.picture;

// 5. Sélectionnez tous les éléments possèdant la classe socials 
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


// 6. Sélectionnez tous les éléments possèdant l'identifiant works
const idWork = document.getElementById('works');
for (let i = 0; i < datas.works.length; i++) {
    idWork.innerHTML += 
`<div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
    <div class="card">
      <img class="card-img-top" src="${datas.works[i].preview}" alt="${datas.works[i].name}">
      <div class="card-body w-100 px-0">
        <h2 class="card-title mt-0 mb-4 text-center">${datas.works[i].name}</h2>
        <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap ">
        <li>
              <span class="card-link">${datas.works[i].technology}</span>
            </li>
        </ul>
        <div class="row w-100">
          <div class="d-flex justify-content-center">
            <a href="${datas.works[i].url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>`
}


    // for (let i = 0; i < datas.works.length; i++) {
    //     const div1 = document.createElement('div');
    //     div1.classList = "col-xl-4 col-lg-4 col-sm-6 col-12 my-2";

    //     const card = document.createElement('div');
    //     card.classList = 'card h-100';
    //     div1.append(card);
        
    //     const image = document.createElement('img');
    //     image.classList = "card-img-top";
    //     image.src = datas.works[i].preview;
    //     image.alt = datas.works[i].name;
    //     card.append(image);
        
    //     const cardBody = document.createElement('div');
    //     cardBody.classList = "card-body w-100 px-0";
    //     card.append(cardBody);

    //     const h2 = document.createElement('h2');
    //     h2.classList = "card-title mt-0 mb-4 text-center";
    //     h2.textContent = datas.works[i].name;
    //     cardBody.append(h2);

    //     const ul = document.createElement('ul');
    //     ul.classList = "list-unstyled w-100 d-flex justify-content-center flex-wrap ";
    //     cardBody.append(ul);
    //     for (let j = 0; j < datas.works[i].technology.length; j++) {
    //         const li = document.createElement('li');
    //         const span = document.createElement('span');
    //         span.classList = "card-link";
    //         span.textContent = datas.works[i].technology[j];
    //         li.append(span);
    //         ul.append(li);
            
    //     }
        

    //     const row = document.createElement('div');
    //     row.classList = "row w-100";
    //     cardBody.append(row);

    //     const divFlex = document.createElement('div');
    //     divFlex.classList = "d-flex justify-content-center";
    //     row.append(divFlex);

    //     const lien = document.createElement('a');
    //     lien.classList = "text-decoration-none px-4 py-3 mt-2 rounded";
    //     lien.href = datas.works[i].url;
    //     lien.textContent = "See Project";
    //     divFlex.append(lien);

    //     idWork.append(div1);
    // }
    

// 7. Sélectionnez tous les éléments possèdant l'identifiant experiences 
const idExperience = document.getElementById('experiences');

for (let i = 0; i < datas.experiences.length; i++) {
    const divCol = document.createElement('div');
    divCol.classList = "col-xl-4 col-lg-4 col-sm-6 col-12 my-2";
    console.log(divCol);

    const divCard = document.createElement('div');
    divCard.classList = "card h-100";
    divCol.append(divCard);

    const image2 = document.createElement('img');
    image2.classList = "card-img-top";
    image2.src = datas.experiences[i].link;
    image2.alt = datas.experiences[i].name;
    divCard.append(image2);

    const cardBody2 = document.createElement('div');
    cardBody2.classList = "card-body w-100 px-0";
    divCard.append(cardBody2);

    const titre = document.createElement('h2');
    titre.classList = "card-title mt-0 mb-4 text-center";
    titre.textContent = datas.experiences[i].name;
    cardBody2.append(titre);

    const list_ul = document.createElement('ul');
    list_ul.classList = "list-unstyled w-100 d-flex justify-content-center flex-wrap";
    cardBody2.append(list_ul);
    for (let j = 0; j < datas.experiences[i].technology.length; j++) {
        const list_li = document.createElement('li');
        const span2 = document.createElement('span');
        span2.classList = "card-link";
        span2.textContent = datas.experiences[i].technology[j];
        list_li.append(span2);
        list_ul.append(list_li);
        
    }
    idExperience.append(divCol);
    
}


// 8. selection et modification de l'element h1 qui a id mail
const mail = document.getElementById('mail');
mail.textContent = datas.email;
