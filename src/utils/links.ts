export function withBase(path: string) {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (cleanPath === '/') {
    return cleanBase || '/';
  }

  return `${cleanBase}${cleanPath}`;
}

export function withoutBase(pathname: string) {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;

  if (cleanBase && pathname.startsWith(cleanBase)) {
    return pathname.slice(cleanBase.length) || '/';
  }

  return pathname || '/';
}
