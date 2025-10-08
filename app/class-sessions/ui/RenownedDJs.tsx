import Image from "next/image"

export default function RenownedDJs() {
  const djs = [
    {
      id: "dj1",
      name: "DJ Mfalme",
      specialty: "*****",
      experience: "15+ years",
      image: "/djs/mfalme.jpeg", 
      description: "Known for incredible scratching skills and seamless transitions.",
      achievements: ["*****", "*****"],
      type: "image"
    },
    {
      id: "dj2",
      name: "Dj Bash",
      specialty: "*****",
      experience: "10+ years", 
      image: "/djs/bash.jpeg",
      description: "Known for incredible mixing skills and crowd control.",
      achievements: ["*****", "*****"],
      type: "image"
    },
    {
      id: "dj3",
      name: "Joe Mfalme",
      specialty: "*****",
      experience: "*****",
      description: "*****.",
      achievements: ["*****"],
      type: "video",
      vimeoId: "1125124151"
    },
    {
      id: "dj4", 
      name: "Dj Bash",
      specialty: "*****",
      experience: "*****",
      description: "*****.",
      achievements: ["*****"],
      type: "video",
      vimeoId: "1125122499"
    }
  ]

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Renowned <span className="text-purple-400">DJs</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Meet the exceptional DJs who have visited our studio. 
          Learn from their experience and follow in their footsteps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {djs.map((dj) => (
          <div key={dj.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            
            {/* Image or Video Container */}
            <div className="h-48 bg-slate-900">
              {dj.type === "image" && dj.image ? (
                // Image for first two cards
                <Image 
                  src={dj.image}
                  alt={dj.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              ) : dj.type === "video" && dj.vimeoId ? (
                // Video for last two cards
                <div className="w-full h-full relative">
                  <iframe 
                    src={`https://player.vimeo.com/video/${dj.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={dj.name}
                  ></iframe>
                </div>
              ) : (
                // Fallback in case of missing data
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <p className="text-white text-sm">Content</p>
                  </div>
                </div>
              )}
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

      {/* Vimeo Player Script - Only load once */}
      <script src="https://player.vimeo.com/api/player.js" async></script>
    </section>
  )
}