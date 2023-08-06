import { Request, Response } from 'express';
import { cache, cacheId } from '../services/cacheService';
import {
  ImagekitResponse,
  imagekitArt,
  imagekitCategories,
} from '../services/imagekitService';

const ART_CACHE_ID = cacheId.art;

const getArt = (request: Request, response: Response) => {
  if (cache.has(ART_CACHE_ID)) {
    return response.json(cache.get(ART_CACHE_ID));
  }
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
      cache.set(ART_CACHE_ID, data);
      return response.json(data);
    }
  );
};

export { getArt };
