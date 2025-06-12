'use client';
import { useState } from 'react';
import { signUp } from '../../lib/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'customer' | 'partner'>('customer');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, role);
      setMessage('Check your email for the login link');
    } catch (err) {
      console.error(err);
      setMessage('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded border p-2"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as 'customer' | 'partner')}
        className="w-full rounded border p-2"
      >
        <option value="customer">Customer</option>
        <option value="partner">Partner</option>
      </select>
      <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
        Sign Up
      </button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
