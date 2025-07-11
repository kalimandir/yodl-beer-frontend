export interface BeerTap {
  id: string;
  title: string;
  location: string;
  description: string;
  transactionCurrency: string;
  transactionAmount: string;
  transactionMemo: string;
  transactionReceiverEns: string;
}

export interface BeerTapsResponse {
  status: string;
  data: {
    beerTaps: BeerTap[];
  };
}