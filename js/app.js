const navbar = document.querySelector('ul');
const elements = document.querySelectorAll('.card');


const containter = document.createDocumentFragment();
for (let i = 0; i < elements.length; i++) {

    const name = elements[i].querySelector('.card-body').getAttribute('id');
    const li = document.createElement('LI');
    li.insertAdjacentHTML("afterbegin", '<a class="nav-link" href="#+name" > <span class= "fa fa-info fa-lg" ></span> ${name}</a > ');
    const a = li.querySelector('a');
    if (name == "Welcome") {
        a.classList.add('active');
    }
    a.setAttribute('href', `#${name}`);
    a.textContent = name;
    navbar.appendChild(li);

}
navbar.addEventListener('click', function (e) {
    const navbarNew = document.querySelectorAll('li');
    console.log(navbarNew);
    for (let i = 0; i < navbarNew.length; i++) {
        console.log("class list " + navbarNew[i].classList);
        navbarNew[i].querySelector('a').classList.remove('active');
    }
    e.target.classList.add('active');

})