type Show = {
  date: string;
  year?: number;
  city: string;
  place: string;
  venueDetail?: string;
  status: string;
  isUpcoming?: boolean;
  invitedAct?: string;
  invitedActDescription?: string;
};

export const shows: Show[] = [
  {
    date: "12 DIC",
    year: 2026,
    city: "VILLA MERCEDES · SAN LUIS",
    place: "BOLICHE DON MIRANDA",
    venueDetail: "PREDIO CALLE ANGOSTA",
    status: "Próximo show",
    isUpcoming: true,
    invitedAct: "NO TAN VERDES",
    invitedActDescription: "Tributo a Los Enanitos Verdes",
  },
  {
    date: "31 OCT",
    city: "SAN MARTÍN Y SARMIENTO · VILLA MERCEDES",
    place: "MODESTO BAR",
    status: "Último show",
  },
  {
    date: "12 JUL",
    city: "VILLA MERCEDES",
    place: "EVENTO PRIVADO",
    status: "Show anterior"
  },
  {
    date: "12 DIC",
    city: "VILLA MERCEDES",
    place: "STONE BAR",
    status: "Show anterior"
  }
];