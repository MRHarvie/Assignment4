// Step 3: Setup the Character page

import Character from '@/components/Character'

// Get individual character data using the ID
async function getCharacter(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch character')
  }
  
  return res.json()
}

// Generate static params for all characters (for static export)
export async function generateStaticParams() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  
  return data.results.map((character) => ({
    id: character.id.toString(),
  }))
}

export default async function CharacterDetail({ params }) {
  //  params.id is coming from the [id] folder name in the URL
  const character = await getCharacter(params.id)

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Character 
          name={character.name}
          species={character.species}
          image={character.image}
        />
      </div>
    </main>
  )
}
