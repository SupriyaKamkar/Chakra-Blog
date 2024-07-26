import Image from "next/image";
import { Merienda } from "next/font/google";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import NavBar from "@/components/Navbar";
import WavyText from "@/components/WavyText";

const inter = Merienda({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div>
        <div
          className=" inset-0 z-0 bg-fixed h-screen"
          style={{
            backgroundImage: `url(/parallax5/bg.png)`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <NavBar />
          {/* make height 86% */}
          <div className="h-[86%] w-full p-6 ">
            <div className="w-full h-full flex justify-center bg-green-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 overflow-hidden shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#010f,0_0_15px_#010f,0_0_30px_#010f]">
              <h1 className="text-5xl md:text-7xl md:mt-8 relative z-10 animated-background bg-gradient-to-r  from-teal-500  via-cyan-500  to-teal-700 text-transparent  bg-clip-text font-extrabold  text-center select-auto ">
                CHAKRA
              </h1>
              <div className="drop-container">
                <div className="drop"></div>
              </div>
              <div
                className="absolute inset-0 z-20 animate-slidein"
                style={{
                  backgroundImage: `url(parallax5/fore.png)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {" "}
              </div>
              {/* <MultiLayerParallax /> */}

              {/* <div className="w-full">
                <div className="max-w-lg space-y-4 mx-auto py-24">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam quae earum nobis quasi repellat. Amet facere nulla
                    dolorum accusantium sit dolores odio excepturi facilis
                    laboriosam officiis dolorem, nobis reprehenderit molestiae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam quae earum nobis quasi repellat. Amet facere nulla
                    dolorum accusantium sit dolores odio excepturi facilis
                    laboriosam officiis dolorem, nobis reprehenderit molestiae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam quae earum nobis quasi repellat. Amet facere nulla
                    dolorum accusantium sit dolores odio excepturi facilis
                    laboriosam officiis dolorem, nobis reprehenderit molestiae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam quae earum nobis quasi repellat. Amet facere nulla
                    dolorum accusantium sit dolores odio excepturi facilis
                    laboriosam officiis dolorem, nobis reprehenderit molestiae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam quae earum nobis quasi repellat. Amet facere nulla
                    dolorum accusantium sit dolores odio excepturi facilis
                    laboriosam officiis dolorem, nobis reprehenderit molestiae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam quae earum nobis quasi repellat. Amet facere nulla
                    dolorum accusantium sit dolores odio excepturi facilis
                    laboriosam officiis dolorem, nobis reprehenderit molestiae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam quae earum nobis quasi repellat. Amet facere nulla
                    dolorum accusantium sit dolores odio excepturi facilis
                    laboriosam officiis dolorem, nobis reprehenderit molestiae.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
