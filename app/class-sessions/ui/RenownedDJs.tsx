export default function RenownedDJs() {
  const djs = [
    {
      id: "dj1",
      name: "DJ Afro",
      specialty: "Afrobeats & Dancehall",
      experience: "15+ years",
      image: "/djs/dj-afro.jpg", // You'll add these images
      description: "International award-winning DJ with performances across Africa and Europe.",
      achievements: ["Best DJ East Africa 2022", "MTV Africa Music Award Nominee"]
    },
    {
      id: "dj2",
      name: "Spin Master",
      specialty: "Hip Hop & R&B",
      experience: "12+ years", 
      image: "/djs/spin-master.jpg",
      description: "Known for incredible scratching skills and seamless transitions.",
      achievements: ["Red Bull 3Style Regional Champion", "Club Resident DJ"]
    },
    {
      id: "dj3",
      name: "Bella Beats",
      specialty: "House & Electronic",
      experience: "8+ years",
      image: "/djs/bella-beats.jpg",
      description: "Rising star in the electronic music scene with unique mixing style.",
      achievements: ["Female DJ of the Year 2023", "Festival Headliner"]
    },
    {
      id: "dj4", 
      name: "Mix Master K",
      specialty: "Open Format",
      experience: "20+ years",
      image: "/djs/mix-master-k.jpg",
      description: "Veteran DJ with extensive experience in radio and club environments.",
      achievements: ["Radio Personality Award", "Mentor to 100+ DJs"]
    }
  ]

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Renowned <span className="text-purple-400">DJs</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Meet the exceptional DJs who have trained and performed at our studio. 
          Learn from their experience and follow in their footsteps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {djs.map((dj) => (
          <div key={dj.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            {/* DJ Image */}
            <div className="h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <p className="text-white text-sm">DJ Photo</p>
              </div>
              {/* Replace with actual image:
              <Image 
                src={dj.image}
                alt={dj.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              */}
            </div>

            {/* DJ Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{dj.name}</h3>
              <div className="flex items-center text-sm text-purple-300 mb-2">
                <span>{dj.specialty}</span>
                <span className="mx-2">•</span>
                <span>{dj.experience}</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{dj.description}</p>
              
              {/* Achievements */}
              <div className="space-y-2">
                {dj.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-400">
                    <svg className="w-3 h-3 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}