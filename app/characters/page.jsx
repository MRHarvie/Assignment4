// Step 2: Setup the Characters Page
// Fetching and displaying data

import Link from 'next/link'

// Get all characters from the API
async function getCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  
  if (!res.ok) {
    throw new Error('Failed to fetch characters')
  }
  
  return res.json()
}

export default async function CharactersPage() {
  const data = await getCharacters()
  const characters = data.results

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Rick and Morty Characters
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character) => (
            <Link 
              key={character.id}
              href={`/characters/${character.id}`}
              className="p-4 border rounded hover:bg-gray-100"
            >
              <h2 className="text-xl font-semibold">{character.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
