import { client } from './client';

export function getUser() {
  return client.auth.user();
}

export function getSession() {
  return client.auth.session();
}


export async function signUpUser(username, password) {
  const { user, error } = await client.auth.signUp({ username, password });

  if (error) throw error;
  return user;
}


export async function signInUser(username, password) {
  const { user, error } = await client.auth.signIn({ username, password });

  if (error) throw error;
  return user;
}

export async function signOutUser() {
  return client.auth.signOut();
}
