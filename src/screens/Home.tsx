import React from 'react';


export const Home = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?technology')" }}>
    <h1  className="text-5xl font-extrabold mb-4 text-shadow-md">Oumaima Tahiri El Alaoui</h1>
      <section className="bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-500">À Propos de Moi</h2>
        <p className="mt-4 text-center"> Je suis une étudiante en deuxième année d'école d'ingénieurs spécialisée en réseaux et télécommunications à l'Ecole Mohammadia d'ingénieurs ,
        je suis passionnée par la conception, la gestion et l'optimisation des infrastructures de communication.</p>
      </section>
      
    </header>
    
  );
}

export default Home;