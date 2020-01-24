import { isPortReachable } from './is-port-reachable';

describe('isPortReachable', () => {
  test('with ip which should be reachable', async () => {
    await expect(
      isPortReachable(80, { host: '172.217.168.206' })
    ).resolves.toBeTruthy();
  });

  test('with domain which should be reachable', async () => {
    await expect(
      isPortReachable(80, { host: 'google.com' })
    ).resolves.toBeTruthy();
  });

  test("with domain which shouldn't be reachable", async () => {
    await expect(isPortReachable(80, { host: '' })).rejects.toEqual({
      error: 'connect ECONNREFUSED 127.0.0.1:80'
    });
  });
});
