import fs from 'fs';

import { OctoAIClient } from '@octoai/sdk';

// import * as data from './pastBg.json';
import * as data from './futureBg.json';

const octoAi = new OctoAIClient({
  apiKey: process.env.OCTOAI_API_TOKEN,
});

const negativePrompt =
  'blurred, low resolution, low quality, cartoon, person, people, human';

// const pastPrompt =
//   ', wide shot, old time, vintage, european, hyperrealistic, high resolution, high quality, realistic, highly detailed.';

const futurePrompt =
  ', wide shot, futuristic, sci-fi, high tech, high resolution, high quality, realistic, highly detailed. The image is hyper-realistic, photographic, high-resolution. AVOID: cartoon, low resolution, low quality, blurred, person, people, human.';

export async function POST() {
  try {
    for (let index = 0; index < data.length; index++) {
      const { images } = await octoAi.imageGen.generateSdxl({
        prompt: data[index].bgDesc + futurePrompt,
        negativePrompt,
        sampler: 'LCM',
        checkpoint: 'octoai:lcm_sdxl',
        steps: 6,
        numImages: 4,
        cfgScale: 3,
        width: 896,
        height: 1152,
        stylePreset: 'base',
      });

      images.forEach((output, i) => {
        const title = data[index].jobTitle.replace(/\s/g, '-').toLowerCase();
        // const pastFilename = `past-${index}-${title}-result-${i}.jpg`;
        const futureFilename = `future-${index}-${title}-result-${i}.jpg`;

        if (output.imageB64) {
          const buffer = Buffer.from(output.imageB64, 'base64');
          fs.writeFileSync(futureFilename, buffer);
        }
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(`Error generating image: ${error}`);

    return Response.error();
  }
}
