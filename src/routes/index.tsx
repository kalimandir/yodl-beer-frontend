import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createFileRoute } from '@tanstack/react-router';
import Container from '@/components/Container';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center min-h-[80vh] gap-8'>
        <Card className='max-w-md'>
          <CardHeader>
            <CardTitle>Glassmorphism Card</CardTitle>
            <CardDescription>A beautiful glass effect card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-sm'>
              This card demonstrates the glassmorphism effect with backdrop blur, transparency, and subtle borders for a
              modern UI feel.
            </p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
