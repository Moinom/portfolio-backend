import ImageKit from 'imagekit';
import * as dotenv from 'dotenv';
dotenv.config();

export enum imagekitCategories {
  art = 'art',
  code = 'coding',
  favourites = 'fav',
}

export interface ImagekitResponse {
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fileId: string;
  tags?: string[] | null | undefined;
  AITags?: object[] | undefined;
  versionInfo?: object | undefined;
  embeddedMetadata?: object | null | undefined;
  customCoordinates: string | null;
  customMetadata?: {
    title?: string;
    description?: string;
    language?: string;
    prod?: string;
    github?: string;
  };
  isPrivateFile: boolean;
  url: string;
  thumbnail: string;
  fileType: string;
  filePath: string;
  height: number;
  width: number;
  size: number;
  hasAlpha: boolean;
  mime?: string | undefined;
}

export const imagekitArt = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: `${process.env.IMAGEKIT_URL}/${imagekitCategories.art}` || '',
});

export const imagekitCode = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: `${process.env.IMAGEKIT_URL}/${imagekitCategories.code}` || '',
});
