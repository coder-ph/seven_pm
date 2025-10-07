import VideoShowcase from "./ui/VideoShowcase"
import RenownedDJs from "./ui/RenownedDJs"
import Navbar from "../ui/home/Navbar"

export default function ClassSessionsPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-18">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Class <span className="text-blue-400">Sessions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our training methodology through these curated sessions. 
            Learn from the best and see what makes our DJ academy exceptional.
          </p>
        </div>

        {/* Video Showcase Section */}
        <VideoShowcase />

        {/* Renowned DJs Section */}
        <RenownedDJs />
      </div>
    </div>
    </>
  )
}