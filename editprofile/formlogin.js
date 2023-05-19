
let submit = document.querySelector(".login-button");
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username);
    fetch('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        })
      })
            .then(res=>res.json())
            
            .then(data => {
              localStorage.setItem("data",JSON.stringify(data));
              
              
              console.log(data);
              //localStorage.setItem("token",JSON.stringify(data.token));
              window.open("editprofile.html");  
                              
            })
            
            // .catch((err) => {
            //     console.log(err);
            //   }); 
});
            const x= JSON.parse(localStorage.getItem("data"));
            