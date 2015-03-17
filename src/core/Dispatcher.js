import FluxDispatcher from 'flux/lib/Dispatcher';
import assign from 'object-assign'

class Dispatcher extends FluxDispatcher {
    handleViewAction(action) {
        console.log('dispatcher action', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}
module.exports = new Dispatcher();