const listParent = document.querySelector(".output");
const input = document.querySelector("#input");
const selectRegion = document.querySelector(".select-country");
const detail = document.querySelector("a");
const initCountries = ['usa', 'germany', 'brazil', 'iceland'];

const initial = (init) => {
    const ul = document.createElement("ul");
    ul.setAttribute("class", "list");
    listParent.appendChild(ul);
    const firstFour = async () => {
        for(let i = 0; i < 4; i++){
            let url = new URL(`https://restcountries.eu/rest/v2/all`);
            fetch(url)
            .then(res => res.json())
            .then(data => {  
                return populateUl(data[i], ul);
            })
            .catch(err => err);
        }
    }
    const fourPromise = new Promise(resolve => {
        for(let i = 0; i < 4; i++){
            let url = new URL(`https://restcountries.eu/rest/v2/name/${init[i]}`);
            fetch(url)
            .then(res => res.json())
            .then(data => {
                populateUl(data[0], ul);
                return resolve(firstFour);
            })
        }
    });

    fourPromise.then((result) => result());
}

function populateUl(data, ul) {
    const li = document.createElement("li");
    const flag = document.createElement("img");
    const detail = document.createElement("a");
    const name = document.createElement("h2");
    const population = document.createElement("p");
    const capital = document.createElement("p");
    const region = document.createElement("p");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");

    flag.setAttribute("src", data.flag);
    flag.setAttribute("width", "100%");
    flag.setAttribute("height", "auto");
    flag.setAttribute("alt", `flag of ${data.name}`)
    li.appendChild(flag);
    name.textContent = data.name;

    detail.setAttribute("class", "detail");
    detail.appendChild(name);
    detail.onclick = renderDetail.bind(this, li, data);
    li.appendChild(detail);

    population.textContent = data.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    span.textContent = "Population: ";
    population.prepend(span);
    li.appendChild(population);

    span2.textContent = "Region: ";
    region.textContent = data.region;
    region.prepend(span2);
    li.appendChild(region);

    span3.textContent = "Capital: ";
    capital.textContent = data.capital;
    capital.prepend(span3);
    li.appendChild(capital);
    ul.appendChild(li);
}

selectRegion.onclick = () => {
    if(selectRegion.value !== "filter"){
        let url = new URL(`https://restcountries.eu/rest/v2/region/${selectRegion.value}`)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(listParent.firstChild !== null){
                listParent.firstElementChild.remove();
            }
            const ul = document.createElement("ul");
            ul.setAttribute("class", "list");
            listParent.appendChild(ul);
            data.forEach(function(country) {
                populateUl(country, ul);
            })
        });
    }
}

input.addEventListener("keypress", function(event) {
    if(event.which === 13) {
        const url = new URL(`https://restcountries.eu/rest/v2/name/${input.value}`);
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(listParent.firstChild !== null){
                listParent.firstElementChild.remove();
            }
            const ul = document.createElement("ul");
            ul.setAttribute("class", "list");
            listParent.appendChild(ul);
            populateUl(data[0], ul);
        })
        .then(err => err)
    }
             
});

function renderDetail(li, data){
    document.querySelector("main").remove();
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const ul = document.createElement("ul");

    ul.setAttribute("class", "list");
    //create p elements
    const name = li.childNodes[1];
    name.onclick = "";
    const region = li.childNodes[3];

    name.after(data.nativeName);
    region.after(data.subregion);
    ul.appendChild(li);
    main.appendChild(ul);
    body.appendChild(main);
}


//initial(initCountries);

