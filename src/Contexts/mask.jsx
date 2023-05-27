export const maskPhone = (phone, value) => {
    
    if (value.length == 1 && phone.length == 0) {
        return "(" + value
    }
    if (value.length == 3 && phone.length == 2) {
        return value + ") "
    }
    if (value.length == 10 && phone.length == 9) {
        return value + "-"
    }
    return value
}