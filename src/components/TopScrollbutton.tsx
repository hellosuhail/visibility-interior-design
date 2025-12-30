import React from 'react'

const TopScrollbutton = () => {
  return (
    <div>
           {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-xl bg-red-400 text-white text-xl flex items-center justify-center shadow-lg hover:bg-red-500"
      >
        ↑
      </button>
    </div>
  )
}

export default TopScrollbutton
