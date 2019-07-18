import { isPortReachable } from './is-port-reachable';

describe('isPortReachable', () => {
  test('with ip which should be reachable', async () => {
    expect(await isPortReachable(80, { host: '172.217.168.206' })).toBeTruthy();
  });

  test('with domain which should be reachable', async () => {
    expect(await isPortReachable(80, { host: 'google.com' })).toBeTruthy();
  });

  test('with domain which shouldn\'t be reachable', async () => {
    expect(await isPortReachable(80, { host: '' })).toBeFalsy();
  });
});
