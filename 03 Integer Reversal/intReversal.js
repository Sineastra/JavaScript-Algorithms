module.exports = intReversal

function intReversal(x) {
    return Math.sign(x) * Number(`${Math.abs(x)}`.split("").reverse().join(""))
}
