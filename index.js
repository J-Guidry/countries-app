const listParent = document.querySelector(".output");
// var input = document.querySelector("#input").value;

const initCountries = ['usa', 'germany', 'brazil', 'iceland'];

const initial = (init) => {
    const firstFour = async () => {
        for(let i = 0; i < 4; i++){
            let url = new URL(`https://restcountries.eu/rest/v2/all`);
            fetch(url)
            .then(res => res.json())
            .then(data => {  
                return populateUl(data[i]);
            })
            .catch(err => console.log(err));
        }
    }
    const fourPromise = new Promise(resolve => {
        for(let i = 0; i < 4; i++){
            let url = new URL(`https://restcountries.eu/rest/v2/name/${init[i]}`);
            fetch(url)
            .then(res => res.json())
            .then(data => {
                populateUl(data[0]);
                return resolve(firstFour);
            })
            //.then(()=> resolve(firstFour))
        }
    });

    fourPromise.then((result) => result());
}

function populateUl(data) {
    const ul = document.createElement("ul");
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

    console.log(data);
    listParent.appendChild(ul);
    flag.setAttribute("src", data.flag);
    flag.setAttribute("width", "300px");

    li.appendChild(flag);
    name.textContent = data.name;
    li.appendChild(name);

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

initial(initCountries);
