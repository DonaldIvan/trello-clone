import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  organization: process.env.NEXT_PUBLIC_OPEN_AI_ORG,
});

const openai = new OpenAIApi(configuration);

export default openai;
