import type { BeerTapsResponse } from '@/types/beer';

const API_BASE_URL = 'https://yodl-store-webhook.fly.dev/v1';

export async function fetchBeerTaps(location: string): Promise<BeerTapsResponse> {
  const response = await fetch(`${API_BASE_URL}/beer-taps?location=${encodeURIComponent(location)}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch beer taps: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
