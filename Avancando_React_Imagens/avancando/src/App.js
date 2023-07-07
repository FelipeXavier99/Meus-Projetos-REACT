

import linux from "./assets/linux.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
     {/* imagem em public */}
     <div>
<img src ="/tigre.jpg" alt="Paisagem" />
     </div>

 {/* imagem em assets */}
     <div>
 <img src ={linux} alt="Pc" />
     </div>



    </div>
  );
}

export default App;
