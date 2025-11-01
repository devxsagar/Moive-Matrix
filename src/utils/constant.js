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
  { name: "Movie", href: "/movie" },
  { name: "Upcoming", href: "/upcoming" },
];

export const PROFILE_PIC_URL = "https://i.pinimg.com/736x/9a/5f/f0/9a5ff060152ceb9b8c4b5596cf81878c.jpg"

export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

export const GITHUB_URL = "https://github.com/devxsagar/Moive-Matrix";

export const LINKEDIN_URL = "https://www.linkedin.com/in/sagar-mitra19/";

export const TWITTER_URL = "https://x.com/devxsagar";