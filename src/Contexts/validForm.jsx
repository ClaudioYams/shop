export const hasName = (nome) => {
    var regName = /^[A-Z][a-z].* [A-Z][a-z]+$/;
    return regName.test(nome)
}

export const hasEmail = (email) => {
    var regEmail = /\S+@\S+\.\S+/;
    return regEmail.test(email)
}

export const hasPass = (pass) => {
    var regPass = pass.length >= 6 || pass.length <= 8;
    return regPass.test(pass)
}

export const hasPhone = (phone) => {
    var regPhone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
    return regPhone.test(phone)
}
