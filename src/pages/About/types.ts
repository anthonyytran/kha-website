export interface AboutTextBlock {
  text: string;
}

export interface AboutStat {
  label: string;
  value: string;
}

export interface BiographyData {
  title: string;
  image: string;
  content: AboutTextBlock[];
}

export interface StatsData {
  title: string;
  image: string;
  items: AboutStat[];
}

export interface AccomplishmentsData {
  title: string;
  image: string;
  items: string[];
}

export interface AboutData {
  biography: BiographyData;
  stats: StatsData;
  accomplishments: AccomplishmentsData;
}
