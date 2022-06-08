export const initialPokemon = {
  name: "React",
  order: 101,
  types: [
    { slot: 1, type: { name: "Framework" } },
    { slot: 2, type: { name: "Power" } },
  ],
  sprites: {
    other: {
      home: {
        front_default:
          "https://4.bp.blogspot.com/-_YSVTe2ekBU/XKMntJDH0ZI/AAAAAAAAXNk/3d48i_XShWwvoMNj0YJWp2J4_Woh9dzGgCLcBGAs/s1600/reactjs%2Btutorial.png",
      },
    },
  },
  weight: 20,
  stats: [
    {
      base_stat: 90,
      effort: 0,
      stat: {
        name: "Rendimiento",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 95,
      effort: 0,
      stat: {
        name: "Comunidad",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: {
        name: "Diseño",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 75,
      effort: 1,
      stat: {
        name: "SEO",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
};
