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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface GasTokenDetails
 */
export interface GasTokenDetails {
  /**
   * Address of gas token.
   * @type {string}
   * @memberof GasTokenDetails
   */
  address: string
  /**
   * URL for icon of gas token.
   * @type {string}
   * @memberof GasTokenDetails
   */
  icon: string
  /**
   * Name of gas token.
   * @type {string}
   * @memberof GasTokenDetails
   */
  name: string
  /**
   * Symbol of gas token.
   * @type {string}
   * @memberof GasTokenDetails
   */
  symbol: string
  /**
   * Decimals of gas token.
   * @type {number}
   * @memberof GasTokenDetails
   */
  decimals: number
  /**
   * Minimum amount to be left for gas while using max amount.
   * @type {string}
   * @memberof GasTokenDetails
   */
  minNativeCurrencyForGas: string
}

export function GasTokenDetailsFromJSON(json: any): GasTokenDetails {
  return GasTokenDetailsFromJSONTyped(json, false)
}

export function GasTokenDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GasTokenDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    address: json['address'],
    icon: json['icon'],
    name: json['name'],
    symbol: json['symbol'],
    decimals: json['decimals'],
    minNativeCurrencyForGas: json['minNativeCurrencyForGas'],
  }
}

export function GasTokenDetailsToJSON(value?: GasTokenDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    address: value.address,
    icon: value.icon,
    name: value.name,
    symbol: value.symbol,
    decimals: value.decimals,
    minNativeCurrencyForGas: value.minNativeCurrencyForGas,
  }
}
