const navbar = document.querySelector('ul');
const elements = document.querySelectorAll('.card');
const container = document.querySelector('.content');



for (let i = 0; i < elements.length; i++) {
    //gets the id of each of the sections present with class .card-body
    const name = elements[i].querySelector('.card-body').getAttribute('id');
    //creates an li for each section and adds it to the navbar 
    const li = document.createElement('LI');
    li.insertAdjacentHTML("afterbegin", '<a class="nav-link"  > <span class= "fa fa-info fa-lg" ></span> ${name}</a > ');
    const a = li.querySelector('a');
    //checks if its the welcome (home) to make it active
    if (name == "Welcome") {
        a.classList.add('active');
    }
    a.setAttribute('data', `${name}`);
    a.textContent = name;
    navbar.appendChild(li);

}


navbar.addEventListener('click', function (e) {
    //loops on all li in navbar to remove active class
    const navbarNew = document.querySelectorAll('li');
    for (let i = 0; i < navbarNew.length; i++) {

        navbarNew[i].querySelector('a').classList.remove('active');
    }
    //adds it to the target (what was clicked)
    e.target.classList.add('active');
    const n = e.target.getAttribute('data');
    const elm = document.getElementById(`${n}`);
    //scrolls into the selected element 
    elm.scrollIntoView({ behavior: "smooth" });

});


// return true if section is in view 
function inView(elem) {
    const inV = elem.getBoundingClientRect();
    return (
        inV.top >= 0
        &&
        inV.top < (window.innerHeight || document.documentElement.clientHeight)

    );
}


document.addEventListener('scroll', function (e) {
    //loops on all sections to check if its in view
    for (let i = 0; i < elements.length; i++) {
        const chk = elements[i];
        if (inView(chk)) {
            // if in view adds "active" to it  corresponding li element class list and removes it from the others in navbar
            const ind = chk.getAttribute('id')
            const navbarNew = document.querySelectorAll('li');
            for (let i = 0; i < navbarNew.length; i++) {
                if (navbarNew[i].querySelector('a').getAttribute('data') == ind) {
                    navbarNew[i].querySelector('a').classList.add('active');
                }
                else {
                    navbarNew[i].querySelector('a').classList.remove('active');
                }
            }
        }

    }

});

