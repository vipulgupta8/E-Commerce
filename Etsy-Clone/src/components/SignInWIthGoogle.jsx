import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import googleIcon from "../assets/google.png";
import 'react-toastify/dist/ReactToastify.css';

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        // toast.success("User logged in Successfully", {
        //   position: "top-center",
        // });
        toast.success("User logged in Successfully", {
            position: "top-center",
            autoClose: 2000, // Automatically close the toast after 2 seconds
          });
        window.location.href = "/profile";
      }
    });
  }
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={googleIcon} width="30%" alt="Google Login Icon" />

      </div>
      <ToastContainer/>
    </div>
  );
}
export default SignInwithGoogle;


