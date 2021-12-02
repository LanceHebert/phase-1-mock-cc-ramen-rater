// write your code here
fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(data => {
    console.log(data);
    
    renderRamen();
    addRamen();
function renderRamen(){  
    RamenImgDiv = document.querySelector("#ramen-menu");
    RamenImgDiv.innerHTML = "";  

for(let element of data)
{
    img = document.createElement("img");
    img.src = element.image
    img.alt = "Ramen Pictures"
    img.addEventListener("click",(event)=>{
    addComments(element)
    console.log("this is the event",event.target.src)
    })    
    RamenImgDiv.append(img)
}
const addComments = ( element  ) => {

    const rating = document.getElementById("rating-display");
    const comments = document.getElementById("comment-display");
    let bigImg = document.querySelector(".detail-image")
    const nameInsert = document.querySelector(".name")
    const restaurantInsert =document.querySelector(".restaurant")

    console.log("IMage selected",bigImg);
    // console.log("ELement image",element);
    rating.textContent = element.rating;
    comments.textContent = element.comment;
    bigImg.src = element.image
    nameInsert.textContent = element.name;
    restaurantInsert.textContent = element.restaurant;
    
}
}

    function addRamen(){
        form = document.querySelector("#new-ramen")
        form.addEventListener("submit",(event) => {
            event.preventDefault();
            console.log(event.target)

            let newRamenObj = {
                name: event.target.name.value,
                restaurant: event.target.restaurant.value,
                image: event.target.image.value,
                rating: event.target.rating.value,
                comment: event.target["new-comment"].value,
                
            }
            console.log(newRamenObj);
            data.push(newRamenObj)
            renderRamen();
        })    
    }
    
})
