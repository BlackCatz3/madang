'use client';
import { useState } from 'react';
import { signIn } from '../../lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email);
      setMessage('Check your email for the login code');
    } catch (err) {
      console.error(err);
      setMessage('Login failed');
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
      <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
        Login
      </button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
