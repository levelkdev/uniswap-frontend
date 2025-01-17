import { ChainId, Token, UniswapV2RoutablePlatform } from '@swapr/sdk'

import { configureStore, Store } from '@reduxjs/toolkit'

import { AdapterKey } from '../../advancedTradingView.types'
import advancedTradingView, { actions } from '../../store/advancedTradingView.reducer'

import { BaseAdapter, BaseAppState } from './base.adapter'
import { PairBurnsAndMints, PairSwaps, PairSwapsBurnsAndMints } from './base.types'

const USDC_TOKEN = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')
const USDT_TOKEN = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')

jest.mock('graphql-request')

const SUBGRAPH_API_KEY = '5f28b2eb91e916650da7ffe9bd228774'

describe('BaseAdapter', () => {
  let store: Store<BaseAppState>
  let baseAdapter: BaseAdapter<BaseAppState, PairSwapsBurnsAndMints, PairSwaps, PairBurnsAndMints>

  beforeEach(() => {
    store = configureStore({
      reducer: { advancedTradingView },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    })

    baseAdapter = new BaseAdapter({
      key: AdapterKey.SWAPR,
      adapterSupportedChains: [ChainId.MAINNET, ChainId.ARBITRUM_ONE, ChainId.GNOSIS],
      platform: UniswapV2RoutablePlatform.SWAPR,
      subgraphUrls: {
        [ChainId.MAINNET]: `https://gateway-arbitrum.network.thegraph.com/api/${SUBGRAPH_API_KEY}/subgraphs/id/DQApa5vhVyx1sajkrF8zEFmLJTYyyMyw8WdiYt5hw9Fn`,
        [ChainId.ARBITRUM_ONE]: `https://gateway-arbitrum.network.thegraph.com/api/${SUBGRAPH_API_KEY}/subgraphs/id/H2EYoeTL5qDNeUeFecReCBvEq6BPCx4EnEDoAv7UTyL5`,
        [ChainId.GNOSIS]: `https://gateway-arbitrum.network.thegraph.com/api/${SUBGRAPH_API_KEY}/subgraphs/id/EWoa3JwNntAWtaLsLixTU25smp4R5tzGvs9rFXx9NHKZ`,
        [ChainId.POLYGON]: '',
        [ChainId.OPTIMISM_MAINNET]: '',
      },
    })

    baseAdapter.setInitialArguments({
      chainId: ChainId.MAINNET,
      store,
    })

    store.dispatch(actions.setPairTokens({ inputToken: USDC_TOKEN, outputToken: USDT_TOKEN }))
  })

  it('isSupportedChainId works correctly', () => {
    // base adapter supported chains [ChainId.MAINNET, ChainId.ARBITRUM_ONE, ChainId.GNOSIS]
    expect(baseAdapter.isSupportedChainId(ChainId.MAINNET)).toBeTruthy()
    expect(baseAdapter.isSupportedChainId(ChainId.ARBITRUM_ONE)).toBeTruthy()
    expect(baseAdapter.isSupportedChainId(ChainId.GNOSIS)).toBeTruthy()

    expect(baseAdapter.isSupportedChainId(ChainId.GOERLI)).toBeFalsy()
    expect(baseAdapter.isSupportedChainId(ChainId.POLYGON)).toBeFalsy()
    expect(baseAdapter.isSupportedChainId(ChainId.OPTIMISM_GOERLI)).toBeFalsy()
    expect(baseAdapter.isSupportedChainId(ChainId.OPTIMISM_MAINNET)).toBeFalsy()
  })
})
