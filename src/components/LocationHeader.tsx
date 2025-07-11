interface LocationHeaderProps {
  location: string;
  count: number;
}

export default function LocationHeader({ location, count }: LocationHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {location.toUpperCase()} Beer Taps
      </h1>
      <p className="text-gray-600">
        {count === 0 
          ? 'No beers currently available on tap' 
          : `${count} beer${count === 1 ? '' : 's'} available on tap`
        }
      </p>
    </div>
  );
}