import React, { createContext, ReactNode, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';
import { USERS_COLLECTION } from '../config/storage';import { useEffect } from 'react';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  isAuthenticating: boolean;
  isOpenModalToSignOut: boolean;
  toggleOpenModalToSignOut: () => void;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isOpenModalToSignOut, setIsOpenModalToSignOut] = useState(false);

  async function signIn() {
    try {
      setIsAuthenticating(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const {
        type,
        params
      } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
      
      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');
        userInfo.data.firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
        userInfo.data.token = params.access_token;

        await AsyncStorage.setItem(USERS_COLLECTION, JSON.stringify(userInfo.data));

        setUser(userInfo.data)
      }
    } catch {
      throw new Error('Authentication');
    } finally {
      setIsAuthenticating(false);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(USERS_COLLECTION);
  }

  async function loadUserFromStorage() {
    const data = await AsyncStorage.getItem(USERS_COLLECTION);

    if (data) {
      const userInfo = JSON.parse(data) as User;
      api.defaults.headers.authorization = `Bearer ${userInfo.token}`;

      setUser(userInfo);
    }
  }

  function toggleOpenModalToSignOut() {
    setIsOpenModalToSignOut(!isOpenModalToSignOut);
  }

  useEffect(() => {
    loadUserFromStorage();
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticating,
      isOpenModalToSignOut,
      toggleOpenModalToSignOut,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };