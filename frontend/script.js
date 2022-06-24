// console.log('hello vilag');

let x = "egy valtozo vagyok :)";

console.log(x);

x = "En megvaltoztam.";

console.log(x);

const obj = {
    kulcs: "ertek",
    kulcs2: 132,
    boolivan: true,
    kulcs4: "123",
    tomb: ['lara croft', 'indiana jones'],
    obivan: {
        key1: "string",
        key2: 951,
        key3: ['luke', 'vegtelen']
    }
}

const arr = [
    'string',
    456,
    false,
    '798'
]

arr[1] = 987;
arr[19] = "kamsklvmdsklmvdskl";

// function hellothere() {
//     console.log('hello there');
// }

// window.addEventListener('click', hellothere);

function countryComponent(country) {
    return `
        <div class="country">
           ${country.name.common}
        </div>
    `
}

async function loadEvent() {
    let root = document.getElementById('root');
    // root.insertAdjacentHTML('beforeend', `
    //     <h1>${arr.length}</h1>
    // `);
    // for (let index = 5; index <= 10; index++) {
    //     console.log('The current value of index is: ', index);
    //     root.insertAdjacentHTML('beforeend', `
    //         <h1>${index}</h1>
    //     `);
    // }

    const countries = await fetch('https://restcountries.com/v3.1/all');
    console.log(countries);
    const countriesJson = await countries.json();
    console.log(countriesJson);

    for (let index = 0; index < countriesJson.length; index++) {
        // console.log(countriesJson[index].name.common);
        root.insertAdjacentHTML('beforeend', countryComponent(countriesJson[index]));
    }
}


window.addEventListener('load', loadEvent);

