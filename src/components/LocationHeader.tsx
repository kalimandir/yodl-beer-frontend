interface LocationHeaderProps {
  location: string;
  count: number;
}

export default function LocationHeader({ location, count }: LocationHeaderProps) {
  return (
    <div className='mb-12 text-center'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4'>
        {location.toUpperCase()} BEER TAPS
      </h1>
      <p className='text-xl sm:text-2xl text-gray-700 font-bold'>
        {count === 0
          ? 'No beers currently available on tap'
          : `${count} beer${count === 1 ? '' : 's'} available on tap`}
      </p>
    </div>
  );
}
