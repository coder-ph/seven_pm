'use client'

export default function VideoShowcase() {
  const videos = [
    {
      id: "video1",
      title: "",
      description: "Watch our students in action during their learning session",
      vimeoId: "1125122553"
    },
    {
      id: "video2", 
      title: "",
      description: "Students engaged in interactive classroom activities",
      vimeoId: "1125118544"
    },
    {
      id: "video3",
      title: "",
      description: "Learner enjoying their educational journey",
      vimeoId: "1125118948"
    },
    {
      id: "video4",
      title: "",
      description: "Students participating in hands-on learning experiences",
      vimeoId: "1125118853"
    }
  ]

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Class <span className="text-blue-400">Videos</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Watch our students in action. Each video showcases the vibrant learning 
          environment and engaging activities at our school.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {videos.map((video) => (
          <div key={video.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:transform hover:scale-[1.02] transition-all duration-300 w-full max-w-md mx-auto">
            {/* Video Player - Perfectly fitted */}
            <div className="w-full aspect-video bg-slate-900">
              <iframe 
                src={`https://player.vimeo.com/video/${video.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            
            {/* Video Info - Clean and simple */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
              <p className="text-gray-300">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vimeo Player Script - Only load once */}
      <script src="https://player.vimeo.com/api/player.js" async></script>
    </section>
  )
}