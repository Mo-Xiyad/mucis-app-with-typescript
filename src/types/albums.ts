export interface IAlbumData {
  album: {
    cover: string;
    id: number;
    title: string;
  };
  title_short: string;
  artist: {
    name: string;
    id: number;
    picture_small: string;
  };
}

export type IAlbums = IAlbumData[];
