import PurchaseButton from '@/components/PurchaseButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BeerTap } from '@/types/beer';
import ReactMarkdown from 'react-markdown';

interface BeerCardProps {
  beerTap: BeerTap['beerTaps'][number];
}

function getBeerType(title: string): string {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('ipa')) return 'IPA';
  if (lowerTitle.includes('lager')) return 'LAGER';
  if (lowerTitle.includes('stout')) return 'STOUT';
  if (lowerTitle.includes('wheat')) return 'WHEAT';
  return 'BEER';
}

function getBeerTypeColor(type: string): string {
  switch (type) {
    case 'IPA':
      return 'bg-orange-500 text-white';
    case 'LAGER':
      return 'bg-yellow-500 text-black';
    case 'STOUT':
      return 'bg-gray-800 text-white';
    case 'WHEAT':
      return 'bg-amber-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
}

function getBeerCardGradient(type: string): string {
  switch (type) {
    case 'IPA':
      return '!bg-gradient-to-br from-orange-50/35 to-white/90';
    case 'LAGER':
      return '!bg-gradient-to-br from-yellow-50/40 to-white/90';
    case 'STOUT':
      return '!bg-gradient-to-br from-gray-100/45 to-white/90';
    case 'WHEAT':
      return '!bg-gradient-to-br from-amber-50/35 to-white/90';
    default:
      return '!bg-white';
  }
}

export default function BeerCard({ beerTap }: BeerCardProps) {
  const beerType = getBeerType(beerTap.title);
  const badgeColor = getBeerTypeColor(beerType);
  const cardGradient = getBeerCardGradient(beerType);

  return (
    <Card className={`h-full flex flex-col gap-1 py-4 ${cardGradient}`}>
      <CardHeader className='pb-0'>
        <div className='flex items-start justify-between gap-3'>
          <CardTitle className='text-2xl sm:text-3xl font-black tracking-tight leading-tight flex-1'>{beerTap.title}</CardTitle>
          <span className={`px-2 py-1 rounded-md text-xs font-bold tracking-wide uppercase whitespace-nowrap ${badgeColor}`}>
            {beerType}
          </span>
        </div>
      </CardHeader>

      <CardContent className='flex-1 flex flex-col gap-4'>
        <div className='flex-1 prose prose-sm prose-zinc max-w-none prose-headings:mt-0 prose-headings:mb-0 prose-headings:font-bold prose-p:mt-0 prose-p:mb-1 prose-ul:mt-0 prose-ul:mb-1 prose-li:my-0 prose-strong:font-bold prose-strong:text-black'>
          <ReactMarkdown>{beerTap.description}</ReactMarkdown>
        </div>

        <div className='mt-auto'>
          <PurchaseButton beerTap={beerTap} />
        </div>
      </CardContent>
    </Card>
  );
}
