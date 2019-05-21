var orehash = require('bindings')('orehash');

// Genesis block
var buf = Buffer.from('01000000000000000000000000000000000000000000000000000000000000000000000028eb69aa985ba7c78b9ba4330aa6be8b86cbe692ec766bf6f7a9f3d09e750e6d834b2f5af0ff0f1e304720020101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4f04ffff001d010447746865677561726469616e2031332f4f63742f3230313720426974636f696e20707269636520736f6172732061626f75742024352c30303020746f207265636f72642068696768ffffffff0100ca9a3b000000003432049fad2642410713ee18830254864c23793fa9dfe708985b8aa779edb03f6ca8003dc96d0d60f874161333756d8bb529a20eac00000000', 'hex');

//Should return the genesis block hash: 0000082da923a04678394f873852c7f08b777af30224b6e23296f586370e80ae
console.log("Lyra2REv3:\nActual -\t\t", orehash.SumLyra2REv3(buf));
console.log("Expected\t\tf5 9d c0 5b e3 4d 63 a3 8c ec dc 6a 52 71 e2 ca 47 75 2d 3b c3 03 1e c9 2e 45 06 ef c9 87 9d 18")
console.log("Lyra2REv2:\nActual -\t\t", orehash.SumLyra2REv2(buf));
console.log("Expected\t\tae 80 0e 37 86 f5 96 32 e2 b6 24 02 f3 7a 77 8b f0 c7 52 38 87 4f 39 78 46 a0 23 a9 2d 08 00 00")
console.log("Lyra2RE:\nActual -\t\t", orehash.SumLyra2RE(buf));
console.log("Expected\t\tbf 6d 20 78 3a a0 cd 97 c9 3a 00 b6 36 65 98 b3 53 31 a6 90 1f 79 e0 ca 20 26 e5 14 a6 ed 51 ba")
console.log("Scrypt-N:\nActual -\t\t", orehash.SumScryptN(buf));
console.log("Expected\t\tac e1 d1 c6 13 40 29 57 4e a5 1c b9 d3 63 2f 04 a2 75 c9 82 55 af 53 24 26 3c c5 0d 75 66 8a 1f")
