import { useRouter } from "next/router";
// Data Imports
import { auth } from "@/config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

type Props = {};

const UseAuth = () => {
  const router = useRouter();

  const PrepareUser = async (user: any) => {
    const {
      uid,
      email,
      metadata: { createdAt },
      reloadUserInfo: { passwordHash },
    } = user;
    const token = await user.getIdToken(true);
    return {
      id: uid,
      email,
      password: passwordHash,
      accessToken: token,
      createdAt,
    };
  };

  const SignIn = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = await PrepareUser(result.user);
      return user;
    } catch (error: any) {
      return null;
    }
  };

  const SignOut = async () => {
    return auth
      .signOut()
      .then(() => {
        router.push("/login");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const SignUp = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await PrepareUser(result.user);
      return user;
    } catch (error: any) {
      return null;
    }
  };

  return { SignIn, SignOut, SignUp };
};

export default UseAuth;
