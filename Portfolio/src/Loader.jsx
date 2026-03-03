export default function Loader() {
  return (
       <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "#0d0d0d",
      color:"white"
    }}>
      <img
        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
        alt="Chat qui attend"
        style={{ width: 300, height: 300 }}
      />
      <p style={{ fontSize: 24, marginTop: 20 }}>Chargement…</p>
    </div>
  );
}