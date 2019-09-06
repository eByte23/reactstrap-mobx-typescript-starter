import { slot, Slot } from 'ts-event-bus'

const MyEvents = {
    sayHello: slot<string>(),
    getTime: slot<null, string>(),
    multiply: slot<{ a: number, b: number }, number>(),
    ping: slot<void>(),
    addAudioFile: slot<string, boolean>(),
}

export default MyEvents