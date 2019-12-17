export type TicTac = 3 | 5;

export interface SquareBlockProps {
  number: number;
  last: TicTac;
  table: number[];
  winner: [];
  setTable: (value: number[]) => number;
  setLast: (value: number) => number;
  calculateWinner: () => void;
}

export interface BlockType {
  winner: number[];
  tableNum: number;
  number: number;
}

export interface GiphyImage {
  url: string;
  downsized: {
    url: string;
  };
}

export interface GiphyType {
  id: string;
  slug: string;
  url: string;
  images: GiphyImage;
}

export interface CardProps {
  gif: GiphyType;
  offset: number;
  index: number;
  chance: number;
  disable: boolean;
  setOffset: (value: number) => number;
  setDisable: (value: boolean) => boolean;
}

export interface NotifyProps {
  show: boolean;
  message: {
    text: string;
    color: string;
  };
}

export interface ProgressProps {
  itemsLength: number;
}
