import getUserProfile from "../auth/profile.auth";
import getOwnLinks from "../post/get.post";

export default async function fetchProfileAndLinks(
  setProfile,
  setPrefixn,
  setLinks,
  setError
) {
  try {
    const profileData = await getUserProfile();
    setProfile(profileData.user);
    setPrefixn(profileData.user.name[0].toUpperCase());

    const linksData = await getOwnLinks(profileData.user.id);
    const filteredLinks = linksData.data.filter(
      (link) => link.title && link.url
    );
    setLinks(filteredLinks);
  } catch (err) {
    setError(err.message);
  }
}
