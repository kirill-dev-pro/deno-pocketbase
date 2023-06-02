import * as Pocketbase from 'npm:pocketbase'
import { EventSource } from 'https://deno.land/x/eventsource@v0.0.3/mod.ts'

declare global {
  interface Window {
    EventSource: typeof EventSource
  }
}

self.EventSource = EventSource

export default Pocketbase
