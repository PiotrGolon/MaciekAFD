import mma from './assets/sessions/mma.png';
import bjj from './assets/sessions/bjj.png';
import boks from './assets/sessions/boks.png';
import judo from './assets/sessions/judo.png';
import taekwondo from './assets/sessions/taekwondo.png';
import zapasy from './assets/sessions/zapasy.png';

export const SESSIONS = [
  {
    id: 'sess01',
    title: 'Plan treningowy: MMA',
    summary: 'Zacznij trenować na siłowni pod kątem mma.',
    description:
      "Efektywność w Walce: Ulepsza techniki specyficzne dla MMA.\n\nSiła i Wytrzymałość: Buduje kluczowe atrybuty dla MMA.\n\nKoordynacja i Elastyczność: Poprawia uniki i techniki chwytów.\n\nBezpieczeństwo: Zmniejsza ryzyko kontuzji.\n\nPersonalizacja: Maksymalizuje mocne strony zawodnika.",
    duration: 1,
    date: '2023-11-01',
    image: mma,
  },
  {
    id: 'sess02',
    title: 'Plan treningowy: BJJ',
    summary: "Zacznij trenować na siłowni pod kątem bjj.",
    description:
      "Technika i Kontrola: Rozwój chwytów, dźwigni i pozycjonowania.\n\nElastyczność: Zwiększa zakres ruchu i zdolność do uników.\n\nSiła Core: Wzmacnia mięśnie tułowia dla lepszej kontroli.\n\nWytrzymałość Aerobowa: Poprawia kondycję do długotrwałych pojedynków.",
    duration: 1.5,
    date: '2023-11-03',
    image: bjj,
  },
  {
    id: 'sess03',
    title: 'Plan treningowy: Boks',
    summary: 'Zacznij trenować na siłowni pod kątem boksu.',
    description:
      "Siła Uderzeń: Zwiększa moc i szybkość ciosów.\n\nUniki i Obrona: Poprawia zwinność i reakcję obronną.\n\nWytrzymałość: Buduje kondycję do wielorundowych walk.\n\nKoordynacja Ręka-Oko: Ulepsza celność i szybkość kombinacji.\n\nZarządzanie Oddechem: Poprawia kontrolę oddechu podczas intensywnych starć.",
    duration: 1.5,
    date: '2023-11-07',
    image: boks,
  },
  {
    id: 'sess04',
    title: 'Plan treningowy: Judo',
    summary: 'Zacznij trenować na siłowni pod kątem judo.',
    description:
      "Równowaga i Siła: Ulepsza rzuty i chwyty.\n\nWytrzymałość: Buduje kondycję do dynamicznych walk.\n\nRefleks i Reakcja: Rozwija szybkie reakcje obronne.\n\nTechnika Chwytów: Poprawia skuteczność chwytów i dźwigni.\n\nMobilność Stawów: Zwiększa zakres ruchu dla efektywnych rzutów.",
    duration: 2,
    date: '2023-11-09',
    image: judo,
  },
  {
    id: 'sess05',
    title: 'Plan treningowy: Taekwondo',
    summary: 'Zacznij trenować na siłowni pod kątem taekwondo.',
    description:
      "Szybkość i Zwinność: Rozwija szybkie kopnięcia i uniki.\n\nKoordynacja: Ulepsza kombinacje i precyzję ruchów.\n\nSiła Nóg: Buduje moc do silnych kopnięć.\n\nZręczność: Poprawia zdolność do szybkich zmian pozycji.\n\nWytrzymałość Mięśniowa: Zwiększa siłę mięśniową do długich walk.",
    duration: 1.5,
    date: '2023-11-12',
    image: taekwondo,
  },
  {
    id: 'sess06',
    title: 'Plan treningowy: Zapasy',
    summary: 'Zacznij trenować na siłowni pod kątem treningu zapaśniczego.',
    description:
      'Siła i Wytrzymałość: Kluczowe dla walki w parterze.\n\nTechnika Chwytów: Poprawia kontrolę nad przeciwnikiem.\n\nMobilność: Rozwija zdolność do szybkich zmian pozycji.\n\nKoordynacja i Równowaga: Ulepsza stabilność i kontrolę ciała.',
    duration: 2,
    date: '2023-11-15',
    image: zapasy,
  },
];
