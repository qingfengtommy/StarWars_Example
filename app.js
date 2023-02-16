let btn = document.querySelector('button')
let input = document.querySelector('input')
let title = document.querySelector('div.title')
let div = document.querySelector('div.crawl')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    let searchTerm = input.value
    searchResult(searchTerm)

})



async function searchResult(searchTerm) {
    try {
        let FiveCharater = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)

        for (Character of FiveCharater.data.results) {

            console.log(Character)
            let name = document.createElement('p')
            name.innerText = "Name: " + Character.name
            div.append(name)
            let mass = document.createElement('p')
            mass.innerText = "Mass: " + Character.mass
            let date = document.createElement('p')
            date.innerText = "Birth_year: " + Character.birth_year
            div.append(mass)
            div.append(date)
            let homeworld = document.createElement('p')
            homeworld.innerText = "Homeworld: " + Character.homeworld
            div.append(homeworld)
            let species = document.createElement('p')
            species.innerText = "Species: " + Character.species
            div.append(species)

        }
    } catch (err) {
        console.log(err)
    }

}