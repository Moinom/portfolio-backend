import { Request, Response } from "express";
import { cache } from "../index";
import {
  ImagekitResponse,
  imagekitCode,
  imagekitCategories,
} from "../services/imagekitService";

const Code_CACHE_ID = "codeCache";

const getCode = (request: Request, response: Response) => {
  if (cache.has(Code_CACHE_ID)) {
    return response.json(cache.get(Code_CACHE_ID));
  }
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
      cache.set(Code_CACHE_ID, data);
      return response.json(data);
    }
  );
};

export { getCode };
