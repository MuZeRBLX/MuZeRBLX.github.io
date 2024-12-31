let list = [{Username:"Yessir",Password:"Yessir"},{Username:"MuZe",Password:"password123"}]

function DoLogin() {

    const UInput = document.getElementById("InputUsername")
    const PInput = document.getElementById("InputPassword")

    const Username = UInput.value
    const Password = PInput.value

    var CurrentState = 0

    console.log(Username)
    console.log(Password)
    
    for (let v of list) {

    if (Username === v.Username && Password === v.Password) {

        console.log("Loggin in")
        CurrentState = 1
    }else
    {console.log("invalid Credentials")
}

    if (CurrentState == 0) {

        document.getElementById("CreateButton").innerText = "Invalid Credentials"
    setTimeout(() => {document.getElementById("CreateButton").innerText = "Login";},1500)

    }else if (CurrentState == 1) {

        document.getElementById("CreateButton").innerText = "You Logged In!"
        setTimeout(() => {document.getElementById("CreateButton").innerText = "Login";},1500)
        window.open("https://muzerblx.github.io/website",'_parent')
        window.close()

    }

}

};

document.getElementById("CreateButton").onclick = ()=>{

    DoLogin()

}
