import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className='min-h-screen bg-white text-black font-sans'>
      <Container className='px-2 sm:px-4'>
        <div className='flex flex-col items-center justify-start min-h-[40vh] text-center pt-1'>
          
          {/* Header Image */}
          <div className='w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] mb-8 sm:mb-12 md:mb-16 shimmer-effect'>
            <img 
              src='/tap-that-header.png' 
              alt='TapThat Header'
              className='w-full h-auto object-contain'
            />
          </div>
          
          {/* Logo/Title */}
          <div className='relative mb-4 sm:mb-6 w-full overflow-visible'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none'>
              TAPTHAT
            </h1>
            <img 
              src='/crypto+beer.png' 
              alt='Crypto + Beer'
              className='absolute -top-6 left-1/2 -ml-20 w-16 h-12 drop-shadow-lg'
            />
          </div>
          
          {/* Tagline */}
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 leading-tight mb-4 sm:mb-6'>
            CRYPTO POWERED. SELF-SERVICE BEER.
          </p>
          
          {/* Description */}
          <p className='text-lg sm:text-xl md:text-2xl text-gray-600 max-w-sm sm:max-w-lg md:max-w-2xl leading-relaxed px-4 mb-6 sm:mb-8'>
            Pay with MetaMask, any token, any chain. Pour your beer.
          </p>

          {/* CTA */}
          <div className='flex flex-col items-center gap-4'>
            <Link to='/location/$location' params={{ location: 'demo' }}>
              <Button 
                size='lg'
                className='text-sm sm:text-base md:text-lg px-12 sm:px-16 md:px-20 py-6 sm:py-8 bg-black text-white hover:bg-gray-800 font-black tracking-wide transition-colors'
              >
                VIEW LOCATIONS
              </Button>
            </Link>
            
            <div className='flex justify-center w-full'>
              <a 
                href="#" 
                className='flex items-center gap-3 text-[10px] font-bold text-green-500 hover:text-green-400 transition-all tracking-wider uppercase underline hover:no-underline hover:scale-105 cursor-pointer'
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <img 
                  src='/computer.png' 
                  alt='Computer'
                  className='w-11 h-11 computer-flicker'
                />
                tap-that, hackable self service tap
              </a>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
