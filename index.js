
let container = document.createElement("div")
container.setAttribute("class","container")
document.body.appendChild(container)

let heading = document.createElement("h1")
heading.textContent="Movie Reviews"
container.appendChild(heading)

let ipDiv = document.createElement("div")
ipDiv.classList.add("formDiv")
container.appendChild(ipDiv)

let titleDiv = document.createElement("div")
titleDiv.classList.add("titleContainer")
ipDiv.appendChild(titleDiv)

let movieLabel = document.createElement("label")
movieLabel.textContent="MovieTitle"
movieLabel.style.marginBottom="7px"
titleDiv.appendChild(movieLabel)

let movieIp = document.createElement("input")
movieIp.id="movieIpId"
titleDiv.appendChild(movieIp)

let reviewDiv = document.createElement("div")
reviewDiv.classList.add("reviewContainer")
ipDiv.appendChild(reviewDiv)

let reviewLabel = document.createElement("label")
reviewLabel.textContent="Movie Review"
reviewLabel.setAttribute=("for","textarea")
reviewLabel.style.marginBottom="7px"
reviewDiv.appendChild(reviewLabel)

let reviewTb = document.createElement("textarea")
reviewTb.setAttribute("rows","5")
reviewTb.setAttribute("cols","50")
reviewTb.id="textarea"
reviewDiv.appendChild(reviewTb)

let btn = document.createElement("button")
btn.textContent="Save"

btn.onclick = function(){
    let titleElement = document.getElementById("movieIpId")
    let titleValue = titleElement.value
    let TitleParaElement = document.getElementById("paraTitleId")
    TitleParaElement.textContent=titleValue

    let reviewElement = document.getElementById("textarea")
    let reviewValue = reviewElement.value
    let reviewParaElement = document.getElementById("paraReviewId")
    reviewParaElement.textContent=reviewValue

}
container.appendChild(btn)

let opDiv = document.createElement("div")
opDiv.classList.add("opDivClass")
container.appendChild(opDiv)

let paraTitle = document.createElement("p")
paraTitle.id="paraTitleId"
paraTitle.style.fontWeight="bold"
opDiv.appendChild(paraTitle)

let paraReview = document.createElement("p")
paraReview.id="paraReviewId"
opDiv.appendChild(paraReview)

console.log(container)