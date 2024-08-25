/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProjectJWKSRequest } from '../models/AddProjectJWKSRequest';
import type { GeneralError } from '../models/GeneralError';
import type { JWKS } from '../models/JWKS';
import type { ProjectJWKSResponse } from '../models/ProjectJWKSResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns all JWKS definitions for a project
     * Returns all JWKS definitions for a project
     *
     * @param projectId The Neon project ID
     * @returns ProjectJWKSResponse The JWKS definitions for the project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectJwks(
        projectId: string,
    ): CancelablePromise<ProjectJWKSResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/jwks',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Adds a JWKS to a project
     * Add a new JWKS to a project
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns JWKS The JWKS URL was added to the project's authentication connections
     * @throws ApiError
     */
    public addProjectJwks(
        projectId: string,
        requestBody: AddProjectJWKSRequest,
    ): CancelablePromise<GeneralError | JWKS> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/jwks',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a JWKS
     * Delete the specified JWKS from the project
     * @param projectId The Neon project ID
     * @param jwksId The JWKS ID
     * @returns JWKS Deleted the specified JWKS from the project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectJwks(
        projectId: string,
        jwksId: string,
    ): CancelablePromise<JWKS | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/jwks/{jwks_id}',
            path: {
                'project_id': projectId,
                'jwks_id': jwksId,
            },
        });
    }
}
