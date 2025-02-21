export default function Navbar({ scrollToSection, homeRef, aboutRef, productsRef, contactRef, privacyRef }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center gap-6 shadow-md z-50">
      <button onClick={() => scrollToSection(homeRef)} className="px-4 py-2 hover:bg-gray-700 rounded">Home</button>
      <button onClick={() => scrollToSection(aboutRef)} className="px-4 py-2 hover:bg-gray-700 rounded">About</button>
      <button onClick={() => scrollToSection(productsRef)} className="px-4 py-2 hover:bg-gray-700 rounded">Products</button>
      <button onClick={() => scrollToSection(privacyRef)} className="px-4 py-2 hover:bg-gray-700 rounded">Privacy</button>
      <button onClick={() => scrollToSection(contactRef)} className="px-4 py-2 hover:bg-gray-700 rounded">Contact</button>
    </nav>
  );
}
