import * as Pocketbase from 'npm:pocketbase'
import { EventSource } from 'https://deno.land/x/eventsource@v0.0.3/mod.ts'

declare global {
  var EventSource: EventSource
  interface Window {
    EventSource: any
  }
}

window.EventSource = EventSource

export default Pocketbase
