import { defineCollection } from 'astro:content';

import { glob, file } from 'astro/loaders';

import { z } from 'astro/zod';

const folderContent = defineCollection({
    loader: glob({pattern: '**/*.{json,md}', base: './src/content/folderContent'}),
});


const heroContent = defineCollection({
    loader: glob({pattern: '**/*.json', base: './src/content/heroContent'}),
});

export const collections = { folderContent, heroContent };