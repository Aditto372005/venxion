import React, { useState } from 'react';
import { Shield, Download, Users, Star, ArrowRight, CheckCircle, Gamepad2, Palette } from 'lucide-react';

function App() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const features = [
    {
      icon: Download,
      title: "Instant Download",
      description: "Get your texture pack immediately after verification"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Virus-free downloads with secure verification"
    },
    {
      icon: Users,
      title: "Trusted by Gamers",
      description: "Join thousands of Minecraft players worldwide"
    },
    {
      icon: Palette,
      title: "High Quality",
      description: "Premium textures with stunning visual details"
    }
  ];

  const benefits = [
    "100% free Minecraft texture pack",
    "Compatible with latest Minecraft versions",
    "24/7 customer support",
    "Easy installation guide included",
    "Works with Optifine and vanilla Minecraft"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-800">
      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MinecraftPacks</h1>
                <p className="text-sm text-green-200">Premium Texture Packs</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors duration-200">Features</a>
              <a href="#download" className="text-white/80 hover:text-white transition-colors duration-200">Download</a>
              <a href="#support" className="text-white/80 hover:text-white transition-colors duration-200">Support</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 mb-8">
            <Gamepad2 className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-300 text-sm font-medium">Premium Minecraft Texture Pack</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Download Your
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Texture Pack
            </span>
          </h1>
          
          <p className="text-xl text-green-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your Minecraft world with this stunning high-resolution texture pack. Complete the quick verification below to get your free download.
          </p>

          {/* Content Locker Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <span className="text-white font-semibold">Secure Download Verification</span>
                </div>
              </div>
              
              {!isIframeLoaded && (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
                  <span className="ml-4 text-white">Loading download portal...</span>
                </div>
              )}
              
              <div className={`transition-opacity duration-500 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <iframe
                  src="https://bestreward.eu/iframe/faf2883e-8be1-11f0-9a5f-8a5fb7be40ea"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  className="rounded-xl border border-white/10"
                  onLoad={() => setIsIframeLoaded(true)}
                  title="Texture Pack Download"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Texture Pack?
            </h2>
            <p className="text-xl text-green-200 max-w-2xl mx-auto">
              Experience Minecraft like never before with our carefully crafted high-quality textures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-green-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-white/20 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Transform Your Minecraft
                </h2>
                <p className="text-xl text-green-200 mb-8">
                  Experience enhanced visuals and immersive gameplay with our premium texture pack.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl p-8 border border-white/10">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Download className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Download?</h3>
                    <p className="text-green-200 mb-6">
                      Complete the verification above to get your free Minecraft texture pack instantly.
                    </p>
                    <div className="flex justify-center">
                      <button 
                        onClick={() => {
                          document.querySelector('iframe')?.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                          });
                        }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50"
                      >
                        Download Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">MinecraftPacks</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#support" className="text-green-200 hover:text-white transition-colors duration-200">Support</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-green-200">© 2025 MinecraftPacks. All rights reserved. Premium Minecraft texture packs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;