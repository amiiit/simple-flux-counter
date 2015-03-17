import FluxDispatcher from 'flux/lib/Dispatcher';
import assign from 'object-assign'

class Dispatcher extends FluxDispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

    handleBackendAction(action) {
        this.dispatch({
            source: 'BACKEND_ACTION',
            action: action
        });
    }

}
module.exports = new Dispatcher();