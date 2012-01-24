var mocha = require('mocha')
  , should = require('should')
  , dice = require('../lib/dice')

describe('dice', function() {
  describe('The dice rolling module', function() {
    it ('should properly roll 3d6', function() {
      for (var i = 0; i < 100000; i++) {
        var roll = dice.roll('3d6')
        roll.should.be.a('number')
        roll.should.be.above(2)
        roll.should.be.below(19)
      }
    })

    it ('should properly roll 12d10', function() {
      for (var i = 0; i < 100000; i++) {
        var roll = dice.roll('12d10')
        roll.should.be.a('number')
        roll.should.be.above(11)
        roll.should.be.below(121)
      }
    })

    it ('should properly roll 3d6-6', function(){
      for (var i = 0; i < 100000; i++) {
        var roll = dice.roll('3d6-6')
        roll.should.be.a('number')
        roll.should.be.above(-4)
        roll.should.be.below(13)
      }
    })

    it ('should properly roll 1d6+6', function(){
      for (var i = 0; i < 100000; i++) {
        var roll = dice.roll('1d6+6')
        roll.should.be.a('number')
        roll.should.be.above(6)
        roll.should.be.below(13)
      }
    })
  })
})
