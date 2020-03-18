import * as api from '../constants/api';
import { getConfig } from './getConfig';

const { warn } = console;

/**
 * Register on push server with provided configuration from [[getRegisterConfig]] output
 *
 * @category Push server API
 */
export function registerOnPushServer(isSafari?: boolean): Promise<Response | void> {
    const config = getConfig();
    const requestParams: RequestInit = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
    };

    return fetch(`${api.API_URL}/${isSafari ? api.API_REGISTER_SAFARI : api.API_REGISTER}`, requestParams)
        .catch(({ message }) => warn(`Failed to unregister SW on push server: ${message}`));
}
