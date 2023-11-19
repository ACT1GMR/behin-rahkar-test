import UserModel from '@/models/user.model';

export function getUser() {

  return typeof window !== 'undefined' && window.localStorage?.getItem('user');
}

export function setUser(user: UserModel) {
  return typeof window !== 'undefined' && window.localStorage?.setItem('user', JSON.stringify(user));
}