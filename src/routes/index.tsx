import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className='min-h-screen bg-black text-green-400 font-mono'>
      <Container className='px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-start justify-start min-h-screen text-left pt-6 sm:pt-8 pb-6'>
          
          {/* Terminal Header */}
          <div className='w-full mb-4 sm:mb-8'>
            <div className='text-green-300 text-xs sm:text-sm mb-2'>
              $ ssh user@tapthat.terminal
            </div>
            <div className='text-green-500 text-xs sm:text-sm mb-4'>
              Connection established...
            </div>
          </div>
          
          {/* TAPTHAT Logo - Retroctech Font */}
          <div className='mb-4 sm:mb-8 text-left w-full'>
            <div className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-green-400 py-4 sm:py-6 font-retro'>
              TAPTHAT
            </div>
          </div>
          
          {/* System Info */}
          <div className='mb-6 sm:mb-8 space-y-2 sm:space-y-2 text-xs sm:text-sm'>
            <div className='flex flex-row gap-1 sm:gap-2'>
              <span className='text-green-300'>SYSTEM:</span> 
              <span className='text-white text-xs sm:text-sm'>CRYPTO POWERED SELF-SERVICE BEER TERMINAL</span>
            </div>
            <div>
              <span className='text-green-300'>STATUS:</span> <span className='text-green-400'>ONLINE</span>
            </div>
            <div className='flex flex-row gap-1 sm:gap-2'>
              <span className='text-green-300'>PAYMENT:</span> 
              <span className='text-yellow-400 text-xs sm:text-sm'>YOUR WALLET | ANY TOKEN | ANY CHAIN</span>
            </div>
          </div>

          {/* Terminal Description */}
          <div className='mb-6 sm:mb-8 text-green-400 w-full'>
            <div className='text-green-300 mb-2 text-xs sm:text-sm'>$ cat README.txt</div>
            <div className='pl-2 border-l-2 border-green-700 text-xs sm:text-sm leading-relaxed'>
              Revolutionary self-service beer dispensing system.<br/>
                              Select beer. Connect wallet. Pay. Pour beer.<br/>
                              Onchain payments only. No credit cards.
            </div>
          </div>

          {/* Commands Menu */}
          <div className='mb-6 sm:mb-8 w-full'>
            <div className='text-green-300 mb-2 sm:mb-4 text-xs sm:text-sm'>Available commands:</div>
            <div className='space-y-4 sm:space-y-4 max-w-full sm:max-w-md'>
            
            <Link to='/location/$location' params={{ location: 'demo' }}>
              <div className='mb-4 hover:bg-green-900/20 p-2 sm:p-3 rounded border border-green-700 hover:border-green-500 transition-colors cursor-pointer'>
                <div className='text-xs sm:text-sm'>
                  <span className='text-green-400'>$</span> <span className='text-white'>view_locations</span>
                </div>
                <div className='text-xs text-green-600 ml-2 sm:ml-4 mt-1'>Access available tap locations</div>
              </div>
            </Link>
            
            <div className='hover:bg-green-900/20 p-2 sm:p-3 rounded border border-green-700 hover:border-green-500 transition-colors cursor-pointer'>
              <div className='text-xs sm:text-sm'>
                <span className='text-green-400'>$</span> <span className='text-white'>system_info</span>
              </div>
              <div className='text-xs text-green-600 ml-2 sm:ml-4 mt-1'>Hackable self-service tap protocol</div>
            </div>
            
            </div>
          </div>

          {/* Terminal Footer */}
          <div className='mt-auto pb-4 sm:pb-8 text-xs text-green-600'>
            <div>TAPTHAT v2.0.24 | Build 0x42069</div>
            <div className='hidden sm:block'>Running on blockchain infrastructure</div>
          </div>

        </div>
      </Container>
    </div>
  );
}
