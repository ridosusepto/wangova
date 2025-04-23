import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Web3Portfolio() {
  const projects = [
    {
      category: 'Layer-1',
      items: [
        {
          name: 'Bitcoin',
          description: 'The original store of value in crypto. We view Bitcoin as the digital gold and a foundational layer for macro exposure to the decentralized financial system.',
          founder: 'Satoshi Nakamoto',
          logo: '/images/testimonial-10.jpg'
        },
        {
          name: 'SUI',
          description: 'A high-performance Layer-1 chain focused on speed, object-centric programming, and mainstream usability. SUI is part of our exposure to scalable L1 solutions.',
          founder: 'Evan Cheng',
          logo: '/images/testimonial-13.jpg'
        },
        {
          name: 'Solana',
          description: 'Fast, scalable, and efficient. Blockchains powering the next era of Web3 applications.',
          founder: 'Anatoly Yakovenko',
          logo: '/images/testimonial-14.jpg'
        }
      ]
    },
    {
      category: 'Exchange',
      items: [
        {
          name: 'Bitget Coin',
          description: 'A utility token tied to the rapidly growing Bitget ecosystem. Held for exchange-related benefits, trading advantages, and ecosystem incentives.',
          founder: 'Gracy Chen',
          logo: '/images/testimonial-11.jpg'
        },
        {
          name: 'Binance',
          description: 'Fueling the largest crypto exchange ecosystem, BNB plays a critical role in DeFi, trading, and infrastructure.',
          founder: 'Changpeng Zhao (CZ)',
          logo: '/images/testimonial-16.jpg'
        }
      ]
    },
    {
      category: 'DeFi',
      items: [
        {
          name: 'Hyperliquid',
          description: 'An emerging leader in decentralized perpetual trading. HYPE represents next-gen on-chain derivatives with unmatched speed and UX—our early thesis aligns with its protocol design and traction.',
          founder: 'Jeff Yan',
          logo: '/images/testimonial-12.jpg'
        },
        {
          name: 'AAVE',
          description: 'Leading decentralized lending protocol. AAVE is key to the DeFi infrastructure layer, and we hold it for exposure to credit markets without intermediaries.',
          founder: 'Stani Kulechov',
          logo: '/images/testimonial-17.jpg'
        }
      ]
    },
    {
      category: 'Stablecoin',
      items: [
        {
          name: 'USDT',
          description: 'We maintain USDT as a liquidity anchor and risk management tool, stable operations during market volatility.',
          founder: 'J.R. Willett',
          logo: '/images/testimonial-15.jpg'
        },
        {
          name: 'PAXG',
          description: 'A regulated digital asset backed by physical gold. PAXG allows exposure to the stability of gold while benefiting from blockchain liquidity and transparency.',
          founder: 'Charles Cascarilla',
          logo: '/images/testimonial-18.jpg'
        }
      ]
    }
  ];

  return (
    <section className="relative">
      {/* Background shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Web3 Portfolio
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Projects We Believe In
            </h2>
            <p className="text-lg text-indigo-200/65">
              We invest in technologies, founders, and communities building the future of decentralized finance, infrastructure, and Web3 experiences.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-800 pb-6">
            {projects.map((projectCategory) => (
              <button 
                key={projectCategory.category}
                className="px-6 py-2 bg-gray-800 rounded-full font-medium hover:bg-gray-700 transition-colors text-indigo-200"
              >
                {projectCategory.category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {projects.flatMap(category => 
              category.items.map((project, index) => (
                <article 
                  key={`${category.category}-${index}`} 
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4 overflow-hidden border border-gray-600">
                      <Image 
                        src={project.logo} 
                        alt={`${project.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                        {project.name}
                      </h3>
                      <p className="text-indigo-200/65 text-sm">
                        {project.founder}
                      </p>
                    </div>
                  </div>
                  <p className="text-indigo-200/65">
                    {project.description}
                  </p>
                </article>
              ))
            )}
          </div>

          {/* View All button */}
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg font-medium hover:opacity-90 transition-opacity text-white">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}