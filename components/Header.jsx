// Step 4: Create a nav bar

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 space-x-8">
          {/* Link to Home page */}
          <Link 
            href="/" 
            className="text-xl font-bold hover:text-blue-200"
          >
            Home
          </Link>
          
          {/* Link to Characters page */}
          <Link 
            href="/characters" 
            className="text-xl font-bold hover:text-blue-200"
          >
            Characters
          </Link>
        </div>
      </nav>
    </header>
  )
}
