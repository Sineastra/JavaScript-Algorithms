const {expect} = require('chai')
const intReversal = require('./intReversal')

describe("reverse digits of integer number", function () {
	it("input: 1234 => 4321", function () {
		expect(intReversal(1234)).to.equal(4321)
	}),
	it("input: -1234 => -4321", function () {
		expect(intReversal(-1234)).to.equal(-4321)
	}),
	it("input: -1200 => -21", function () {
		expect(intReversal(-1200)).to.equal(-21)
	}),
	it("input: -0 => -0", function () {
		expect(intReversal(-0)).to.equal(-0)
	})
})