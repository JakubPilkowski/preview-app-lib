export interface IPreview {
  isUpdated: boolean;
}

export interface ISection2Child extends IPreview {
  id: string;
  name: string;
  order: number;
  key: 'section2Child';
}

export interface Section1 extends IPreview {
  id: string;
  title: string;
  order: number;
  image: string | null;
  key: 'section1';
}

export interface Section2 extends IPreview {
  id: string;
  title: string;
  order: number;
  children: ISection2Child[];
  key: 'section2';
}

export interface CTA extends IPreview {
  title: string;
  link: string;
}

export interface Section3 extends IPreview {
  id: string;
  title: string;
  subtitle: string;
  order: number;
  cta: CTA;
  key: 'section3';
}

export interface ISection4Child extends IPreview {
  id: string;
  title: string;
  order: number;
  key: 'section4Child';
}

export interface Section4 extends IPreview {
  id: string;
  title: string;
  order: number;
  children: ISection4Child[];
  key: 'section4';
}

export interface IHome {
  section1: Section1;
  section2: Section2;
  section3: Section3;
  section4: Section4;
}

// New unified state type
export type IState = (Section1 | Section2 | Section3 | Section4)[];
