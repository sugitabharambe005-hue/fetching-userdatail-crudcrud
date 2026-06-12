function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone:event.target.phone.value

    }
    
    axios.post("https://crudcrud.com/api/401c75a57453426e8bce0192f6a8b191/appoinmentData",
  userDetails)

        .then((response) =>showUserOnScreen(response.data))
.catch((err)=>console.log(err))
    

  
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/401c75a57453426e8bce0192f6a8b191/appoinmenetData")


        .then((response) => {
            response.data.forEach((user) => {
        showUserOnScreen(user)
    })
        })
.catch((err)=>console.log(err))



})
function showUserOnScreen(user){
    const parentNode = document.querySelector("ul");
    const childHTML = `<li>${user.username}-${user.email}-${user.phone}</li>`;
    parentNode.innerHTML += childHTML;

}

// Do not touch the code below
module.exports = handleFormSubmit;
