import type {
  IHome,
  IState,
  Section1,
  Section2,
  Section3,
  Section4,
  ISection2Child,
  ISection4Child,
} from '../types/home.types';

/**
 * Converts IHome object to IState array with proper key assignments
 */
export function convertHomeToState(home: IHome): IState {
  const section1: Section1 = {
    ...home.section1,
    key: 'section1',
  };

  const section2: Section2 = {
    ...home.section2,
    key: 'section2',
    children: home.section2.children.map((child: ISection2Child) => ({
      ...child,
      key: 'section2Child',
    })),
  };

  const section3: Section3 = {
    ...home.section3,
    key: 'section3',
  };

  const section4: Section4 = {
    ...home.section4,
    key: 'section4',
    children: home.section4.children.map((child: ISection4Child) => ({
      ...child,
      key: 'section4Child',
    })),
  };

  // Return sections sorted by order
  return [section1, section2, section3, section4].sort(
    (a, b) => a.order - b.order
  );
}
