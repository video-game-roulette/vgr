import { checkError, client } from './client';

export async function fetchGames() {
  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/games?`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    }
  );
  const data = await resp.json();
  return data;
}

export async function getGamesById(id) {
  let response = await client.from('games').select().match({ id }).single();
  return checkError(response);
}

export async function updateGame(id, title, description, image) {
  const response = await client
    .from('games')
    .update({ title, description, image })
    .eq('id', id);
  return checkError(response);
}

export async function addGame(title, description, image) {
  const response = await client
    .from('games')
    .insert({ title, description, image });
  return checkError(response);
}

export async function deleteGame(id) {
  const response = await client.from('games').delete().match({ id: id });
  return checkError(response);
}
