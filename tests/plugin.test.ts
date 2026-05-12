import { describe, expect, it } from 'vitest';
import { testPlugin } from 'clawplug/test';
import { createEntry } from '../src/plugin.js';

describe('example plugin', () => {
  it('greets a named user', async () => {
    const { tools } = testPlugin(createEntry, { auth: { apiKey: 'test-key' } });
    const result = await tools.greet({ name: 'OpenClaw' });
    expect(result.content[0]?.text).toContain('Hello, OpenClaw!');
  });
});
