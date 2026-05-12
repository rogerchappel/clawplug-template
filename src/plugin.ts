import { Type } from '@sinclair/typebox';
import { definePlugin } from 'clawplug';

export const createEntry = definePlugin({
  id: 'example-plugin',
  name: 'Example Plugin',
  description: 'A minimal OpenClaw plugin built with clawplug.',
  configSchema: {
    auth: Type.Object({
      apiKey: Type.String({ description: 'Example API key.' }),
    }),
  },
  hooks: {
    onLoad: async () => undefined,
  },
  tools: (tool) => [
    tool({
      name: 'greet',
      description: 'Greet someone by name.',
      parameters: Type.Object({
        name: Type.String({ description: 'Name to greet.' }),
      }),
      execute: async ({ name }: { name: string }, config) => ({
        greeting: `Hello, ${name}!`,
        configured: Boolean(config.auth.apiKey),
      }),
    }),
  ],
});
