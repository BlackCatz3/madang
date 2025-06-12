'use client';
import { useEffect, useState } from 'react';
import OrderStatusTimeline from '../components/OrderStatusTimeline';
import supabase from '../lib/supabaseClient';

interface OrderStatus {
  id: number;
  status: string;
}

export default function OrderStatusPage() {
  const [status, setStatus] = useState<OrderStatus>({ id: 1, status: 'pending' });

  useEffect(() => {
    const channel = supabase
      .channel('public:order')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'order', filter: `id=eq.${status.id}` },
        (payload) => {
          const newStatus = (payload.new as any).status as string;
          setStatus({ id: status.id, status: newStatus });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [status.id]);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Status Pesanan</h1>
      <OrderStatusTimeline status={status.status} />
    </div>
  );
}
