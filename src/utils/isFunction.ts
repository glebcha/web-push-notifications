/**
 * Check if entity is function
 *
 * @category Utility
 */
export const isFunction = <T>(entity: T): boolean =>
    entity && Object.prototype.toString.call(entity) === '[object Function]';
