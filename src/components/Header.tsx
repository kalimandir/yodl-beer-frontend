import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className='fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl'>
      <div className='backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl px-6 py-3 shadow-xl'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Link
              to='/'
              className='flex items-center gap-3 text-lg font-semibold text-white/90 hover:text-white transition-colors'
            >
              <img src='/logo.png' alt='Yodl Beer Logo' className='w-10 h-10 object-contain' />
              Yodl
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
