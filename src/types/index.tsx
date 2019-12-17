import { Dispatch, SetStateAction } from "react";

export type TicTac = 3 | 5;

export interface SquareBlockProps {
  number: number;
  last: TicTac;
  table: number[];
  winner: number[];
  setTable: Dispatch<SetStateAction<number[]>>;
  setLast: Dispatch<SetStateAction<TicTac>>;
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
  fixed_height_small: {
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
  setOffset: Dispatch<SetStateAction<number>>;
  setDisable: Dispatch<SetStateAction<boolean>>;
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

export interface Metadata {
  key: string;
  value: any;
}

export interface MetadataObj {
  [key: string]: {};
}

export interface RouteParams {
  id: string;
  params?: string;
}
