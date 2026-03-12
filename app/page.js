// Step 1: Setup Home page
// Display a welcome message and an image

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Rick and Morty Trivia! Assignment 4 Complete
        </h1>
        <p className="text-xl mb-8">
          Explore your favorite characters from the Rick and Morty universe
        </p>
        
        <div className="flex justify-center">
          <Image
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick and Morty"
            width={300}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </main>
  )
}
