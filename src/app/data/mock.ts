export interface Tour {
  id: string;
  title: string;
  image: string;
  objektId: string;
  ansprechpartner: string;
  teamMitglied: string;
  erstelltAm: string;
  public: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
}

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Villa am Starnberger See',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=70',
    objektId: 'OBJ-2041',
    ansprechpartner: 'Lisa Bergmann',
    teamMitglied: 'Markus Weber',
    erstelltAm: '12.03.2026',
    public: true,
  },
  {
    id: '2',
    title: 'Loft Prenzlauer Berg',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=70',
    objektId: 'OBJ-2039',
    ansprechpartner: 'Tim Hoffmann',
    teamMitglied: 'Anna Schulz',
    erstelltAm: '09.03.2026',
    public: true,
  },
  {
    id: '3',
    title: 'Altbauwohnung München',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=70',
    objektId: 'OBJ-2036',
    ansprechpartner: 'Sarah Klein',
    teamMitglied: 'Markus Weber',
    erstelltAm: '03.03.2026',
    public: false,
  },
  {
    id: '4',
    title: 'Penthouse HafenCity',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=70',
    objektId: 'OBJ-2030',
    ansprechpartner: 'Julia Meyer',
    teamMitglied: 'Anna Schulz',
    erstelltAm: '27.02.2026',
    public: true,
  },
  {
    id: '5',
    title: 'Reihenhaus Köln-Sülz',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=70',
    objektId: 'OBJ-2025',
    ansprechpartner: 'Paul Richter',
    teamMitglied: 'Tim Hoffmann',
    erstelltAm: '21.02.2026',
    public: false,
  },
  {
    id: '6',
    title: 'Bungalow im Grünen',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=70',
    objektId: 'OBJ-2019',
    ansprechpartner: 'Lisa Bergmann',
    teamMitglied: 'Markus Weber',
    erstelltAm: '14.02.2026',
    public: true,
  },
  {
    id: '7',
    title: 'Studio Frankfurt Mitte',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=70',
    objektId: 'OBJ-2014',
    ansprechpartner: 'Sarah Klein',
    teamMitglied: 'Anna Schulz',
    erstelltAm: '08.02.2026',
    public: true,
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '08.04.2026',
    title: 'Neue KI-Bildverbesserung verfügbar',
    excerpt:
      'Ab sofort können Sie Ihre 360°-Aufnahmen automatisch aufhellen und schärfen lassen — direkt im Editor.',
  },
  {
    id: 'n2',
    date: '02.04.2026',
    title: 'Release 4.2 ausgerollt',
    excerpt:
      'Schnellere Uploads, überarbeitete Freigabe-Ansicht und ein neues Design für die Tourübersicht.',
  },
  {
    id: 'n3',
    date: '25.03.2026',
    title: 'Wartungsfenster am 28.03.',
    excerpt:
      'Zwischen 22:00 und 00:00 Uhr ist das Admin-Panel kurzzeitig nicht erreichbar.',
  },
  {
    id: 'n4',
    date: '18.03.2026',
    title: 'AI Grundriss jetzt in der Beta',
    excerpt:
      'Generieren Sie automatisch Grundrisspläne aus Ihren 360°-Panoramen. Jetzt für alle Kunden freigeschaltet.',
  },
];
