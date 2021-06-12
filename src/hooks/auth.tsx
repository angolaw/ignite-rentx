import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { database } from "../database";
import { User as ModelUser } from "../database/model/User";
import { api } from "../services/api";

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;
      //faz nossa api conhecer o user autenticado
      api.defaults.headers.authorization = `Bearer ${token}`;
      const userCollection = database.get<ModelUser>("users");
      await database.action(async () => {
        await userCollection.create((newUser) => {
          newUser.user_id = user.id;
          newUser.email = user.email;
          newUser.name = user.name;
          newUser.token = token;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
        });
      });
      setData({ ...user, token });
    } catch (e) {
      throw new Error(e);
    }
  }
  async function signOut() {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.action(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });
      setData({} as User);
    } catch (e) {
      throw new Error(e);
    }
  }
  async function updateUser(user: User) {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.action(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update((userData) => {
          userData.name = user.name;
          userData.avatar = user.avatar;
          userData.driver_license = user.driver_license;
        });
      });
      setData(user);
    } catch (error) {
      throw new Error(error);
    }
  }
  useEffect(() => {
    async function loadUserData() {
      const userCollection = database.get<ModelUser>("users");
      const response = await userCollection.query().fetch();
      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User;
        api.defaults.headers.authorization = `Bearer ${userData.token}`;
        setData(userData);
      }
    }
    loadUserData();
  }, []);
  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
