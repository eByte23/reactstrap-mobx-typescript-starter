import EventBus from "../bus"
import { stores } from "../../stores";
import { IAudioStore } from "../../stores/audioStore";




const EventListeners = () => {
    EventBus.addAudioFile.on((url) => {
        const audioStore = stores.audioStore as IAudioStore;
        console.log("Got Event")

        audioStore.addFile(url);
        return true;
    });
}


export default EventListeners;