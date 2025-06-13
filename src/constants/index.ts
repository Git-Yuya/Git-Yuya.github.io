export type Word = {
  text: string;
  imgPath: string;
};

export const words: Word[] = [
  'Truly',
  'Creatively',
  'Kindly',
  'Gratefully',
  'Curiously',
  'Passionately',
  'Patiently',
  'Hopefully',
].map(text => ({
  text,
  imgPath: `/images/slider-words/${text.toLowerCase()}.svg`,
}));

type NavLink = {
  name: string;
  link: string;
}

export const navLinks: NavLink[] = [
  { name: 'Home', link: 'home' },
  { name: 'About', link: 'about' },
  { name: 'Experience', link: 'experience' },
  { name: 'Skills', link: 'skills' },
  { name: 'Projects', link: 'projects' },
];
