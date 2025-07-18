import type { BeerTap } from '@/types/beer';
import { useMutation } from '@tanstack/react-query';
import YappSDK, { FiatCurrency } from '@yodlpay/yapp-sdk';
import CheeersAnimation from '@/components/CheeersAnimation';
import { useState } from 'react';

interface PurchaseButtonProps {
  beerTap: BeerTap['beerTaps'][number];
  variant?: 'default' | 'outline' | 'secondary';
}

const sdk = new YappSDK();

export default function PurchaseButton({ beerTap, variant = 'default' }: PurchaseButtonProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  
  const handlePaymentRedirect = async () => {
    const { origin, pathname } = window.location;
    return await sdk.requestPayment({
      addressOrEns: beerTap.transactionReceiverEns,
      amount: parseFloat(beerTap.transactionAmount),
      currency: beerTap.transactionCurrency as FiatCurrency,
      memo: beerTap.transactionMemo,
      redirectUrl: `${origin}${pathname}`, // We don't want to pass params to the redirect url
    });
  };

  const paymentMutation = useMutation({
    mutationFn: handlePaymentRedirect,
    onSuccess: response => {
      console.log('Payment successful:', response);
      setShowAnimation(true);
    },
    onError: error => {
      console.error('Payment failed:', error);
    },
  });

  const handleAnimationComplete = () => {
    // After animation, proceed with Yodl payment flow
    if (import.meta.env.DEV) {
      // In development, directly trigger the Yodl payment flow
      handlePaymentRedirect().catch(error => {
        console.error('Failed to redirect to Yodl:', error);
      });
    }
    // In production, the payment flow would already be handled by the mutation
  };

  if (showAnimation) {
    return (
      <CheeersAnimation 
        onComplete={handleAnimationComplete}
      />
    );
  }

  if (paymentMutation.isSuccess && !showAnimation) {
    return (
      <button 
        disabled 
        className='w-full font-mono px-4 py-3 bg-black border-2 border-green-600 text-green-600 
                   text-sm hover:bg-green-900/20 transition-colors disabled:opacity-60 disabled:cursor-not-allowed'
      >
        $ transaction_complete ✓
      </button>
    );
  }

  return (
    <div className='space-y-2'>
      <button
        onClick={() => {
          // For testing: trigger animation directly in development
          if (import.meta.env.DEV) {
            setShowAnimation(true);
          } else {
            paymentMutation.mutate();
          }
        }}
        disabled={paymentMutation.isPending}
        className='w-full font-mono px-4 py-3 bg-black border-2 border-green-700 text-green-400 
                   text-sm hover:bg-green-900/30 hover:border-green-500 hover:text-green-300
                   transition-colors disabled:opacity-60 disabled:cursor-not-allowed
                   disabled:hover:bg-black disabled:hover:border-green-700 disabled:hover:text-green-400'
      >
        {paymentMutation.isPending
          ? '$ processing_payment...'
          : `$ purchase_beer --price=${beerTap.transactionAmount}`}
      </button>
      {paymentMutation.isError && (
        <div className='text-xs text-red-400 text-center font-mono'>
          {paymentMutation.error instanceof Error && paymentMutation.error.message === 'Payment was cancelled'
            ? '> Payment cancelled'
            : `> Payment failed: ${paymentMutation.error instanceof Error ? paymentMutation.error.message : 'Unknown error'}`}
        </div>
      )}
    </div>
  );
}
