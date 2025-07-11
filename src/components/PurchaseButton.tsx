import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import YappSDK, { FiatCurrency } from '@yodlpay/yapp-sdk';
import type { BeerTap } from '@/types/beer';

interface PurchaseButtonProps {
  beerTap: BeerTap;
  variant?: 'default' | 'outline' | 'secondary';
}

const sdk = new YappSDK();

export default function PurchaseButton({ beerTap, variant = 'default' }: PurchaseButtonProps) {
  const paymentMutation = useMutation({
    mutationFn: async () => {
      return await sdk.requestPayment({
        addressOrEns: beerTap.transactionReceiverEns,
        amount: parseFloat(beerTap.transactionAmount),
        currency: beerTap.transactionCurrency as FiatCurrency,
        memo: beerTap.transactionMemo,
        redirectUrl: window.location.href
      });
    },
    onSuccess: (response) => {
      console.log('Payment successful:', response);
    },
    onError: (error) => {
      console.error('Payment failed:', error);
    }
  });

  if (paymentMutation.isSuccess) {
    return (
      <Button variant="outline" disabled>
        Purchase Successful ✓
      </Button>
    );
  }

  return (
    <div className="space-y-2">
      <Button 
        onClick={() => paymentMutation.mutate()} 
        disabled={paymentMutation.isPending}
        variant={variant}
        className="w-full"
      >
        {paymentMutation.isPending ? 'Processing...' : `Buy for ${beerTap.transactionCurrency} ${beerTap.transactionAmount}`}
      </Button>
      {paymentMutation.isError && (
        <div className="text-sm text-red-600 text-center">
          {paymentMutation.error instanceof Error && paymentMutation.error.message === 'Payment was cancelled'
            ? 'Payment cancelled'
            : `Payment failed: ${paymentMutation.error instanceof Error ? paymentMutation.error.message : 'Unknown error'}`
          }
        </div>
      )}
    </div>
  );
}