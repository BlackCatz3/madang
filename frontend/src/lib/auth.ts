import supabase from './supabaseClient';

export async function signUp(email: string, role: 'customer' | 'partner') {
  const { data, error } = await supabase.auth.signUp({ email });
  if (error) throw error;
  if (data.user) {
    await supabase.from('profile').insert({ id: data.user.id, role });
  }
  return data;
}

export async function signIn(email: string) {
  const { data, error } = await supabase.auth.signInWithOtp({ email });
  if (error) throw error;
  return data;
}

export async function getRole() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;
  const { data } = await supabase
    .from('profile')
    .select('role')
    .eq('id', session.user.id)
    .single();
  return data?.role as string | null;
}
