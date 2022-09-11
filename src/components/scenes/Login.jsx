import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword, 
  signInWithPopup} from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyCp6FZCpXKcpBYMvUqrAxpqviPcaRvoKH8",
    authDomain: "mtm-final-proj.firebaseapp.com",
    projectId: "mtm-final-proj",
    storageBucket: "mtm-final-proj.appspot.com",
    messagingSenderId: "891098749462",
    appId: "1:891098749462:web:39880af7cc95ea9c2bb337",
    measurementId: "G-RTTR143Z3Q"
  };

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const connectAuth = async () => {
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to Auth
    return getAuth(app);
  }

  const handleLogin = async () => {
    const auth = await connectAuth()
    const user = await signInWithEmailAndPassword(auth, email, password)
      .catch(err => alert(err.message))
    if(user) {
      console.log(user.user)
      setIsLoggedIn(true)
    }
  }

  const handleGoogleLogin = async () => {
    const auth = await connectAuth()
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth, provider)
      .catch(err => alert(err.message))
    if(user) {
      console.log(user.user)
      setIsLoggedIn(true)
    }
  }

  const handleSignUp = async () => {
    const auth = await connectAuth()
    // send email and password to firebase auth
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .catch(err => alert(err.message))
    // if all ok...
    if(user) {
      console.log(user.user)
      setIsLoggedIn(true)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">
        Email:
        <input
          value={email} onChange={e => setEmail(e.target.value)}
          name="email" type="email" placeholder="you@there.com" />
      </label><br />
      <label htmlFor="password">
        Password:
        <input
          value={password} onChange={e => setPassword(e.target.value)}
          name="password" type="password" />
      </label><br />
      <button onClick={handleLogin}>Login</button>&nbsp;
      <button onClick={handleSignUp}>Sign Up</button>
      <br />
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </form>
  )
}

export default Login;

