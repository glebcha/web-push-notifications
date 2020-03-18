import * as api from '../constants/api';
import { getConfig } from './getConfig';

const { warn } = console;

/**
 * Unegister on push server with provided configuration from [[getUnregisterConfig]] output
 *
 * @category Push server API
 */
export function unregisterOnPushServer(isSafari?: boolean): Promise<Response | void> {
    const config = getConfig('unregister');
    const requestParams: RequestInit = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
    };

    return fetch(`${api.API_URL}/${isSafari ? api.API_UNREGISTER_SAFARI : api.API_UNREGISTER}`, requestParams)
        .catch(({ message }) => warn(`Failed to unregister SW on push server: ${message}`));
}
