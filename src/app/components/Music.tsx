import { motion } from 'motion/react';
import { Music as MusicIcon } from 'lucide-react';

export function Music() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Premium Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-100 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1574988846886-a066407f9f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMG1peGluZyUyMGNvbnNvbGUlMjBkYXJrJTIwbmVvbnxlbnwxfHx8fDE3NzIwOTI0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/95 to-gray-100/85" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-gray-100/60" />
            </div>

            {/* Decorative gradient accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-pink-200/25 rounded-full blur-3xl" />

            <div className="relative z-10 p-10 md:p-14">
              {/* Equalizer decoration */}
              <div className="flex items-end gap-[3px] mb-8 h-10">
                {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.3, 0.75, 0.55, 0.85, 0.45, 0.65, 0.95, 0.35, 0.78, 0.5, 0.88, 0.42, 0.72, 0.6, 0.92, 0.48, 0.82].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 rounded-full"
                    style={{
                      background: `linear-gradient(to top, ${
                        i % 3 === 0 ? '#f97316, #ec4899' :
                        i % 3 === 1 ? '#8b5cf6, #3b82f6' :
                        '#06b6d4, #a855f7'
                      })`,
                    }}
                    initial={{ height: '15%' }}
                    animate={{ height: [`${h * 100}%`, `${h * 30}%`, `${h * 100}%`] }}
                    transition={{
                      duration: 0.8 + i * 0.1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>

              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6 shadow-sm cursor-pointer select-none"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(147, 51, 234, 0.15)' }}
                whileTap={{ scale: 0.95, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <MusicIcon className="w-5 h-5 text-purple-600" strokeWidth={2} />
                </motion.div>
                <span className="text-sm font-semibold text-gray-600 tracking-wide">Beyond Product</span>
                <motion.span
                  className="text-xs"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  🎧
                </motion.span>
              </motion.div>

              {/* Main Content */}
              <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight tracking-tight">
                Music & Creative Outlet
              </h3>
              
              <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
                I pursue music as a creative outlet and occasionally DJ at clubs or private gatherings. 
                Music helps me think in real-time feedback loops, read the room, and understand audience behaviour — insights that influence my product thinking.
              </p>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* SoundCloud Link */}
                <motion.a
                  href="https://soundcloud.com/g-aayush-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* SoundCloud Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.103.095L0 14.479l.173 1.322c.007.053.043.09.103.09.06 0 .09-.037.104-.09l.201-1.322-.201-1.331c-.014-.053-.044-.09-.104-.09m1.684-1.28c-.06 0-.112.05-.112.112l-.184 1.993.184 1.951c0 .058.052.112.112.112.052 0 .103-.05.103-.112l.23-1.951-.23-1.993c0-.059-.046-.112-.103-.112m.862-.068c-.065 0-.118.056-.118.121l-.15 2.054.15 2.018c0 .065.053.119.118.119.06 0 .112-.054.112-.119l.176-2.018-.176-2.054c0-.065-.052-.121-.112-.121m.867-.267c-.077 0-.138.067-.138.145l-.127 2.32.127 2.242c0 .078.061.139.138.139.076 0 .137-.061.137-.139l.152-2.242-.152-2.32c0-.078-.061-.145-.137-.145m.87-.178c-.084 0-.151.068-.151.156l-.104 2.498.104 2.332c0 .085.067.155.151.155.081 0 .149-.066.149-.155l.119-2.332-.119-2.498c0-.088-.068-.156-.149-.156m8.757 3.993c-.186 0-.367.025-.535.075-.066-2.663-2.283-4.79-4.973-4.79-1.077 0-2.093.348-2.917.94-.1.071-.126.178-.126.297v9.067c0 .115.08.213.188.24.02.006 5.367.006 8.363.006 1.558 0 2.825-1.263 2.825-2.828.002-1.562-1.265-2.807-2.825-2.807"/>
                  </svg>
                  <span>Listen on SoundCloud</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                {/* YouTube Link */}
                <motion.a
                  href="https://youtu.be/ruGCdxaD1u8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-gray-900 text-white border border-gray-800 rounded-full font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* YouTube Icon */}
                  <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Watch on YouTube</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}