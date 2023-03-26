import { Request, Response } from 'express';
import {
  ImagekitResponse,
  imagekitCode,
  imagekitCategories,
} from '../services/imagekitService';

const getCode = (request: Request, response: Response) => {
  imagekitCode.listFiles(
    {
      skip: 0,
      limit: 100,
      tags: [imagekitCategories.code],
    },
    function (error, result: ImagekitResponse[] | null) {
      if (error) {
        return response.status(500).json({ error: error });
      }
      const data = result?.map((data) => ({
        title: data.customMetadata!.title,
        description: data.customMetadata!.description,
        language: data.customMetadata!.language,
        prod: data.customMetadata!.prod,
        github: data.customMetadata!.github,
        height: data.height,
        width: data.width,
        url: data.url,
        tags: data.tags,
      }));
      return response.json(data);
    }
  );
};

export { getCode };
