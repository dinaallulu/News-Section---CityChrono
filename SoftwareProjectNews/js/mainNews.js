const API_KEY = "6a48f4f797c8464498e112e7628e2c8b"
const URL = "https://newsapi.org/v2/everything?q="

let DATA_ARRAY = []

async function fetchData(query){
    const res = await fetch(`${URL}${query}&apiKey=${API_KEY}`) //&category=${category}
    const data = await res.json()
    return data
}

fetchData("all").then(data => renderMain(data.articles))

function renderMain(arr){
    
    let newsdisplayHTML = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i].urlToImage){
            newsdisplayHTML += `
            <div class="newsCards">
                <a class="newsDetails" href=${arr[i].url} target="_blank">
                    <img src=${arr[i].urlToImage} alt="">
                    <div class="newsTitle">
                        <h5>${arr[i].title}</h5>
                        
                    </div>
                </a>
            </div>        
            `
        }
    }
// <p>${arr[i].description}</p>
    document.getElementById("newsdisplay").innerHTML = newsdisplayHTML
}
