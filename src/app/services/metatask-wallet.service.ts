import { Injectable } from '@angular/core';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { WALLET_CONNECT_OPTIONS } from '@utils/metatask-wallet.constants';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { EthereumProvider } from '@walletconnect/ethereum-provider';
import { environment } from '@env/environment';
import { CryptoNetwork } from 'app/models/crypto-network.model';
//Incompelte
@Injectable({
  providedIn: 'root',
})
export class MetamaskWalletService {
  private web3js: Web3;
  private provider: any;
  private accounts: any;
  public web3Modal: any;

  private accountStatusSource = new Subject<any>();
  public accountStatus$ = this.accountStatusSource.asObservable();

  constructor() {
    debugger;
    const ethereumInit = EthereumProvider.init(WALLET_CONNECT_OPTIONS);
    ethereumInit.then((ethereumProvider) => {
      debugger;
      const walletConnectOptions = {
        package: ethereumProvider,
      };
      const coinbaseWalletOptions = {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: 'Remit2Any', // Required
          infuraId: 'ce791659cecb441ba14a37ca94ee2010', // Required
          // 137 is polygon
          chainId: 137, // Optional. It defaults to 1 if not provided
        },
      };
      const providerOptions = {
        walletconnect: walletConnectOptions,
        coinbasewallet: coinbaseWalletOptions,
      };

      this.web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true, // optional
        providerOptions, // required
        theme: {
          background: 'rgb(39, 49, 56)',
          main: 'rgb(199, 199, 199)',
          secondary: 'rgb(136, 136, 136)',
          border: 'rgba(195, 195, 195, 0.14)',
          hover: 'rgb(16, 26, 32)',
        },
      });
    });
  }

  async disconnect() {
    this.web3Modal.clearCachedProvider();
    console.log('Wallets disconnected');
  }

  async connectAccount(walletProviderName: string, useCached: boolean = true) {
    debugger;
    // TODO Remove this if we want remove caching
    if (!useCached) {
      this.web3Modal.clearCachedProvider();
      console.log('Cleared cached Provider');
    }

    const subscribeProvider = async (provider: any) => {
      debugger;
      if (!provider.on) {
        return;
      }
      provider.on('accountsChanged', async (accounts: any) => {
        console.log('event accountsChanged');
        window.location.reload();
      });
      provider.on('chainChanged', async (chainId: any) => {
        console.log('event chainChanged');
        window.location.reload();
      });
    };
    const onConnect = async () => {
      const provider = await this.web3Modal.connect();
      await subscribeProvider(provider);
      return provider;
    };
    this.provider = await onConnect(); // set provider
    await window.web3.currentProvider.enable();
    this.web3js = new Web3(this.provider); // create web3 instance
    await this.validateNetwork();
    this.accounts = await this.web3js.eth.getAccounts();
    this.accountStatusSource.next(this.accounts);
  }

  async validateNetwork() {
    if (this.web3js && this.web3js.eth) {
      let chainId: number = await Number(this.web3js.eth.getChainId());
      if (CryptoNetwork.getSupportedTokensList().includes(chainId)) {
        let cryptoNetwork: CryptoNetwork = CryptoNetwork.getCryptoNetwork(
          await Number(this.web3js.eth.getChainId())
        ) as CryptoNetwork;
        if (environment.production && cryptoNetwork.isTestNetwork) {
          this.web3Modal.clearCachedProvider();
          let message =
            'Trying to access ' +
            cryptoNetwork.networkName +
            ' (Test) from Production network';
          throw new Error(message);
        }
      } else {
        let message =
          'Unsupported blockchain (' +
          (await this.web3js.eth.getChainId()) +
          '). Change the network to Ethereum or Polygon';
        throw new Error(message);
      }
    }
  }
}
