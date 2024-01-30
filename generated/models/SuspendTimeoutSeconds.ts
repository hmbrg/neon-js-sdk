/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Duration of inactivity in seconds after which the compute endpoint is
 * automatically suspended. The value `0` means use the global default.
 * The value `-1` means never suspend. The default value is `300` seconds (5 minutes).
 * The maximum value is `604800` seconds (1 week). For more information, see
 * [Auto-suspend configuration](https://neon.tech/docs/manage/endpoints#auto-suspend-configuration).
 *
 */
export type SuspendTimeoutSeconds = number;
