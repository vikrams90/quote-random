const button = document.querySelector(".btn-success")
let x = 4422222
const getdata = async () => {
    console.log("button clicked")
    const data = await fetch("https://dummyjson.com/quotes/random")
    const quote = await data.json()
    console.log(quote)
    const title = document.querySelector(".card-title")
    title.innerHTML=quote.author
    const quoteText = document.querySelector("#quote")
    quoteText.innerText=quote.quote
    const tag =document.querySelector(".bg-warning")
    tag.innerHTML="Good Day Thought "+quote.id
    const background = document.querySelector(".card-body")
    // background.style.backgroundcolor='url("https://source.unsplash.com/random/")'
    let y = x.toString(16)
    y="#"+y
    background.style.backgroundColor=y
    x=x+100000
};








button.addEventListener("click",getdata)