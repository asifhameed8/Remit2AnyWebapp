export class CryptoNetwork {
  private static readonly ethMainnet = new CryptoNetwork(1);
  private static readonly polygonMainnet = new CryptoNetwork(137);
  private static readonly goreli = new CryptoNetwork(5);
  private static readonly mumbai = new CryptoNetwork(80001);

  private static readonly chainIdMap: Record<number, CryptoNetwork> = {
    1: CryptoNetwork.ethMainnet,
    137: CryptoNetwork.polygonMainnet,
    5: CryptoNetwork.goreli,
    80001: CryptoNetwork.mumbai,
  };

  readonly chainId: number;
  readonly networkName: string;
  readonly currency: string;
  readonly isProdNetwork: boolean;
  readonly isTestNetwork: boolean;

  public constructor(chainId: number) {
    this.chainId = chainId;
    // Production
    if (this.chainId == 1) {
      this.networkName = "Etherum";
      this.currency = "ETH";
      this.isProdNetwork = true;
    } else if (this.chainId == 137) {
      this.networkName = "Polygon";
      this.currency = "MATIC";
      this.isProdNetwork = true;
    }

    // test
    else if (this.chainId == 5) {
      this.networkName = "Etherum Goerli";
      this.currency = "GoerliETH";
      this.isProdNetwork = false;
    } else if (this.chainId == 80001) {
      this.networkName = "Polygon Mumbai";
      this.currency = "MATIC";
      this.isProdNetwork = false;
    }
    this.isTestNetwork = !this.isProdNetwork;
  }

  static getCryptoNetwork(chainId: number): CryptoNetwork | null {
    if (CryptoNetwork.getSupportedTokensList().includes(chainId)) {
      return CryptoNetwork.chainIdMap[chainId];
    }
    return null;
  }
  static getSupportedTokensList(): number[] {
    return Object.keys(CryptoNetwork.chainIdMap).map((i) => Number(i));
  }
}
