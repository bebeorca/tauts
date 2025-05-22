export default async function getUserByName(name) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API}/link/by/${name}`);
    if (!res.ok) throw new Error('Failed to fetch user');

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching user by name:', err);
    throw err;
  }
}
