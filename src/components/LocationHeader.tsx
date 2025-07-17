interface LocationHeaderProps {
  location: string;
  count: number;
}

export default function LocationHeader({ location, count }: LocationHeaderProps) {
  return (
    <div className='mb-16 text-center'>
      <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6'>
        {location.toUpperCase()} BEER TAPS
      </h1>
      <p className='text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold'>
        {count === 0
          ? 'No beers currently available on tap'
          : `${count} beer${count === 1 ? '' : 's'} available on tap`}
      </p>
    </div>
  );
}
