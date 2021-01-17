const { expect } = require("chai")
const isPalindrome = require("./palindrome")

describe("checks if a word is a palindrome", function () {
    it("Red rum, sir, is murder => true", function () {
        expect(isPalindrome("Red rum, sir, is murder")).to.equal(true)
    }),
        it("émme => true", () => {
            expect(isPalindrome("émme")).to.equal(true)
        }),
        it("11/11/1111 => true", () => {
            expect(isPalindrome("11/11/1111")).to.equal(true)
        }),
        it("2020/20/02 => true", () => {
            expect(isPalindrome("2020/02/02")).to.equal(true)
        }),
        it("91019 => true", () => {
            expect(isPalindrome("91019")).to.equal(true)
        }),
        it("'' => false", () => {
            expect(isPalindrome("")).to.equal(false)
        }),
        it("null => false", () => {
            expect(isPalindrome(null)).to.equal(false)
        }),
        it("' Aba' => true", () => {
            expect(isPalindrome('Aba')).to.equal(true)
        }),
        it("0aba0 => false", () => {
            expect(isPalindrome('0aba0')).to.equal(false)
        }),
        it("a0a => false", () => {
            expect(isPalindrome('a0a')).to.equal(false)
        })
})
