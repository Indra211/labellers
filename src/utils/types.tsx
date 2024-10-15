type src = {
  org: string;
  thumb: string;
};

export type Data = {
  id: number;
  alt: string;
  category: string;
  src: src;
};

export interface visibleDataType {
  visibleData: Data[];
}
