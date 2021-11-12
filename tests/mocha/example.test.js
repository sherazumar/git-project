const { expect } = require("chai");

describe('Testing mocha', () => {
    it('should expect 2', () => {
        const res = 1 + 1;
        expect(res).to.equal(2)
    })
})