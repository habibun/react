import constants from './../constants/app-constants';
import dispatcher from './../dispatcher/dispatcher';
import {EventEmitter} from 'events';

//TODO backing variables
let _count = 0;

function getCount(){
    return _count;
}

function incrementCount(){
    console.log('incrementCount method start.')
    _count = _count + 1;
    console.log('incrementCount method end.');
}

//TODO define the actual store
export let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,

    emitChange: function(){
        console.log('emit change event start.');
        this.emit('CHANGE_EVENT')
        console.log('emit change event end.');
    },

    addChangeListener: function(callback){
        console.log('add change listener event start.');
        this.on('CHANGE_EVENT', callback)
        console.log('add change listener event end.');
    },
    
    removeChangeListener: function(callback){
        console.log('remove change listener start.');
        this.removeListener('CHANGE_EVENT', callback)
        console.log('remove change listener end.');
    }
})

//TODO register with the dispatcher
dispatcher.register(action =>{
    console.log('dispatch register in store start.');
    switch(action.actionType){
        case constants.INCREMENT:
        incrementCount()
        TodoStore.emitChange()
        break;
    }
    console.log('dispatch register in store end.');
})