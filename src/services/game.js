import { client } from './client';

export async function fetchGames() {
  const resp = await client.from('games').select('*');
  return resp;
}

export async function getGamesById(id) {
  let response = await client.from('games').select().match({ id }).single();
  return response;
}

export async function updateGame(id, title, description, image) {
  const response = await client
    .from('games')
    .update({ title, description, image })
    .eq('id', id);
  return response;
}

export async function addGame(title, description, image) {
  const response = await client
    .from('games')
    .insert({ title, description, image, user_id: client.auth.user().id });
  return response;
}

export async function deleteGame(id) {
  const response = await client.from('games').delete().match({ id: id });
  return response;
}

export async function getUserGame() {
  // you shouldn't need the .match if you have
  //  RLS properly setup on your games table

  const response = await client
    .from('games')
    .select('*')
    .match({ user_id: client.auth.user().id });
  return response;
}
