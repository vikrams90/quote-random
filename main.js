const button = document.querySelector(".btn-success")
const buttonAuto = document.querySelector(".btn-primary")
let check = false
let count = 0
let x = 4422222
let refreshID = null
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

const toggleValue= () =>{
    count++
    console.log(count)
    if(count%2==0){
        check=false
        console.log(check)
       
    }
    else{
        check=true
        console.log(check)
    }

    if(check)
    {
        console.log("in if check")
        refreshID = setInterval(getdata,5000)
        buttonAuto.innerText="stop Auto"
    }
    else if(!check){
        console.log("in else check")
        clearInterval(refreshID)
        refreshID=null
        buttonAuto.innerText="start Auto"
    }
}

buttonAuto.addEventListener("click",toggleValue)
button.addEventListener("click",getdata)