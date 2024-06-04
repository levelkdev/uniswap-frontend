/* tslint:disable */
/* eslint-disable */
/**
 * Movr Aggregator API
 * The Movr Aggregator API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import {
  SupportedBridgesOutputDTO,
  SupportedBridgesOutputDTOFromJSON,
  SupportedBridgesOutputDTOToJSON,
  SupportedChainsOutputDTO,
  SupportedChainsOutputDTOFromJSON,
  SupportedChainsOutputDTOToJSON,
} from '../models'

export interface SupportedControllerGetAllSupportedRoutesRequest {
  aPIKEY?: string
}

/**
 *
 */
export class SupportedApi extends runtime.BaseAPI {
  /**
   */
  async supportedControllerGetAllBridgesRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<SupportedBridgesOutputDTO>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/v2/supported/bridges`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => SupportedBridgesOutputDTOFromJSON(jsonValue))
  }

  /**
   */
  async supportedControllerGetAllBridges(initOverrides?: RequestInit): Promise<SupportedBridgesOutputDTO> {
    const response = await this.supportedControllerGetAllBridgesRaw(initOverrides)
    return await response.value()
  }

  /**
   */
  async supportedControllerGetAllSupportedRoutesRaw(
    requestParameters: SupportedControllerGetAllSupportedRoutesRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<SupportedChainsOutputDTO>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.aPIKEY !== undefined && requestParameters.aPIKEY !== null) {
      headerParameters['API-KEY'] = String(requestParameters.aPIKEY)
    }

    const response = await this.request(
      {
        path: `/v2/supported/chains`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => SupportedChainsOutputDTOFromJSON(jsonValue))
  }

  /**
   */
  async supportedControllerGetAllSupportedRoutes(
    requestParameters: SupportedControllerGetAllSupportedRoutesRequest = {},
    initOverrides?: RequestInit
  ): Promise<SupportedChainsOutputDTO> {
    const response = await this.supportedControllerGetAllSupportedRoutesRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
