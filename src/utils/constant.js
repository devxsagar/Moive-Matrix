export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_AUTHORIZATION,
  },
};


export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "TV Shows", href: "/tv-shows" },
  { name: "Movies", href: "/movies" },
  { name: "My List", href: "/my-list" },
];

export const PROFILE_PIC_URL = "https://i.pinimg.com/736x/9a/5f/f0/9a5ff060152ceb9b8c4b5596cf81878c.jpg"

export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
export const POSTER_URL = "https://image.tmdb.org/t/p/w342/";
export const BACKDROP_URL = "https://image.tmdb.org/t/p/w1280/";
export const LARGE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";
export const SMALL_IMAGE_URL = "https://image.tmdb.org/t/p/w185/";

export const GITHUB_URL = "https://github.com/devxsagar/Moive-Matrix";

export const LINKEDIN_URL = "https://www.linkedin.com/in/sagar-mitra19/";

export const TWITTER_URL = "https://x.com/devxsagar";

export const FALLBACK_PROFILE_PIC = "https://i.pinimg.com/736x/16/18/20/1618201e616f4a40928c403f222d7562.jpg";

export const MICROSOFT_CLARITY_ID = "u3ygi3sge1"