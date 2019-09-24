import { MobxStore } from "./mobxStore";
import { create } from "mobx-persist";
import { AudioStore } from "./audioStore";
import { AuthStore } from "./authStore";
import { PageViewStore } from "./pageViewStore";

interface Stores {
    [key: string]: any;
}

export const stores: Stores = {
    mobxStore: new MobxStore(),
    audioStore: new AudioStore(),
    authStore: new AuthStore(),
    pageViewStore: new PageViewStore(),
}

const hydrate = create({
    storage: localStorage,
    jsonify: true
});

Object.keys(stores).map((val) => hydrate(val, stores[val]))

