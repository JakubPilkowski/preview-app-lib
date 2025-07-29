export interface ISection2Child {
  name: string;
  order: number;
}

export interface Section1 {
  title: string;
  order: number;
  image: string | null;
}

export interface Section2 {
  title: string;
  order: number;
  children: ISection2Child[];
}

export interface IHome {
  section1: Section1;
  section2: Section2;
}
