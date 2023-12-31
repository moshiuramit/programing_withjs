import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const pets = [
    {
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      skills: ['fetch', 'Play dead', 'roll over'],
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      skills: ['fetch', 'Play dead', 'Meow'],
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      skills: ['Jump', 'Play dead', 'purr'],
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
  ];
  return (
    <>
      {/* This is JSX Comments  */}
      <h1>Vite + React + My Pets </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <ul className='container'>
        {
          pets.map( (pet,index) => (
            <li key={index}>
              <h2>{pet.title}</h2>
              <p>{pet.id}</p>
              <img src={pet.url} 
                alt={pet.title} 
                width="200"
                height="200" />
                <ul>
                  {
                    pet.skills?.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))
                  }
                </ul>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
