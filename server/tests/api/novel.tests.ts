
import { expect, test } from 'vitest';
import { createUserClient, noCookieClient } from './apiClient';
import { GET, POST } from './utils';

test(GET(noCookieClient.novel), async () => {
  const { userClient, cleanUp } = await createUserClient();
  const res = await userClient.$get();

  expect(res).toEqual('');

  await cleanUp();
});

test(POST(noCookieClient.novel), async () => {
  const { userClient, cleanUp } = await createUserClient();
  const aozoraUrl = 'abc'
  const res = await userClient.health.$get();

  expect(res).toEqual(aozoraUrl);

  await cleanUp();
});
