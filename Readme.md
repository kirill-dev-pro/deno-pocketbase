# Deno pocketbase

An adaptation for [npm version of pocketbase js sdk](https://www.npmjs.com/package/pocketbase) with injected [EventSource](https://deno.land/x/eventsource)

Note that npm version of sdk is not locked in this repo, so it can be updated at any time by developers of pocketbase.

## Usage

```ts
import Pocketbase from 'https://deno.land/x/pocketbase/mod.ts'

const pb = new Pocketbase('http://127.0.0.1:8090')
```
