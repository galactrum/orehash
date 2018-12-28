# orehash

orehash is a Node.js native module for Galactrum proof of work functions. It provides methods for Lyra2RE, Lyra2REv2 and Scrypt-N(2048).

## Usage

    var orehash = require('orehash');

    var buf = Buffer.from('700000005d385ba114d079971b29a9418fd0549e7d68a95c7f168621a314201000000000578586d149fd07b22f3a8a347c516de7052f034d2b76ff68e0d6ecff9b77a45489e3fd511732011df0731000', 'hex');

    console.log(orehash.SumLyra2REv2(buf));
    console.log(orehash.SumLyra2RE(buf));
    console.log(orehash.SumScryptN(buf));

## Note

When running `npm test`, if the below error happens:
```
Error: Could not locate the bindings file.
```

Do the following:
```
sudo npm install -g node-gyp
node-gyp rebuild
```
