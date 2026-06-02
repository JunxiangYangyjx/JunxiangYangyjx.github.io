// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const [githubOwner, githubRepo] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = githubOwner && githubRepo === `${githubOwner}.github.io`;
const site = isGitHubActions && githubOwner ? `https://${githubOwner}.github.io` : undefined;
const base = isGitHubActions && githubRepo && !isUserSite ? `/${githubRepo}` : '/';

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});
