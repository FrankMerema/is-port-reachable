# is-port-reachable 
[![CircleCI](https://circleci.com/gh/FrankMerema/is-port-reachable/tree/master.svg?style=svg&circle-token=4339deb3d323d2b2ce145f086d7db49e58ed86cb)](https://circleci.com/gh/FrankMerema/is-port-reachable/tree/master) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

Check if a local or remote port is reachable


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
	//=> resolves -> true
	console.log(await isPortReachable(0, {host: ''}));
	//=> rejects -> {error: '<message>'}
})();
```


## API

### isPortReachable(port, [options])

Returns `Promise<boolean | Error>`.

### port

Type: `number`

### options

Type: `IsPortReachableOptions`

#### IsPortReachableOptions
##### host

Type: `string`\
Default: `''` (which results in `localhost`) 

Can be a domain or an IP.

##### timeout (Optional)

Type: `number`\
Default: `1000`

Milliseconds to wait before giving up.
