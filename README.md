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

You can get all handlers of all types set in project `.all`

And you can use `.off` method to stop listening to an event, or just a specific handler in it

``` js
this.$bus.all
//
this.$bus.off('event')
//
this.$bus.on('event', handler)
this.$bus.off('event', handler)
```
