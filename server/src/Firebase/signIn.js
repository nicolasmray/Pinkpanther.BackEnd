const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const signIn = async (req, res) => {
  try {
    const {  email, password } = req.body;
    
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user

    return res.status(200).json({ 
      message: "Se logueó con éxito el cliente",
      user: {
        uid: user.uid,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Error signing in:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = signIn;