'use client';
import UserModel from '@/models/user.model';

export function getUser() {
  return localStorage.getItem('user');
}

export function setUser(user: UserModel) {
  return localStorage.setItem('user', JSON.stringify(user));
}