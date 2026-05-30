import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const isDefault = l === defaultLang && !showDefaultLang;
    const prefix = isDefault ? '' : `/${l}`;

    // Extract search and hash
    let pathName = path;
    let hash = '';
    let search = '';

    const searchIndex = path.indexOf('?');
    const hashIndex = path.indexOf('#');

    if (searchIndex !== -1 && (hashIndex === -1 || searchIndex < hashIndex)) {
      if (hashIndex !== -1) {
        search = path.substring(searchIndex, hashIndex);
        hash = path.substring(hashIndex);
      } else {
        search = path.substring(searchIndex);
      }
      pathName = path.substring(0, searchIndex);
    } else if (hashIndex !== -1) {
      hash = path.substring(hashIndex);
      pathName = path.substring(0, hashIndex);
    }

    // Translate hash anchor if it exists in routes
    if (hash.startsWith('#')) {
      const anchorKey = hash.substring(1);
      const translatedAnchor = (routes[l as keyof typeof routes] as any)[anchorKey];
      if (translatedAnchor) {
        hash = `#${translatedAnchor}`;
      }
    }

    // If pathName is empty (e.g. only a hash was passed), return prefix + hash
    if (pathName === '' || pathName === '/') {
      const base = prefix || '/';
      return `${base}${search}${hash}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
    }

    // Translate pathName
    const cleanPathName = pathName.replace(/^\/|\/$/g, '');
    const translatedPath = (routes[l as keyof typeof routes] as any)[cleanPathName] || cleanPathName;

    const cleanPath = translatedPath.startsWith('/') ? translatedPath : `/${translatedPath}`;
    let result = `${prefix}${cleanPath}`;
    
    // Normalize slashes
    result = result.replace(/\/+/g, '/');
    
    // Remove trailing slash strictly (trailingSlash: 'never')
    if (result.length > 1 && result.endsWith('/')) {
      result = result.replace(/\/$/, '');
    }

    return result + search + hash;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  
  // If the first part is a language, skip it
  const path = parts[0] !== undefined && parts[0] in ui ? parts[1] : parts[0];

  if (!path) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (currentLang in routes) {
    const entries = Object.entries(routes[currentLang]);
    for (const [key, value] of entries) {
      if (value === path) {
        return key;
      }
    }
  }

  return path;
}

