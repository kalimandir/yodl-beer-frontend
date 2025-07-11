import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PaymentSuccessDialogProps {
  location: string;
}

export default function PaymentSuccessDialog({ location }: PaymentSuccessDialogProps) {
  const navigate = useNavigate();
  const search = useSearch({ strict: false });
  const [isOpen, setIsOpen] = useState(false);

  // Extract payment parameters from URL
  const txHash = search.txHash as string;
  const chainId = search.chainId as string;
  const amount = search.amount as string;

  useEffect(() => {
    // Show dialog if payment success parameters are present
    if (txHash && chainId && amount) {
      setIsOpen(true);
    }
  }, [txHash, chainId, amount]);

  const handleClose = () => {
    setIsOpen(false);
    // Clean up URL parameters and redirect to location page
    navigate({
      to: '/location/$location',
      params: { location },
      replace: true,
    });
  };

  if (!txHash || !chainId || !amount) {
    return null;
  }

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
          <div className='flex gap-2'>
            <Button onClick={handleClose} className='flex-1'>
              Continue Shopping
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
