'use strict';

var orehash = require('bindings')('orehash');
var assert = require('assert');

describe('Hash', function() {
  // Genesis block
  var buf = Buffer.from('01000000000000000000000000000000000000000000000000000000000000000000000028eb69aa985ba7c78b9ba4330aa6be8b86cbe692ec766bf6f7a9f3d09e750e6d834b2f5af0ff0f1e304720020101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4f04ffff001d010447746865677561726469616e2031332f4f63742f3230313720426974636f696e20707269636520736f6172732061626f75742024352c30303020746f207265636f72642068696768ffffffff0100ca9a3b000000003432049fad2642410713ee18830254864c23793fa9dfe708985b8aa779edb03f6ca8003dc96d0d60f874161333756d8bb529a20eac00000000', 'hex');
  
  describe('Lyra2REv3', function() {
    it('calculates the hash of the Galactrum genesis block correctly', function() {
      assert.equal(orehash.SumLyra2REv3(buf).toString('hex'), 'f59dc05be34d63a38cecdc6a5271e2ca47752d3bc3031ec92e4506efc9879d18');
    });
  });
  describe('Lyra2REv2', function() {
    it('calculates the hash of the Galactrum genesis block correctly', function() {
      //Should return the genesis block hash: 0000082da923a04678394f873852c7f08b777af30224b6e23296f586370e80ae
      assert.equal(orehash.SumLyra2REv2(buf).toString('hex'), 'ae800e3786f59632e2b62402f37a778bf0c75238874f397846a023a92d080000');
    });
  });
  describe('Lyra2RE', function() {
    it('calculates the hash of the Galactrum genesis block correctly', function() {
      assert.equal(orehash.SumLyra2RE(buf).toString('hex'), 'bf6d20783aa0cd97c93a00b6366598b35331a6901f79e0ca2026e514a6ed51ba');
    });
  });
  describe('Scrypt-N', function() {
    it('calculates the hash of the Galactrum genesis block correctly', function() {
      assert.equal(orehash.SumScryptN(buf).toString('hex'), 'ace1d1c6134029574ea51cb9d3632f04a275c98255af5324263cc50d75668a1f');
    });
  });
});
