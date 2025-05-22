function truncateUrl(url, maxLength = 50) {
  try {
    const { origin, pathname } = new URL(url);
    const full = origin + pathname;
    return full.length > maxLength ? full.slice(0, maxLength) + '...' : full;
  } catch {
    return url.length > maxLength ? url.slice(0, maxLength) + '...' : url;
  }
}

export default truncateUrl;