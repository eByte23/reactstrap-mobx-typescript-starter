import { observable, action, 
    // computed
 } from 'mobx';
import { persist } from 'mobx-persist';

export interface IAudioStore {
   

    addFile(url: string): void;
    files: string[];
}

export class AudioStore implements IAudioStore {

    @persist @observable files: string[] = [];

    @action.bound
    public addFile(url: string): void {
        this.files.push(url);
    }
}
