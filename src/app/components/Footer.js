export default function Footer() {
  return (
    <footer
      className="bg-black  text-gray-400 text-center py-6 mt-auto relative"
      style={{
        background:
          'linear-gradient(to top, rgba(255, 255, 255, 0.05), transparent), black',
      }}
    >
      <p className="text-sm font-ovo">&copy; {new Date().getFullYear()} Charlie Ash-Farmer. All rights reserved.</p>
    </footer>
  );
}