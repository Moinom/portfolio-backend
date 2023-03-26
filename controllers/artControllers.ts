import { Request, Response } from 'express';
import {
  ImagekitResponse,
  imagekitArt,
  imagekitCategories,
} from '../services/imagekitService';

const getArt = (request: Request, response: Response) => {
  imagekitArt.listFiles(
    {
      skip: 0,
      limit: 100,
      tags: [imagekitCategories.art],
    },
    function (error, result: ImagekitResponse[] | null) {
      if (error) {
        return response.status(500).json({ error: error });
      }
      const data = result?.map((data) => ({
        title: data.customMetadata!.title,
        height: data.height,
        width: data.width,
        url: data.url,
        tags: data.tags,
      }));
      return response.json(data);
    }
  );
};

export { getArt };
