export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Send</button>
      </form>
    </section>
  );
}
