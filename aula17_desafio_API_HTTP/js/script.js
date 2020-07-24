let tabCountries = null;
let tabFavorites = null;
let allContries = [];
let favoriteCountries = [];
let countCountries = 0;
let countFavories = 0;
let totalPopulationList = 0;
let totalPopulationFavorites = 0;
let numberFormat = null;

window.addEventListener('load', ()=>{
    tabCountries = $('#tabCountries');
    tabFavorites = $('#tabFavorites');
    countCountries = $('#countCountries');
    countFavories = $('#countFavorites');
    totalPopulationList = $('#totalPopulationList');
    totalPopulationFavorites = $('#totalPopulationFavorites');
    //OBS para a funçao formatNumber, é nessessario a variavel ter o format Intl.NumberFormat
    numberFormat = Intl.NumberFormat('pt-BR');
 loadApi();
});

function formatNumber(number) {
return numberFormat.format(number);
}

function $(component){
    return document.querySelector(component);
}

async function loadApi(){
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    allContries = json.map(country => {
        return {
            id: country.numericCode,
            name: country.translations.br,
            population: country.population,
            flag: country.flag
        }
    });

    
    render();
}

function render() {
    renderCountryList();
    renderFavorites();
    renderSummary();
    handleCountryButtons();
}
function renderCountryList() {

    let countriesHTML = '<div>';

    allContries.forEach(country => {
        // usando destructuring, ao usar essa linha de baixo, nao precisaria, repetir a palavra 'country' toda vez embaixo
        //const {name, flag, id, population} = country;
        const countryHTML = `
            <div class="country">
                <div><a id="${country.id}" class="waves-effect waves-light btn">+</a></div>
                <div><img src="${country.flag}" alt="${country.name}"></div>
                <div><ul><li>${country.name}</li><li>${formatNumber(country.population)}</li></ul>    </div>
            </div>
        `;
        countriesHTML += countryHTML;
    });
    countriesHTML += '</div>'
    tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
    let favoritesHTML = '<div>';

    favoriteCountries.forEach(country => {
        const favoriteCountryHTML = `
            <div class="country">
                <div><a id="${country.id}" class="waves-effect waves-light btn red darken-4">-</a></div>
                <div><img src="${country.flag}" alt="${country.name}"></div>
                <div><ul><li>${country.name}</li><li>${formatNumber(country.population)}</li></ul>    </div>
            </div>
        `;
        favoritesHTML += favoriteCountryHTML;
    });

    favoritesHTML += '</div>';
    tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
    countCountries.textContent = allContries.length;
    countFavories.textContent = favoriteCountries.length;

    const totalPopulation = allContries.reduce((accumulator, current) => {
        return accumulator + current.population;
    },0);
    totalPopulationList.textContent = formatNumber(totalPopulation);



    const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    },0);
    totalPopulationFavorites.textContent = formatNumber(totalFavorites);

}

function handleCountryButtons() {
    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
    const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

    countryButtons.forEach(button => {
        button.addEventListener('click', () => addToFavorites(button.id));
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => removeFromFavorites(button.id));
    });

}

function addToFavorites(id) {
    const countryToAdd = allContries.find(country => country.id === id);
    favoriteCountries = [...favoriteCountries, countryToAdd];
    favoriteCountries.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    allContries = allContries.filter(country => {
        return country.id !== id;
    });
    render();
}

function removeFromFavorites(id) {
    const countryToRemove = favoriteCountries.find(country => {
        return country.id === id;
    });
    favoriteCountries = favoriteCountries.filter(country => {
        return country.id !== id;
    });
    allContries = [...allContries, countryToRemove];
    allContries.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });
    render();
}