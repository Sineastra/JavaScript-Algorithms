module.exports = isPalindrome

function isPalindrome(str) {
    if (!str) return false
    str = str
        .replace("é", "e")
        .replace(/[^a-zA-Z0-9]*/g, "")
        .split("")
        .filter(x => x !== " ")
        .join("")
        .toLocaleLowerCase()
    if (!/^[a-zA-Z]+$|^[0-9]+$/g.test(str)) return false
    return str === str.split("").reverse().join("")
}
