import { userAuthenticate, userRegister } from '../../utils/api/user.api';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('Test jest', () => {
  it('Return user auth', async () => {
    const fakeUser = {
      email: 'test@GiMailShirt.com',
      password: 'mypassword',
    };

    const user = await userAuthenticate(fakeUser);
    console.log(user);
    const result = JSON.stringify(user);
    console.log(result);

    // expect(user).toBeTruthy();
  });

  it('Create user', async () => {
    const fakeUser = {
      username: 'username',
      email: 'test@GiMailShirt.com',
      password: 'mypassword',
    };

    const user = await userRegister(fakeUser);
    console.log(user);

    // expect(user).toBeTruthy();
  });
});
