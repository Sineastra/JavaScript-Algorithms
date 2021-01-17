const { expect } = require("chai")
const reverseStr = require("./stringReversal.js")

describe("testing string reverse algorithm", () => {
    it("I am reversed => desrever ma I", () => {
        expect(reverseStr("I am reversed")).to.equal("desrever ma I")
    })
})
