const form = {
    username: document.querySelector("#username"),
    password: document.querySelector("#password")
};
let submit = document.querySelector(".login-button");
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    fetch('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then(data => {
                window.open("editprofile.html");
                
            })
            // .catch((err) => {
            //     console.log(err);
            //   }); 
});