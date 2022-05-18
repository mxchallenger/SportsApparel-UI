import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchUsers
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setUsers sets state for users
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for users if 200 response, else sets state for apiError
 *
 * const response = await fetch(`${Constants.USER_PROFILE_ENDPOINT}$s=${users.email}`);
 */
export default async function fetchUsers(setUserData, setApiError, users) {
  await HttpHelper(`${Constants.USER_PROFILE_ENDPOINT}${users.email}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setUserData)
    .catch(() => {
      setApiError(true);
    });
}
