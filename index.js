
function copyPassword(){
    const password  = document.getElementById("password").textContent;

    const  textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert(`password copied to clipboard 
        ${password}`);
}

function generatePassword(){
    let char = "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQESTVWXYZ0123456789@#$&*";
    let password = "";
    for(let i=0; i<12; i++){
        let random = Math.floor(Math.random() * char.length);
        password += char[random];
    }
    document.getElementById("password").textContent = password;
}