export const fetchPlayers = async () => {
  try {
    const res = await fetch("/player.json");
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetching plyer data", err?.message);
  }
};
