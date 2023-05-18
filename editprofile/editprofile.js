deleteData = () => {
    let x = document.getElementsByClassName("data");
    for (let i=0;i<x.length;i++) {
        x[i].value = "";
    }
}
closeSetting = () => {
    let x = document.getElementById("setting");
    x.style.display = "none";
}
openSetting = () => {
    let x = document.getElementById("setting");
    x.style.display = "block";
}
//select = () => {
    let x = document.getElementsByClassName("select");

    for (let i=0;i<x.length;i++) {
        x[i].addEventListener("click",(e) => {
            if (x[i].classList.contains("change-text")) {
                x[i].classList.remove("change-text");
                console.log(x[i]);
            } else {
                x[i].classList.add("change-text");
                console.log(x[i]);
            }
            for (let j=0;j<x.length;j++) {
                if (j!==i) {
                    if (x[i].classList.contains("change-text")) {
                        x[j].classList.remove("change-text");
                        console.log(x[i]);
                    } 
                }
            }
        }
        )   
    }
//}
checkInfo = () => {
    let x = document.getElementsByClassName("data");
    for (let i=0;i<x.length;i++) {
        if (x[i].value=="") {
            x[i].style.borderColor = "red" ;
        } else {
            x[i].style.borderColor = "black" ;
        }
    }
}
validateEmail = () => {
    let x= document.getElementById("email").value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x.match(mailformat)) {
        alert("Valid email address");
    } else {
        alert("invalid email address");
    }
}
//document.getElementById("edit-profile-form").reset();