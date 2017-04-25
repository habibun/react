import constants from './../constants/app-constants';
import dispatcher from './../dispatcher/dispatcher';

export let incrementActions = {
    incrementCount: () => {
        console.log('action method start.');
        dispatcher.dispatch({
            actionType: constants.INCREMENT
        })
        console.log('action method end.');        
    }
}
