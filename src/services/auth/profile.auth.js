async function getUserProfile() {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${import.meta.env.VITE_API}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error('Unauthorized: Please log in again.');
      }
      throw new Error('Failed to fetch profile');
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching profile:', err);
    throw err;
  }
}

export default getUserProfile