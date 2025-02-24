"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export function DocumentationSlide() {
  return (
    <div className="min-h-screen bg-[#111111] bg-opacity-100 text-white p-4 md:p-6 z-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Code Editor Panel */}
        <div className="space-y-4">
          <Card className="bg-[#1a1b26] border-none text-white p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <button className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Delete</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <pre className="font-mono text-sm">
              <code className="text-gray-300">
                <span className="text-purple-400">from</span> <span className="text-blue-400">manim</span>{" "}
                <span className="text-purple-400">import</span> *{"\n\n"}
                <span className="text-red-400">config.media_width</span> = <span className="text-green-400">"75%"</span>
                {"\n"}
                <span className="text-red-400">config.verbosity</span> ={" "}
                <span className="text-green-400">"CRITICAL"</span>
                {"\n"}
                <span className="text-red-400">config.background_color</span> ={" "}
                <span className="text-green-400">"#111111"</span>
                {"\n"}
                <span className="text-red-400">config.progress_bar</span> ={" "}
                <span className="text-green-400">'none'</span>
              </code>
            </pre>
          </Card>

          <Card className="bg-[#1a1b26] border-none text-white p-4">
            <pre className="font-mono text-sm">
              <code className="text-gray-300">
                ManiBooks have all the basic features of a book{"\n\n"}
                <span className="text-green-400"># This is a heading</span>
                {"\n"}
                <span className="text-green-400">## This is a subheading</span>
                {"\n"}
                <span className="text-green-400">### This is a subsubheading</span>
                {"\n\n"}
                <span className="text-green-400">#### *and so on*</span>
                {"\n\n"}
                ~Every~ (more than every) feature for text formatting **is present**{"\n\n"}
                For example,{"\n"}- this{"\n"}- is{"\n"}- an{"\n"}- unordered{"\n"}- list{"\n\n"}
                But you can still do much more . . .
              </code>
            </pre>
          </Card>
        </div>

        {/* Content Panel */}
        <div className="space-y-6">
          <Image
            src="/promo.png"
            alt="Documentation diagram"
            width={400}
            height={200}
            className="w-full object-contain"
          />

          <div className="space-y-4">
            <p className="text-gray-400">And keep playing with it . . .</p>
            <h1 className="text-4xl font-bold">Advanced Manimations</h1>
            <p className="text-gray-400">And you can go crazier still . . .</p>
          </div>
        </div>
      </div>
    </div>
  )
}


import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a1c1c] via-[#cc3300] to-[#ff9900] relative overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-medium">
          <Image height={1024} width={1024} className="h-10 w-20" src="/logo.png" alt="logo" />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/products" className="text-white/90 hover:text-white transition">
            Products
          </Link>
          <Link href="/developers" className="text-white/90 hover:text-white transition">
            Developers
          </Link>
          <Button asChild className="bg-white/90 hover:bg-white text-[#0a2540] rounded-full px-6" variant="secondary">
            <Link href="/ide?welcome=true">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 flex items-center relative justify-center h-screen w-full overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-10 z-0">
        {[...Array(72)].map((_, i) => (
          <div key={i} className="border border-gray-300"></div>
        ))}
      </div>

      {/* Existing Content */}
      <div className="max-w-2xl relative z-10">
        <h1 className="text-white text-6xl font-medium leading-tight mb-8">Everything in a book but <span className="animate-pulse">more.</span></h1>
        <Button asChild className="bg-[#11253e] hover:bg-[#0a2540] text-white rounded-full px-8 py-6 text-lg">
          <Link href="/ide?welcome=true">Get Started →</Link>
        </Button>
      </div>

      {/* Logo Card */}
      <div className="bg-[#1a1a1a] p-12 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#ff6b6b] text-4xl">{"{"}</span>
            <div className="flex gap-1">
              <div className="w-4 h-16 bg-[#ffd700]"></div>
              <div className="w-4 h-16 bg-[#daa520]"></div>
              <div className="w-4 h-16 bg-[#ffd700]"></div>
            </div>
            <span className="text-[#ff6b6b] text-4xl">{"}"}</span>
          </div>
          <h2 className="text-white text-3xl font-medium">ManimBooks</h2>
          <p className="text-[#daa520]">e-book, redefined.</p>
        </div>
      </div>
    </main>



      <DocumentationSlide />
      
      
      
    </div>
  )
}