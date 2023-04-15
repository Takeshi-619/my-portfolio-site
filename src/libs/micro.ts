import { MicroCMSQueries, createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

export const getData = async (queries: MicroCMSQueries) => {
  return await client.get({ endpoint: "my-portfolio", queries });
};
