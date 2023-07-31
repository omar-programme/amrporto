
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ok039590@gmail.com",
        Password : "Omar2008!@",
        To : 'ok039590@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New conatct form ",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

var icon = document.getElementById("icon")

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "photo/moon.png"
        }else{
            icon.src = "photo/sun.png"
        }
    }

    const inputs = document.querySelectorAll(".contact-input");
    inputs.forEach((ipt) => {
        ipt.addEventListener("focus", () => {
            ipt.parentNode.classList.add("focus");
            ipt.parentNode.classList.add("not-empty");
        });
        ipt.addEventListener("blur", () => {
            if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
            }
            ipt.parentNode.classList.remove("focus");
        });
    }); 

    var typed = new Typed (".services-span", {
        strings: ["Skills", "Features"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 9000,
        loop: true
    })

    var typed = new Typed (".about-title", {
        strings: ["About me", "My History"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 9000,
        loop: true
    })

var typed = new Typed (".serv-title", {
    strings: ["Services", "For you"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 9000,
    loop: true
})


var typed = new Typed (".multi-text", {
    strings: ["Mobile Apps Developer", "IOS app developer", "Android app developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})

var typed = new Typed (".multi", {
    strings: ["Mobile Application Developer", "IOS app developer", "Android app developer"],
    typeSpeed: 45,
    backSpeed: 45,
    backDelay: 7000,
    loop: true
})


var typed = new Typed (".about-subtitle", {
    strings: ["Mobile Application Developer", "IOS app developer", "Android app developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})






var icon = document.getElementById("icon")

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "photo/moon.png"
        }else{
            icon.src = "photo/sun.png"
        }
    }



