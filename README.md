# nuxt-bus

> FNiX.iR

Event Bus for Nuxt.JS v3

## Install

``` bash
npm i nuxt-bus
```

``` js
// ~/plugins/bus.ts
import bus from 'nuxt-bus'
// or any name you want -> $bus
export default defineNuxtPlugin(() => ({ provide: { bus } }))
```

## Usage

``` js
// listener
this.$bus.on('event', ($event) => { /* your code with $event data */ })
// emitter
this.$bus.emit('event', eventData)
```
