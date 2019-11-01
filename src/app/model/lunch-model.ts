export interface ILunch {
  name: string;
  upvotes: number;
}

export const defaultLunches = {
  lunches:
    [
      {
        name: 'Kebab2Go',
        upvotes: 1
      },
      {
        name: 'Sushi place',
        upvotes: 3
      },
      {
        name: 'Melisek Restaurant',
        upvotes: 0
      }
    ],
};
