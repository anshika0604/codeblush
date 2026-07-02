"use client";

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Lightbulb,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log("Contact form submit payload:", payload);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Contact API response:", response.status, data);

      setLoading(false);

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Contact submit failed:", error);
      setLoading(false);
      setError(true);
    }
  };
  return (
    <main className="bg-[#FFFDFB] pt-40 pb-28">

      {/* HERO */}

      <section className="mx-auto max-w-5xl px-6 text-center">

        <p className="font-script text-5xl text-[#D99CA4]">
          Let's Connect ♡
        </p>

        <h1 className="mt-4 font-playfair text-5xl md:text-6xl text-[#2E2A27]">
          I'd Love to Hear From You
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B625D]">
          Whether you have a question, a collaboration idea,
          feedback about the blog, or simply want to say hello,
          my inbox is always open.
        </p>

      </section>

      {/* CONTACT CARD */}

      <section className="mx-auto mt-24 grid max-w-7xl gap-14 px-6 lg:grid-cols-2">

        {/* FORM */}

        <div className="rounded-[36px] border border-[#EFE7E1] bg-white p-10 shadow-sm">

          <p className="font-script text-4xl text-[#D99CA4]">
            Send a Message
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            <input
             name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-[#EFE7E1] bg-[#FFFDFB] px-5 py-4 outline-none transition focus:border-[#D99CA4]"
            />

            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-2xl border border-[#EFE7E1] bg-[#FFFDFB] px-5 py-4 outline-none transition focus:border-[#D99CA4]"
            />

            <input
            name="subject"
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-[#EFE7E1] bg-[#FFFDFB] px-5 py-4 outline-none transition focus:border-[#D99CA4]"
            />

            <textarea
            name="message"
              rows={6}
              placeholder="Tell me what's on your mind..."
              className="w-full rounded-2xl border border-[#EFE7E1] bg-[#FFFDFB] px-5 py-4 outline-none transition focus:border-[#D99CA4]"
            />

            <button
            type="submit"
            disabled={loading}
              className="
                rounded-full
                bg-[#D99CA4]
                px-8
                py-4
                text-white
                transition
                hover:scale-105
                hover:bg-[#C98993]
              "
            >
              {loading ? "Sending..." : "Send Message ♡"}
            </button>

          </form>

        </div>

        {/* COZY NOTE */}

        <div className="space-y-8">

          <div className="rounded-[36px] bg-[#FAF6F4] p-10">

            <p className="font-script text-4xl text-[#D99CA4]">
              ✿ Dear Friend,
            </p>

            <p className="mt-6 leading-8 text-[#6B625D]">
              Whether you're celebrating your first Hello World,
              preparing for interviews, building your dream
              workspace, or simply looking for a little coding
              inspiration...
            </p>

            <p className="mt-6 leading-8 text-[#6B625D]">
              I'd genuinely love to hear your story.
            </p>

            <p className="mt-8 font-playfair text-2xl italic text-[#2E2A27]">
              — CodeBlush ♡
            </p>

          </div>

          <div className="rounded-[36px] border border-[#EFE7E1] bg-white p-10">

            <div className="flex items-center gap-3">

              <Lightbulb className="text-[#D99CA4]" />

              <h3 className="font-playfair text-2xl text-[#2E2A27]">
                I love hearing about...
              </h3>

            </div>

            <ul className="mt-6 space-y-4 text-[#6B625D]">

              <li>☕ Your coding journey</li>

              <li>🌸 Workspace photos</li>

              <li>💻 Portfolio projects</li>

              <li>✨ Collaboration ideas</li>

              <li>♡ Blog suggestions</li>

            </ul>

          </div>

        </div>

      </section>

      {/* SOCIALS */}

      <section className="mx-auto mt-28 max-w-7xl px-6">

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Stay Connected
          </p>

          <h2 className="mt-4 font-playfair text-4xl text-[#2E2A27]">
            Find CodeBlush Around the Web
          </h2>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: Mail,
              title: "Email",
              value: "hello@codeblush.com",
            },
            {
              icon: Github,
              title: "GitHub",
              value: "github.com/codeblush",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              value: "Let's Connect",
            },
            {
              icon: Instagram,
              title: "Instagram",
              value: "@codeblush",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-[28px]
                border
                border-[#EFE7E1]
                bg-white
                p-8
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <item.icon
                size={34}
                className="text-[#D99CA4]"
              />

              <h3 className="mt-6 font-playfair text-2xl text-[#2E2A27]">
                {item.title}
              </h3>

              <p className="mt-3 text-[#6B625D]">
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* QUOTE */}

      <section className="mx-auto mt-28 max-w-3xl px-6 text-center">

        <div className="mx-auto h-px w-24 bg-[#E8B4B8]" />

        <p className="mt-10 font-playfair text-4xl italic leading-relaxed text-[#2E2A27]">
          “The best communities are built one conversation at a time.”
        </p>

      </section>

      {/* NEWSLETTER */}

      <section className="mx-auto mt-28 max-w-5xl px-6">

        <div className="rounded-[40px] bg-[#FAF6F4] px-10 py-20 text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Stay in Touch ♡
          </p>

          <h2 className="mt-4 font-playfair text-4xl text-[#2E2A27]">
            Join the CodeBlush Club
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B625D]">
            Cozy coding inspiration, beautiful wallpapers,
            productivity tips, and thoughtful articles delivered
            straight to your inbox.
          </p>

          <button
            className="
              mt-10
              rounded-full
              bg-[#D99CA4]
              px-8
              py-4
              text-white
              transition
              hover:scale-105
              hover:bg-[#C98993]
            "
          >
            Join the Club
          </button>
          {success && (
            <p className="text-green-600">
              Thank you! Your message has been sent. ♡
            </p>
          )}

          {error && (
            <p className="text-red-500">
              Something went wrong. Please try again.
            </p>
          )}

        </div>

      </section>

    </main>
  );
}