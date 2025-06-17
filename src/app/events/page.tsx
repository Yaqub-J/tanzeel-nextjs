import EventsContent from '@/components/events/EventsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Tanzeel Academy',
  description: 'Stay updated with our upcoming events, workshops, and special programs at Tanzeel Academy.',
};

export default function EventsPage() {
  return <EventsContent />;
} 