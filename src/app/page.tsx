"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const poems = [
  {
    id: 1,
    title: "Whispers of Dawn",
    excerpt: "In the quiet moments before sunrise, when the world holds its breath...",
    fullText: `In the quiet moments before sunrise,
when the world holds its breath,
I find myself writing letters
to the person I used to be.

The ink flows like morning mist,
carrying dreams I thought I'd lost,
and in each word, I discover
that healing has its own rhythm.

Sometimes the most beautiful poetry
is written in the spaces between
what we say and what we mean,
in the silence that follows truth.`,
    image: "/images/p11.jpg",
  },
  {
    id: 2,
    title: "Garden of Words",
    excerpt: "She planted metaphors in the soil of her heart...",
    fullText: `She planted metaphors in the soil of her heart,
watered them with midnight tears,
and watched as they bloomed into verses
that could move mountains.

Each poem was a seed of hope,
scattered by the wind of her voice,
taking root in the minds of strangers
who needed to hear they weren't alone.

In her garden of words,
every season brought new growth,
and she learned that the most powerful magic
is simply telling your truth.`,
    image: "/images/p2.jpg",
  },
  {
    id: 3,
    title: "Moonlit Reflections",
    excerpt: "Under the silver gaze of the moon, thoughts become poetry...",
    fullText: `Under the silver gaze of the moon,
thoughts become poetry,
and I am reminded that some things
are too beautiful for daylight.

The night holds space for vulnerability,
for the kind of honesty that only comes
when the world is sleeping
and your heart is wide awake.

I write by moonlight because
that's when the truth feels safest,
when words can be themselves
without fear of judgment.`,
    image: "/images/p3.jpg",
  },
  {
    id: 4,
    title: "Phoenix Rising",
    excerpt: "From the ashes of yesterday's pain, new strength emerges...",
    fullText: `From the ashes of yesterday's pain,
new strength emerges,
phoenix-like and fierce,
carrying the wisdom of survival.

I have learned that breaking
is not the end of the story,
but the beginning of becoming
something more beautiful.

Every scar is a poem,
every tear a verse,
and in the rebuilding,
I discover who I was meant to be.

Rising is not about forgetting the fall,
but about choosing to fly
despite the memory of impact,
despite the fear of falling again.`,
    image: "/images/p4.jpg",
  },
]

export default function Component() {
  const [currentPoem, setCurrentPoem] = useState(0)
  const [selectedPoem, setSelectedPoem] = useState<(typeof poems)[0] | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const nextPoem = () => setCurrentPoem((prev) => (prev + 1) % poems.length)
  const prevPoem = () => setCurrentPoem((prev) => (prev - 1 + poems.length) % poems.length)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-serif text-gray-800 font-light">tee._writes</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-light">About</a>
              <a href="#poems" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Poems</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Connect</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(true)}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="text-2xl font-serif text-gray-800 font-light">tee._writes</div>
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <a onClick={() => setMenuOpen(false)} href="#home" className="text-gray-800 text-lg">Home</a>
              <a onClick={() => setMenuOpen(false)} href="#about" className="text-gray-800 text-lg">About</a>
              <a onClick={() => setMenuOpen(false)} href="#poems" className="text-gray-800 text-lg">Poems</a>
              <a onClick={() => setMenuOpen(false)} href="#contact" className="text-gray-800 text-lg">Connect</a>
            </nav>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-6 font-light tracking-wide">tee._writes</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Welcome to the world of words, where emotions find their voice and stories bloom like flowers in the garden
            of the heart by Tamanna Sharma
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-md bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 border-white/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 font-light">About the Poet</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Tamanna Sharma is a contemporary poet who finds beauty in the ordinary moments and transforms pain
                      into purpose through the power of words.
                    </p>
                    <p className="text-lg">
                      With a voice that speaks to the soul, each poem is crafted as a bridge between hearts, connecting
                      readers to their own stories of resilience, love, and growth.
                    </p>
                    <blockquote className="text-xl font-serif italic text-gray-600 border-l-4 border-pink-200 pl-4 my-6">
                      "Poetry is not just what I write, it's how I breathe life into the silence between heartbeats."
                    </blockquote>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl backdrop-blur-sm bg-white/20 border-4 border-white/30">
                      <Image
                        src="/images/author.jpg"
                        alt="tee._writes profile"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Poems Section */}
      <section id="poems" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-12 font-light">
            Poetry Collection
          </h2>

          <div className="relative">
            <Card className="backdrop-blur-md bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 border-white/20 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 md:h-[500px]">
                  <Image
                    src={poems[currentPoem].image || "/placeholder.svg"}
                    alt={poems[currentPoem].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-serif mb-3">{poems[currentPoem].title}</h3>
                    <p className="text-lg mb-4 opacity-90 leading-relaxed">{poems[currentPoem].excerpt}</p>
                    <Button
                      onClick={() => setSelectedPoem(poems[currentPoem])}
                      className="bg-gradient-to-r fromირ
                      from-pink-100 via-blue-100 to-purple-100 hover:bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 backdrop-blur-sm border border-white/30 text-white"
                    >
                      Read Full Poem
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              onClick={prevPoem}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 hover:bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 backdrop-blur-sm border border-white/30 text-gray-800 rounded-full p-3"
              size="icon"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextPoem}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 hover:bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 backdrop-blur-sm border border-white/30 text-gray-800 rounded-full p-3"
              size="icon"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Poem Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {poems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPoem(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPoem ? "bg-purple-400 scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4">
        <Card className="backdrop-blur-md bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 border-white/20 shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Connect with tee._writes</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="p-3 rounded-full bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 hover:bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 backdrop-blur-sm border borderèvre
              border-white/30 transition-all hover:scale-110"
              >
                <Instagram className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 hover:bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 backdrop-blur-sm border border-white/30 transition-all hover:scale-110"
              >
                <Youtube className="h-6 w-6 text-gray-700" />
              </a>
            </div>
            <p className="text-gray-600 mt-6 font-light">© 2024 tee._writes. All rights reserved.</p>
          </CardContent>
        </Card>
      </footer>

      {/* Poem Modal */}
      {selectedPoem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="backdrop-blur-md bg-gradient-to-br from-pink-100 via объек
          blue-100 to-purple-100 border-white/20 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-serif text-gray-800">{selectedPoem.title}</h3>
                <Button
                  onClick={() => setSelectedPoem(null)}
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="prose prose-lg max-w-none">
                <pre className="font-serif text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
                  {selectedPoem.fullText}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}