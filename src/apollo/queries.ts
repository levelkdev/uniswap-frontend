import { gql } from '@apollo/client'

export const GET_AGGREGATED_DISTRIBUTION_DATA = gql`
  query {
    bundles {
      ethPrice
    }
    aggregatedToken0DistributionDatas(skip: $offset, first: $limit) {
      id
      distributions {
        stakablePair {
          id
        }
        rewards {
          token {
            derivedETH
          }
          amount
        }
      }
      token0 {
        address: id
        symbol
        decimals
        name
      }
    }
  }
`

export const GET_DISTRIBUTIONS_BY_AGGREGATION = gql`
  query getByAggregation($id: ID!) {
    bundles {
      ethPrice
    }
    aggregatedToken0DistributionData(id: $id) {
      token0 {
        address: id
        symbol
        decimals
      }
      distributions {
        id
        stakablePair {
          token1 {
            address: id
            symbol
            decimals
          }
        }
        rewards {
          token {
            derivedETH
          }
          amount
        }
      }
    }
  }
`

export const GET_PAIR_24H_VOLUME_USD = gql`
  query getPair24hVolume($id: ID!) {
    pair(id: $id) {
      volumeUSD
    }
  }
`

export const GET_PAIR_LIQUIDITY_USD = gql`
  query getPair24hVolume($id: ID!) {
    pair(id: $id) {
      reserveUSD
    }
  }
`
