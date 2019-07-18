# is-port-reachable [![CircleCI](https://circleci.com/gh/FrankMerema/is-port-reachable/tree/master.svg?style=svg&circle-token=4339deb3d323d2b2ce145f086d7db49e58ed86cb)](https://circleci.com/gh/FrankMerema/is-port-reachable/tree/master)

> Check if a local or remote port is reachable


## Install

```
$ npm install @frankmerema/is-port-reachable
```
or
```
$ yarn install @frankmerema/is-port-reachable
```

## Usage

```js
const isPortReachable = require('is-port-reachable');

(async () => {
	console.log(await isPortReachable(80, {host: 'google.com'}));
	//=> true
})();
```


## API

### isPortReachable(port, [options])

Returns `Promise<boolean>`.

#### port

Type: `number`

#### options

Type: `Object`

##### host

Type: `string`<br>
Default: `localhost`

Can be a domain or an IP.

##### timeout

Type: `number`<br>
Default: `1000`

Milliseconds to wait before giving up.
