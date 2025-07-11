import { useQuery } from '@tanstack/react-query';
import { useSearch } from '@tanstack/react-router';
import YappSDK, { type Hex, type PaymentSimple } from '@yodlpay/yapp-sdk';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { BeerTapsResponse } from '@/types/beer';

interface PaymentSuccessDialogProps {
  location: string;
  beerTapsResponse: BeerTapsResponse;
}

export default function PaymentSuccessDialog({ location, beerTapsResponse }: PaymentSuccessDialogProps) {
  const search = useSearch({ strict: false }) as { txHash?: string };
  const [isOpen, setIsOpen] = useState(false);

  const txHash = search.txHash;

  const validatePayment = async (): Promise<PaymentSimple> => {
    const sdk = new YappSDK();
    const payment = await sdk.getPayment(txHash as Hex);

    if (!payment) {
      throw new Error('Payment not found');
    }

    const beerTap = beerTapsResponse.data.beerTaps.find(tap => tap.transactionMemo === payment.memo);

    if (!beerTap) {
      throw new Error('Beer tap not found for this payment');
    }

    const isAmountValid = payment.invoiceAmount >= beerTap.transactionAmount;
    const isCurrencyValid = payment.invoiceCurrency === beerTap.transactionCurrency;

    if (!isAmountValid || !isCurrencyValid) {
      throw new Error('Payment amount or currency does not match beer tap requirements');
    }

    setIsOpen(true);
    return payment;
  };

  const {
    data: payment,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['payment', txHash],
    queryFn: validatePayment,
    enabled: !!txHash,
  });

  const shouldShowDialog = txHash && !isLoading && !error && payment;

  if (!shouldShowDialog) {
    return null;
  }

  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader className='text-center'>
          <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
            <CheckCircle2 className='h-8 w-8 text-green-600' />
          </div>
          <DialogTitle className='text-xl'>Payment Successful!</DialogTitle>
          <DialogDescription className='text-base'>
            Your beer purchase at {location.toUpperCase()} has been completed successfully.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4'>
          <Button onClick={handleClose} className='w-full'>
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
