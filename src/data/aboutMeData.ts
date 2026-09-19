export type FavoriteCategory = {
  id: string;
  title: string;
  command: string;
  items: FavoriteItem[];
};

export type FavoriteItem = {
  title: string;
  year: string;
  posterUrl: string;
};

export const favoriteCategories = [
  {
    id: "games",
    title: "favorite games",
    command: "cat games.txt",
    items: [
      {
        title: "The Witcher 3: Wild Hunt",
        year: "2015",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
      },
      {
        title: "Life Is Strange Remastered",
        year: "2022",
        posterUrl: "/posters/life-is-strange-remastered.jfif",
      },
      {
        title: "Persona 5 Royal",
        year: "2019",
        posterUrl: "/posters/persona-5.jpg",
      },
      {
        title: "Resident Evil Village",
        year: "2021",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png",
      },
    ],
  },
  {
    id: "shows",
    title: "favorite shows",
    command: "cat shows.txt",
    items: [
      {
        title: "True Detective",
        year: "2014",
        posterUrl: "/posters/true-detective.avif",
      },
      {
        title: "Twin Peaks",
        year: "1990",
        posterUrl: "/posters/twin-peaks.jpg",
      },
      {
        title: "Chernobyl",
        year: "2019",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg",
      },
      {
        title: "Vikings",
        year: "2013",
        posterUrl: "/posters/vikings.jpg",
      },
    ],
  },
  {
    id: "movies",
    title: "favorite movies",
    command: "cat movies.txt",
    items: [
      {
        title: "Spider-Man 2",
        year: "2004",
        posterUrl: "/posters/spider-man-2.jpg",
      },
      {
        title: "La La Land",
        year: "2016",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
      },
      {
        title: "The Shining",
        year: "1980",
        posterUrl: "/posters/the-shining.jpg",
      },
      {
        title: "Scott Pilgrim vs. the World",
        year: "2010",
        posterUrl: "/posters/scott-pilgrim.jpg",
      },
    ],
  },
] satisfies FavoriteCategory[];
