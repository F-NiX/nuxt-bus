const all = new Map()

export default {
  all,
  on(type, handler) {
    const handlers = all!.get(type)
    if (handlers) handlers.push(handler)
    else all!.set(type, [handler])
  },
  off(type, handler) {
    const handlers = all!.get(type)
    if (!handlers) return
    if (handler) handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    else all!.set(type, [])
  },
  emit(type, evt) {
    let handlers = all!.get(type)
    if (handlers) handlers.slice().map((handler) => handler(evt!))
    handlers = all!.get('*')
    if (handlers) handlers.slice().map((handler) => handler(type, evt!))
  }
}
