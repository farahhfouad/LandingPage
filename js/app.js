const navbar = document.querySelector('ul');
const elements = document.querySelectorAll('.card');
const container = document.querySelector('.content');
// const containter = document.createDocumentFragment();


for (let i = 0; i < elements.length; i++) {

    const name = elements[i].querySelector('.card-body').getAttribute('id');
    const li = document.createElement('LI');
    li.insertAdjacentHTML("afterbegin", '<a class="nav-link"  > <span class= "fa fa-info fa-lg" ></span> ${name}</a > ');
    const a = li.querySelector('a');
    if (name == "Welcome") {
        a.classList.add('active');
    }
    a.setAttribute('data', `${name}`);
    a.textContent = name;
    navbar.appendChild(li);

}


navbar.addEventListener('click', function (e) {
    const navbarNew = document.querySelectorAll('li');

    for (let i = 0; i < navbarNew.length; i++) {
        console.log("class list " + navbarNew[i].classList);
        navbarNew[i].querySelector('a').classList.remove('active');
    }
    e.target.classList.add('active');
    const n = e.target.getAttribute('data');
    const elm = document.getElementById(`${n}`);

    elm.scrollIntoView();

});

function inView(elem) {
    const inV = elem.getBoundingClientRect();

    return (
        inV.top >= 0
        &&
        inV.top < (window.innerHeight || document.documentElement.clientHeight)

    );
}


document.addEventListener('scroll', function (e) {
    for (let i = 0; i < elements.length; i++) {

        const chk = elements[i];
        if (inView(chk)) {
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



//OLd method used to determine which element is in viewport by detemrining where the mouse is over

// container.addEventListener('mouseover', function (e) {
//     if (e.target.nodeName == "DIV") {
//         const ind = e.target.getAttribute('id');
//         console.log(ind);
//         if (ind != 'top' || ind !== null || ind !== 'null') {
//             const navbarNew = document.querySelectorAll('li');
//             for (let i = 0; i < navbarNew.length; i++) {
//                 if (navbarNew[i].querySelector('a').getAttribute('data') == ind) {
//                     navbarNew[i].querySelector('a').classList.add('active');
//                 }
//                 else {
//                     navbarNew[i].querySelector('a').classList.remove('active');
//                 }
//             }

//         }
//     }

// });