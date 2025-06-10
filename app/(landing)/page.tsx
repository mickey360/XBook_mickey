'use client';

import { Button } from "@/Components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function LandingPage(){
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-950 ">

      {/* Navbar */}

      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gradient-to-r from-[#000000c4] to-[#07061db4] shadow-sm ">
        <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center pl-3 mr-3">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={34} height={34} />
            </Link>
              <span className="text-lg font-bold text-gray-400 pl-3 mt-1">XBook</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/home" className="text-white hover:text-blue-500 transition-colors">Forum</Link>
              <Link href="/home" className="text-white hover:text-blue-500 transition-colors">Editor</Link>
              <Link href="/home" className="text-white hover:text-blue-500 transition-colors">Dashboard</Link>
              <Link href="/home" className="text-white hover:text-blue-500 transition-colors">Organization</Link>
            </div>
            <div>
              <Link 
                href="/home" 
                
              >
                <Button 
                className="px-4 py-2 border border-gray-600 bg-black text-white rounded-full hover:bg-gray-900 transition-all">
                  Sign In &nbsp;/&nbsp; Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="py-28 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold  text-gray-200 mb-6">
          The Modern Document Editor
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Our editor works seamlessly across all devices. Set it up once and enjoy beautiful documents forever.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/home" 
           
          >
            <Button className="px-6 py-3 border border-gray-600 bg-black text-white rounded-lg hover:bg-gray-950 transition-all">
               Get Started &gt;
            </Button>
          </Link>
          <Link 
            href="/home" 
            
          >
            <Button className="px-6 py-3 bg-black border border-gray-600 text-white rounded-lg hover:bg-black transition-colors">
               Read the docs
            </Button>
          </Link>
        </div>
      </section>

      {/* Clients Section */}

      <section className="py-12 bg-black rounded-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Google', 'Microsoft', 'Notion', 'Slack', 'Airbnb', 'Spotify'].map((company) => (
              <span key={company} className="text-xl font-semibold text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-8 mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold  text-gray-200 mb-4">
            Simplify your document workflow
          </h2>
          <p className="text-xl text-gray-400">
            Create, collaborate and manage documents with powerful editing tools designed for teams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Real-time Collaboration",
              description: "Work simultaneously with your team on the same document with live updates."
            },
            {
              title: "Smart Formatting",
              description: "Automatic formatting tools that make your documents look professional."
            },
            {
              title: "Version History",
              description: "Track changes and revert to any previous version with a single click."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-black border border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold  text-gray-200 mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-20 bg-gradient-to-r from-black to-gray-950 text-gray-200">
        <div className="max-w-4xl py-10 mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Faster. Smarter & Efficient</h2>
          <p className="text-xl mb-8 text-gray-400">
            Experience document editing reimagined. Focus on your content while we handle the formatting, 
            collaboration, and distribution - all in one powerful platform.
          </p>
          <Link 
            href="/home" 
            
          >
            <Button className="inline-block px-6 py-2 border border-gray-600 bg-black text-white rounded-full font-medium hover:bg-gray-950 transition-colors">
              Start Editing Now &nbsp; &gt;
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      
      <footer className="bg-gradient-to-r from-black to-gray-950  text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/home" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} XBook. All rights reserved. <Link href={"github.com/mickey_360"} className="text-gray-400 font-semibold">by mickey_360</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
