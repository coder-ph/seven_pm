"use client"

export default function VideoShowcase() {
  // You'll replace these with your actual Vimeo video IDs
  const videos = [
    {
      id: "video1",
      title: "Beginner Mixing Techniques",
      description: "Learn the fundamentals of beat matching and transitions",
      vimeoId: "YOUR_VIMEO_ID_1" // Replace with actual Vimeo ID
    },
    {
      id: "video2", 
      title: "Advanced Scratching Workshop",
      description: "Master advanced scratching techniques with our instructors",
      vimeoId: "YOUR_VIMEO_ID_2" // Replace with actual Vimeo ID
    },
    {
      id: "video3",
      title: "Music Theory for DJs",
      description: "Understand music structure for better mixing decisions",
      vimeoId: "YOUR_VIMEO_ID_3" // Replace with actual Vimeo ID
    },
    {
      id: "video4",
      title: "Live Performance Setup",
      description: "Learn how to prepare for live performances and gigs",
      vimeoId: "YOUR_VIMEO_ID_4" // Replace with actual Vimeo ID
    }
  ]

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Class <span className="text-blue-400">Videos</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Watch our expert instructors in action. Each video is designed to take 
          your DJ skills to the next level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 backdrop-blur-sm">
            {/* Video Player */}
            <div className="aspect-video bg-slate-900">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold">Vimeo Video</p>
                  <p className="text-gray-400 text-sm mt-2">Replace with Vimeo embed</p>
                </div>
              </div>
              {/* Replace the above div with actual Vimeo embed:
              <iframe 
                src={`https://player.vimeo.com/video/${video.vimeoId}`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
              <p className="text-gray-300 mb-4">{video.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                Watch Full Video
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}