import supabase from './supabaseClient';

export async function getUserRole(token: string) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(token);
  if (userError || !user) {
    return null;
  }
  const { data, error } = await supabase
    .from('profile')
    .select('role')
    .eq('id', user.id)
    .single();
  if (error) {
    return null;
  }
  return data?.role as string | null;
}
