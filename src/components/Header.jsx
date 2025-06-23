export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="p-4 flex justify-between items-center shadow-md dark:shadow-white">
      <h1 className="text-2xl font-bold">Tasty Bites</h1>
      <nav className="flex items-center gap-4">
        <a href="#menu" className="hover:underline">Menu</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
