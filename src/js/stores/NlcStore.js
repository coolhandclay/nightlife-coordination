 import dispatcher from "../dispatcher";
 import { EventEmitter } from 'events';

class NlcStore extends EventEmitter {

    constructor() {
        super();
        this.bars = [
            {
                id: 1,
                name: 'Fremont Brewing Company',
                img: '#',
                desc: 'A nice drink on the water.',
                count: 3
            },
            {
                id: 2,
                name: 'La Isla',
                img: '#',
                desc: 'A taste of Puerto Rico.',
                count: 2
            }
        ]
    }

    getAll() {
        return this.bars;
    }

    handleActions(action) {
        switch(action.type) {

        }
    }
}


 const nlcStore = new NlcStore;
 dispatcher.register(nlcStore.handleActions.bind(nlcStore));

 export default nlcStore;