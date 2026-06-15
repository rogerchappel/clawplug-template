import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';

describe('clawplug-template integrity', () => {
  it('should have valid package.json as a template', () => {
    const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
    expect(pkg.name).toBe('clawplug-template');
    expect(pkg.version).toBe('0.1.0');
    expect(pkg.private).toBe(true);
    expect(pkg.dependencies).toHaveProperty('clawplug');
    expect(pkg.dependencies).toHaveProperty('@sinclair/typebox');
  });

  it('should include required template files', () => {
    const requiredFiles = ['README.md', 'LICENSE', 'package.json', 'src/plugin.ts'];
    for (const f of requiredFiles) {
      expect(existsSync(f)).toBe(true);
    }
  });

  it('should have node engine requirement >= 20', () => {
    const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
    expect(pkg.engines?.node).toMatch('>=20');
  });
});
