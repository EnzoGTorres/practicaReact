import Header from './Header'

// Fuera del componente de react podemos usar JS normalmente
// En el caso de que necesitemos "escaparnos" de React dentro del componente para hacer comentarios, debemos encerrar el escape entre llaves// 
// Al iniciar a buildear la app necesitarmos apuntar en VS que vamos a trabajar en JSX en la barra de abajo
function App() {

  let nombre = "Enzo"
  
  return (
    /* En vez de usar una etiqueta div podemos usar un "fragmento" como a continuación*/
    <>
      {/*Comentarios en JSX*/}
    {/*<header iid="header" ClassName="header">
      <h1>Página de prueba</h1>
  </header>*/}

    <Header />

    <main>
      <h2>Home</h2>
      <p>Bienvenido {nombre}</p>
    </main>
    
    <footer>

    </footer>
    </>
  );
}

export default App;
