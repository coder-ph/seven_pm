import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

export default function HomePage() {
  const phoneNumber = "+254726496894";
  const whatsappNumber = "+254726496894";

  return (
    <div className="max-w-6xl mx-auto px-23">
      {/* Floating Contact Icons */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Call Icon */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 animate-float"
          title="Call Us"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        {/* WhatsApp Icon */}
        <a
          href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 animate-float"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.424"/>
          </svg>
        </a>
      </div>

      <h1
        className="
          text-[22px]
          font-serif
          m-0
          mb-[34px]
          text-white
          drop-shadow-[0_0_6px_rgba(135,206,250,0.9)]
        "
        style={{ fontFamily: "Bitter, Georgia, serif" }}
        role="heading"
      >
        The Seven PM Dj Academy
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        
        <div className="w-full md:w-3/5 max-w-2xl">
          <div className="mb-8">
            <Image
              src="/poster.png"
              width={1080}
              height={1068}
              alt="poster image"
              className="rounded-[6px] shadow-md w-full h-auto"
              priority
            />
          </div>
          
          {/* H1 content under the poster */}
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              The Crowd is Waiting. <span className="text-blue-300">Are You Ready?</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              At our premier DJ academy, we turn passionate music lovers into unforgettable performers. 
              With industry-standard equipment, intimate class sizes, and guidance from top industry DJs, 
              you'll gain more than skills—you'll gain the confidence to own any stage.
            </p>
            
            {/* Class Hours Section */}
            <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-6 mt-6">
              <h3 className="text-2xl font-bold text-white mb-4">Class Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                <div className="text-center">
                  <div className="mb-2">
                    <p className="font-semibold text-blue-300">Mon – Fri</p>
                    <p className="text-lg">8 am – 8.30 pm</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-300">Saturday</p>
                    <p className="text-lg">8 am – 2 pm</p>
                  </div>
                </div>
                <div className="text-center border-l-0 md:border-l border-blue-500 md:pl-4">
                  <div className="flex flex-col items-center justify-center h-full">
                    <p className="font-semibold text-blue-300 mb-2">Program Duration</p>
                    <p className="text-lg">2-hour sessions</p>
                    <p className="text-lg font-bold text-blue-300">for 2 months</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6">
              <p className="text-blue-100 text-lg italic">
                "Stop dreaming about the spotlight. We'll teach you how to command it."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - YouTube video and Instagram */}
        <div className="w-full md:w-2/5 max-w-sm flex flex-col items-center sticky top-8">
          {/* YouTube Section */}
          <div className="mb-8 w-full">
            <div className="mb-4 text-center">
              <p className="text-lg font-semibold text-white mb-2">
                Subscribe to our YouTube Channel
              </p>
              <Link
                href="https://www.youtube.com/@thesevenpment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition"
              >
                Subscribe
              </Link>
            </div>

            <div className="w-full max-w-xs aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_td9nyObtuw?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="w-full"> 
            <div className="mb-4 text-center">
              <p className="text-lg font-semibold text-white mb-2">
                Follow us on Instagram
              </p>
              <Link
                href="https://instagram.com/the_sevenpmdjacademy" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md font-medium hover:from-purple-700 hover:to-pink-700 transition"
              >
                Follow
              </Link>
            </div>

       
            <Link
              href="https://instagram.com/the_sevenpmdjacademy" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-xs aspect-video rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition-opacity"
            >
              <Image
                src="/post.png" 
                width={640}
                height={360}
                alt="Follow us on Instagram"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

     
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Find Our DJ Academy</h2>
          
        </div>

        {/* Map Container - Reduced height */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
        <iframe
          className="w-full h-full"
          src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d63835.23503338734!2d35.2603456!3d0.5157817999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzAnNTYuOCJOIDM1wrAxNiczOC45IkU!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske&z=20`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Seven PM DJ Academy Location"
        ></iframe>
        
      </div>
      </div>
    </div>
  )
}