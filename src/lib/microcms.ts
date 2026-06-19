import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// microCMSのデータの形を定義（TypeScriptの練習！）
export type News = {
  id: string;
  title: string;
  slug: string;
  tag: string;
  body: string;
  image?: { url: string };
  createdAt: string;
  updatedAt: string;
  publishdate: string;
  revisedAt: string
};