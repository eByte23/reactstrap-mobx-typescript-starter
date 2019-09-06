import { createEventBus } from 'ts-event-bus'
import MyEvents from './events'
// import MyBasicWebSocketClientChannel from './MyBasicWebSocketClientChannel.ts'

const EventBus = createEventBus({
    events: MyEvents,
    // channels: [ new MyBasicWebSocketClientChannel('ws://your_host') ]
})

export default EventBus