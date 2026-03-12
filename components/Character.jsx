// Step 5: Creating Character component: displays name, species, and image of character

import Image from 'next/image'

export default function Character({ name, species, image }) {
  return (
    <div className="bg-white rounded-lg p-8 border text-gray-900">
      {/* Displays character name */}
      <h1 className="text-4xl font-bold mb-4 text-black">{name}</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Displays character image */}
        <div>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="rounded"
          />
        </div>
        
        {/* Displays character species */}
        <div>
          <p className="text-xl text-gray-900">
            <strong>Species:</strong> {species}
          </p>
        </div>
      </div>
    </div>
  )
}
