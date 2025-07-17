import { Button } from '@/components/ui/button';
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
    if (process.env.NODE_ENV === 'development') {
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
      <Button variant='outline' disabled>
        Purchase Successful ✓
      </Button>
    );
  }

  return (
    <div className='space-y-2'>
      <Button
        onClick={() => {
          // For testing: trigger animation directly in development
          if (process.env.NODE_ENV === 'development') {
            setShowAnimation(true);
          } else {
            paymentMutation.mutate();
          }
        }}
        disabled={paymentMutation.isPending}
        variant={variant}
        className='w-full'
      >
        {paymentMutation.isPending
          ? 'Processing...'
          : `Buy for ${beerTap.transactionCurrency} ${beerTap.transactionAmount}`}
      </Button>
      {paymentMutation.isError && (
        <div className='text-sm text-red-600 text-center'>
          {paymentMutation.error instanceof Error && paymentMutation.error.message === 'Payment was cancelled'
            ? 'Payment cancelled'
            : `Payment failed: ${paymentMutation.error instanceof Error ? paymentMutation.error.message : 'Unknown error'}`}
        </div>
      )}
    </div>
  );
}
