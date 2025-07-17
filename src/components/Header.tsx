import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200'>
      <div className='container mx-auto px-4 py-4'>
        <nav className='flex items-center justify-between'>
          <Link
            to='/'
            className='text-xl font-black text-black hover:text-gray-700 transition-colors tracking-tight'
          >
            TAPTHAT
          </Link>
        </nav>
      </div>
    </header>
  );
}
