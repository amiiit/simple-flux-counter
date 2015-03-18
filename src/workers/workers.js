import ConfigStore from '../stores/ConfigStore'
import BackendActions from '../actions/BackendActions'

var isPushEnabled = false;


function sendSubscriptionToServer(subscription) {
    console.log('please add subscription', subscription);
}

function initialiseState() {
    // Are Notifications supported in the service worker?
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        console.warn('Notifications aren\'t supported.');
        return;
    }

    // Check the current Notification permission.
    // If its denied, it's a permanent block until the
    // user changes the permission
    if (Notification.permission === 'denied') {
        console.warn('The user has blocked notifications.');
        return;
    }

    // Check if push messaging is supported
    if (!('PushManager' in window)) {
        console.warn('Push messaging isn\'t supported.');
        return;
    }

    BackendActions.setPushNotificationAllowed(true);

    // We need the service worker registration to check for a subscription
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        // Do we already have a push message subscription?
        serviceWorkerRegistration.pushManager.getSubscription()
            .then(function (subscription) {
                // Enable any UI which subscribes / unsubscribes from
                // push messages.
                BackendActions.setPushNotificationAllowed(true);

                if (!subscription) {
                    // We aren't subscribed to push, so set UI
                    // to allow the user to enable push
                    BackendActions.setPushNotificationEnabled(false);

                    return;
                }

                // Keep your server in sync with the latest subscriptionId
                sendSubscriptionToServer(subscription);

                BackendActions.setPushNotificationEnabled(true);
                BackendActions.setPushNotificationAllowed(true);
            })
            .catch(function (err) {
                console.warn('Error during getSubscription()', err);
            });
    });
}

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
                        initialiseState();
                    });
            } else {
                console.warn('Service workers aren\'t supported in this browser.');
            }
        });
    }
}