import { MenuBar } from '../../../../pages/MenuBar'
import { SwapPage } from '../../../../pages/SwapPage'
import { NetworkSwitcher } from '../../../../pages/NetworkSwitcher'
import { ChainsEnum } from '../../../../utils/enums/ChainsEnum'
import { MetamaskNetworkHandler } from '../../../../utils/MetamaskNetworkHandler'
import { TokenMenu } from '../../../../pages/TokenMenu'

describe('Switching from mainnet tests', () => {
  const TRANSACTION_VALUE: number = 0.00000001
  before(() => {
    cy.clearLocalStorage()
    MetamaskNetworkHandler.addARinkeby()
    MetamaskNetworkHandler.addGnosis()
    MetamaskNetworkHandler.switchToNetworkIfNotConnected()
    SwapPage.visitSwapPage()
    MenuBar.connectWallet()
  })
  beforeEach(() => {
    cy.wait(5000)
    MetamaskNetworkHandler.switchToNetworkIfNotConnected()
  })
  afterEach(() => {})
  after(() => {
    cy.disconnectMetamaskWalletFromAllDapps()
    cy.wait(500)
  })

  it('Should display that Ropsten network isnt supported [TC-56]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('ropsten')
    MenuBar.getUnsupportedNetworkWarning().should('be.visible')
    MenuBar.getUnsupportedNetworkPopover().should('be.visible')
  })
  it.skip('Should switch from unsupported network to mainnet wallet [TC-57]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('ropsten')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.ethereum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.MAINNET)
  })
  it('Should switch from mainnet to gnosis by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('ethereum')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.gnosis().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.GNOSIS)
  })
  it('Should switch from mainnet to arbitrum by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('ethereum')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.arbitrum().click()
    cy.wait(4000)
    cy.allowMetamaskToAddAndSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.ARBITRUM)
  })
  it('Should switch from mainnet to Polygon by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('ethereum')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.polygon().click()
    cy.allowMetamaskToAddAndSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.POLYGON)
  })
  it('Should switch from gnosis to mainnet by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('Gnosis')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.ethereum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.MAINNET)
  })
  it('Should switch from gnosis to arbitrum by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('Gnosis')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.arbitrum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.ARBITRUM)
  })
  it('Should switch from gnosis to polygon by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('Gnosis')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.polygon().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.POLYGON)
  })
  it('Should switch from rinkeby to mainnet by dapp [TC-55]', () => {
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.ethereum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.MAINNET)
  })
  it('Should switch from rinkeby to arbitrum by dapp [TC-55]', () => {
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.arbitrum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.ARBITRUM)
  })
  it('Should switch from rinkeby to gnosis by dapp [TC-55]', () => {
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.gnosis().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.GNOSIS)
  })
  it('Should switch from rinkeby to polygon by dapp [TC-55]', () => {
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.polygon().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.POLYGON)
  })
  it('Should switch from a. rinkeby to mainnet by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('Arbitrum Rinkeby')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.ethereum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.MAINNET)
  })
  it('Should switch from a. rinkeby to arbitrum by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('Arbitrum Rinkeby')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.arbitrum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.ARBITRUM)
  })
  it('Should switch from a. rinkeby to Polygon by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('Arbitrum Rinkeby')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.polygon().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.POLYGON)
  })
  it('Should switch from a. rinkeby to gnosis by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('Arbitrum Rinkeby')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.gnosis().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.GNOSIS)
  })
  it('Should switch from arbitrum one to polygon by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('arbitrum one')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.polygon().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.POLYGON)
  })
  it('Should switch from arbitrum one to mainnet by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('arbitrum one')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.ethereum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.MAINNET)
  })
  it('Should switch from arbitrum one to gnosis by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('arbitrum one')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.gnosis().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.GNOSIS)
  })
  it('Should switch from polygon to mainet by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('polygon mainnet')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.ethereum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.MAINNET)
  })
  it('Should switch from polygon to mainet by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('polygon mainnet')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.arbitrum().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.ARBITRUM)
  })
  it('Should switch from polygon to mainet by dapp [TC-55]', () => {
    MetamaskNetworkHandler.switchToNetworkIfNotConnected('polygon mainnet')
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.gnosis().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.GNOSIS)
  })
  it('Should switch from mainnet to gnosis after starting the swap process [regression-test] [TC-61]', () => {
    cy.changeMetamaskNetwork('ethereum')
    SwapPage.openTokenToSwapMenu().searchAndChooseToken('dxd')
    SwapPage.getCurrencySelectors().first().click()
    TokenMenu.searchAndChooseToken('weth')
    SwapPage.typeValueFrom(TRANSACTION_VALUE.toFixed(9).toString())
    SwapPage.chooseExchange('swapr').click()
    MenuBar.getNetworkSwitcher().click()
    NetworkSwitcher.gnosis().click()
    cy.allowMetamaskToSwitchNetwork()
    NetworkSwitcher.checkNetwork(ChainsEnum.GNOSIS)
  })
})
