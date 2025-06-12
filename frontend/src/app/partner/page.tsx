'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getRole } from '../../lib/auth';

export default function PartnerDashboard() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function check() {
      const r = await getRole();
      setRole(r);
      if (r !== 'partner') {
        router.replace('/login');
      }
    }
    check();
  }, [router]);

  if (role !== 'partner') {
    return <div>Checking permissions...</div>;
  }

  return <div className="text-xl">Partner Dashboard</div>;
}
