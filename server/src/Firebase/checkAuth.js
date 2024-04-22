const { getAuth, onAuthStateChanged } = require("firebase/auth");

const checkAuth = async (req, res) => {
  try {
    const auth = getAuth();

    // Listen for authentication state changes
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        return res.status(200).json({ 
          message: "El usuario está autenticado correctamente",
          user: {
            uid: user.uid,
          }
        });
      } else {
        // No user is signed in
        return res.status(401).json({ 
          message: "El usuario no está autenticado"
        });
      }
    });
  } catch (error) {
    console.error("Error checking authentication:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = checkAuth;