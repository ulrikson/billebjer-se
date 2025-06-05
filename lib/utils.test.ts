import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('combines class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('ignores falsy values', () => {
    expect(cn('a', null, undefined, false, '', 0, 'b')).toBe('a b');
  });
});
