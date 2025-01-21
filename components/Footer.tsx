export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Cheeky. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
}