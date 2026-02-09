import './App.css'

function Header({ surname }) {
  return (
    <h1>{surname}</h1>
  );
}

function Box({ subject }) {
  return (
    <div className="box">
      {subject}
    </div>
  );
}

function App() {
  const surname = "Lance Jerald Laxamana";
  const subject= "CPEITEL";
  
  return (
    <>
      <div className="container">
        <Header surname={surname} />
        <Box subject={subject} />
      </div>
    </>
  )
}

export default App