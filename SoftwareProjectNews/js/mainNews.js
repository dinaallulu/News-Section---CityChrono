const API_KEY = "6a48f4f797c8464498e112e7628e2c8b"
const URL = "https://newsapi.org/v2/everything?q="

// let DATA_ARRAY = []

async function fetchData(query) {
    const res = await fetch(`${URL}${query}&apiKey=${API_KEY}`) //&category=${category}
    const data = await res.json()
    return data
}

fetchData("all").then(data => renderMain(data.articles))

function renderMain(arr) {

    let newsdisplayHTML = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].urlToImage) {
            if (i === 0 || i == 5 || (i > 5 && (i + 1) % 5 === 0)) {
                newsdisplayHTML += `
                <div class="newsCard">
                    <a class="newsDetails" href=${arr[i].url} target="_blank">
                    <img src=${arr[i].urlToImage} alt="">
                    <div class="overlay"></div>
                    <div class="newsTitle">
                        <h4>${arr[i].title}</h4>
                        <p>${arr[i].description}</p>
                    </div>
                    </a>
                </div>
                `;
            } else {
                newsdisplayHTML += `
                <div class="newsCards">
                    <a class="newsDetails" href=${arr[i].url} target="_blank">
                    <img src=${arr[i].urlToImage} alt="">
                    <div class="newsTitle">
                        <h5>${arr[i].title}</h5>
                        <p>${arr[i].description}</p>
                    </div>
                    </a>
                </div>
                `;
            }
        }
    }

    document.getElementById("newsdisplay").innerHTML = newsdisplayHTML
}

const searchBtn = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")

searchBtn.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log(searchInput.value)

    const data = await fetchData(searchInput.value)
    renderMain(data.articles)

})

async function Search(query) {
    const data = await fetchData(query)
    renderMain(data.articles)
}
