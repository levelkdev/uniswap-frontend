import { ReactNode, useContext } from 'react'
import { Sliders } from 'react-feather'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ReactComponent as Bridge } from '../../../assets/images/bridge.svg'
import { ReactComponent as EcoRouter } from '../../../assets/images/eco-router.svg'
import Row from '../../../components/Row'
import { MouseoverTooltip } from '../../../components/Tooltip'
import { useActiveWeb3React } from '../../../hooks'
import { useRouter } from '../../../hooks/useRouter'
import { ecoBridgeUIActions } from '../../../services/EcoBridge/store/UI.reducer'
import { supportedChainIdList } from '../LimitOrderBox/constants'
import { SwapContext, SwapTab } from '../SwapContext'

const TabsColumn = styled.div`
  max-width: 457px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 10px;
`

const TabsRow = styled(Row)`
  display: inline-flex;
  width: auto;
  padding: 2px 6px;
  background: ${({ theme }) => theme.bg6};
  border-radius: 12px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text5};
  border-radius: 10px;
  border: none;
  background: none;
  cursor: pointer;

  &.active {
    color: #ffffff;
    background: ${({ theme }) => theme.bg2};
    font-size: 12px;
    line-height: 14px;
  }

  &:disabled {
    color: ${({ theme }) => theme.text6};
    cursor: not-allowed;
  }
`

const StyledEcoRouter = styled(EcoRouter)`
  margin-right: 5px;
`
const StyledSliders = styled(Sliders)`
  margin-right: 5px;
  width: 14px;
`
const StyledBridge = styled(Bridge)`
  margin-right: 5px;
  width: 14px;
  fill: ${({ theme }) => theme.text5};
`

export function Tabs({ children }: { children?: ReactNode }) {
  const { t } = useTranslation('swap')
  const { activeTab, setActiveTab } = useContext(SwapContext)
  const dispatch = useDispatch()
  const { navigate, pathname } = useRouter()

  return (
    <TabsColumn>
      <TabsRow>
        <Button
          onClick={() => {
            setActiveTab(pathname.includes('pro') ? SwapTab.AdvancedTradingView : SwapTab.Swap)
          }}
          className={activeTab === SwapTab.Swap || activeTab === SwapTab.AdvancedTradingView ? 'active' : ''}
        >
          <StyledEcoRouter />
          Swap
        </Button>
        <LimitOrderTab className={activeTab === SwapTab.LimitOrder ? 'active' : ''} setActiveTab={setActiveTab} />
        <Button
          title="Bridge Swap"
          onClick={() => {
            dispatch(ecoBridgeUIActions.setBridgeSwapStatus(true))
            navigate('/bridge')
          }}
          className={activeTab === SwapTab.BridgeSwap ? 'active' : ''}
        >
          <StyledBridge />
          {t('tabs.bridgeSwap')}
        </Button>
      </TabsRow>
      {children}
    </TabsColumn>
  )
}

const LimitOrderTab = ({ className, setActiveTab }: { className?: string; setActiveTab: any }) => {
  const { chainId, account } = useActiveWeb3React()
  const { t } = useTranslation('swap')
  const noLimitOrderSupport = chainId ? !supportedChainIdList.includes(chainId) : true
  if (account == null || noLimitOrderSupport) {
    return (
      <MouseoverTooltip content={noLimitOrderSupport ? 'Unsupported network' : 'Connect your wallet'} placement="top">
        <Button
          className={className}
          onClick={() => setActiveTab(SwapTab.LimitOrder)}
          disabled={noLimitOrderSupport || account == null}
        >
          <StyledSliders />
          {t('tabs.limit')}
        </Button>
      </MouseoverTooltip>
    )
  }

  return (
    <Button onClick={() => setActiveTab(SwapTab.LimitOrder)} className={className}>
      <StyledSliders />
      {t('tabs.limit')}
    </Button>
  )
}