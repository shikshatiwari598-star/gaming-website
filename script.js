// ================= EXPLORE GAMES BUTTON =================


const exploreButton = document.querySelector("#home button");


exploreButton.addEventListener("click", function(){
    document.querySelector("#games").scrollIntoView({
        behavior:  "smooth"

    });

});



// ================= PLAY NOW BUTTONS =================


const playButton = document.querySelectorAll(" .game-card button");


playButton.forEach(function (button){


    const gameName = this.parentElement.querySelector("h3").textCnotent;


    alert(" you selected: " +gameName);

});



// ================= CONTACT FORM =================


const form = document.querySelector("form");


form.addEventListener("submit", function (event){

     
    event.preventDefault();


    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value; 
    const message = document.querySelector("#message").value;


    if(name==="" || email==="" || message ===""){


        alert("⚠️ Please fill all the fields.");

    }else{


        alert("✅ Thank you, " + name + "! Your message has been sent");


        form.reset();
    }
});



// ================= NAVIGATION =================


const navLinks= document.querySelectorAll("nav a");


navLinks.forEach(function (link){


    link.addEventListener("click", function (){


        console.log("you clicked: " + this.textCnotent);

    });
});