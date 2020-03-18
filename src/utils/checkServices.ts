/**
 * Check whether push notifications supported or not
 *
 * @category Utility
 */
interface CheckServices{
    isSafari: boolean;
    isSupported: boolean;
}

export function checkServices(): CheckServices {
    const isSupported = 'serviceWorker' in navigator && 'PushManager' in window;
    const isSafari = 'safari' in window && 'pushNotification' in window.safari;

    return { isSupported, isSafari };
}
