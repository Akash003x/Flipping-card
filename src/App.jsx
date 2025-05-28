import React from "react";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 grid place-content-center">
    <h1 className="text-3xl font-bold mb-8 text-center tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
  Flipping Card
</h1>
      {/* Gradient border wrapper */}
      <div className="w-[350px] h-[590px] bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 p-1 rounded-3xl shadow-2xl">
        {/* Card */}
        <div className="w-full h-full bg-transparent cursor-pointer group rounded-3xl perspective">
          <div className="relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-3xl overflow-hidden backface-hidden duration-500 shadow-xl">
              <img
                src="public/images/p2.jpg"
                className="w-full h-full object-cover opacity-80"
                alt="Batman"
              />
              {/* Optional overlay for more style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full rounded-3xl overflow-hidden p-10 text-neutral-50 space-y-5 backface-hidden rotate-y-180 duration-500"
              style={{ backgroundColor: "rgba(10,10,20,0.92)" }}
            >
              <div>
                <span className="font-bold text-3xl tracking-wide">BATMAN</span>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-bold text-red-500">// ROLE</span>
                <span className="text-2xl font-bold">SUPER HERO</span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-red-500">// BIOGRAPHY</p>
                <p className="text-sm leading-relaxed text-neutral-200">
                  Born as Bruce Wayne, Batman is Gotham City's silent guardian and
                  watchful protector. After witnessing the tragic loss of his
                  parents, he dedicated his life to justice. With unmatched
                  intellect, masterful combat skills, and cutting-edge technology,
                  he strikes fear into the hearts of criminals. Known as the Dark
                  Knight, he fights not for fame, but for hope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;