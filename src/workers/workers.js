import ConfigStore from '../stores/ConfigStore'
import BackendActions from '../actions/BackendActions'

var isPushEnabled = false;

export default
class Workers {

    static initialize() {

        ConfigStore.addChangeListener(function () {
            isPushEnabled = ConfigStore.getCurrentConfig('pushNotificationsEnabled');
            console.log('isPushEnabled', isPushEnabled);
        });

        window.addEventListener('load', function () {
            // Check that service workers are supported, if so, progressively
            // enhance and add push messaging support, otherwise continue without it.
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js')
                    .then(function (registration) {
                        console.log('initialiseState here', registration.scope, registration);
                    });
            } else {
                console.warn('Service workers aren\'t supported in this browser.');
            }
        });
    }
}