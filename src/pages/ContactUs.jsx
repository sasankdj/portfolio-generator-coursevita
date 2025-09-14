import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      source: "contact-page",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err?.message || "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Content */}
      <main className="flex-1">
        <section className="mx-4 md:mx-8 mt-8 grid lg:grid-cols-2 gap-10">
          <div className="bg-blue-100 border border-gray-200 rounded-xl p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-3 text-gray-600 text-lg">
              We'd love to hear from you. Send us a message and we'll get back to you shortly.
            </p>
            <div className="mt-6 space-y-4 text-gray-700">
              <p><span className="font-semibold">Email:</span> support@example.com</p>
              <p><span className="font-semibold">Hours:</span> Mon–Fri, 9am–6pm</p>
              <p><span className="font-semibold">Address:</span> 123 Market Street, San Francisco, CA</p>
            </div>
          </div>

          <div className="bg-blue-200 border border-blue-700 rounded-xl p-6 md:p-10">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input id="subject" name="subject" type="text" required className="mt-1 w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={6} required className="mt-1 w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <span className="text-green-700 font-medium">Message sent!</span>
                )}
                {status === "error" && (
                  <span className="text-red-700 font-medium">{error}</span>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
