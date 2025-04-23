import Link from "next/link";

export default function InsightFundPage() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-6 sm:px-12 lg:px-24">
            <div className="w-full max-w-4xl rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_40px_-5px_rgba(124,58,237,0.3)] p-10 sm:p-12 space-y-8">
                {/* Header with crypto styling */}
                <div className="border-b border-purple-500/20 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                            Blockchain Letter
                        </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-400">
                        <p>30/12/2024</p>
                        <div className="flex gap-2">
                            <span className="text-purple-300">Rido Susepto</span>
                            {/* <span>•</span>
              <span className="text-cyan-300">Cosmo Jiang</span>
              <span>•</span>
              <span className="text-indigo-300">Katrina Paglia</span>
              <span>•</span>
              <span className="text-blue-300">Erik Lowe</span> */}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8 text-gray-300">
                    {/* Title section with crypto elements */}
                    <div className="p-4 border border-purple-500/20 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-xl"></div>
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-2">
                            Full-Spectrum Investing Approach
                        </h2>
                        <p className="text-base leading-relaxed">
                            <span className="font-semibold text-white">Wangova's Full-Spectrum Approach to Blockchain Investing</span>
                            <br />
                            By <span className="text-cyan-300 font-medium">Rido Susepro</span>, <span className="text-purple-300">General Partner</span>
                        </p>
                    </div>

                    {/* Introduction with animated border */}
                    <div className="p-5 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 bg-gray-900/30">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
                            <h3 className="text-xl font-bold text-white">Introduction</h3>
                        </div>
                        <p className="text-base leading-relaxed text-gray-300">
                            Blockchain is becoming the foundation of the digital economy,
                            shifting how value is built and transferred. With flexible capital
                            structures and diverse entry points, it offers rare, asymmetric
                            opportunities. Success will come to those who understand its
                            complexities and invest broadly. Wangova Labs adaptable
                            approach allows us to seize the best risk-reward across market
                            cycles.
                        </p>
                    </div>

                    {/* Unique Characteristics - crypto list */}
                    <div className="p-5 rounded-lg bg-gray-900/40 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
                            <h3 className="text-xl font-bold text-white">Unique Characteristics of Blockchain Investing</h3>
                        </div>
                        <ul className="space-y-3 pl-2 text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-1">◉</span>
                                <div>
                                    <strong className="text-cyan-300">Tokens as Capital:</strong>
                                    <span className="text-gray-300"> Blockchain businesses issue tokens instead of equity, aligning stakeholder incentives.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-1">◉</span>
                                <div>
                                    <strong className="text-indigo-300">Multiple Token Types:</strong>
                                    <span className="text-gray-300"> Includes cryptocurrencies, NFTs, utility tokens, and network tokens.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-1">◉</span>
                                <div>
                                    <strong className="text-blue-300">Early Liquidity:</strong>
                                    <span className="text-gray-300"> Tokens can become liquid earlier via TGEs compared to IPOs.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-1">◉</span>
                                <div>
                                    <strong className="text-green-300">Venture Returns Publicly:</strong>
                                    <span className="text-gray-300"> Public markets offer venture-style returns due to early liquidity.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Key Verticals - crypto cards */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
                            <h3 className="text-xl font-bold text-white">Key Verticals of Blockchain Investment</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Venture Equity Card */}
                            <div className="p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 bg-gradient-to-b from-gray-900/70 to-gray-800/30 transition-all duration-300 group">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="p-2 rounded-md bg-blue-900/30 border border-blue-500/20 group-hover:bg-blue-500/10 transition-all">
                                        <span className="text-blue-400">💼</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-blue-300">Venture Equity</h4>
                                </div>
                                <p className="text-sm text-gray-300">Traditional equity in startups, from Seed to Series B. Wangova often leads rounds for strategic impact.</p>
                            </div>

                            {/* Private Tokens Card */}
                            <div className="p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 bg-gradient-to-b from-gray-900/70 to-gray-800/30 transition-all duration-300 group">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="p-2 rounded-md bg-purple-900/30 border border-purple-500/20 group-hover:bg-purple-500/10 transition-all">
                                        <span className="text-purple-400">🪙</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-purple-300">Private Tokens</h4>
                                </div>
                                <p className="text-sm text-gray-300">Early-stage investments in Layer 1s, DeFi, and dApps. Offers early liquidity and demands experienced navigation.</p>
                            </div>

                            {/* Liquid Tokens Card */}
                            <div className="p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 bg-gradient-to-b from-gray-900/70 to-gray-800/30 transition-all duration-300 group">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="p-2 rounded-md bg-cyan-900/30 border border-cyan-500/20 group-hover:bg-cyan-500/10 transition-all">
                                        <span className="text-cyan-400">📊</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-cyan-300">Liquid Tokens</h4>
                                </div>
                                <p className="text-sm text-gray-300">Public assets with long-biased strategies. Combines VC potential with liquidity, guided by deep research.</p>
                            </div>
                        </div>
                    </div>

                    {/* Special Opportunities Section */}
                    <div className="p-5 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900/50 to-purple-900/20 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-xl"></div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>
                            <h3 className="text-xl font-bold text-white">✨ Special Opportunities</h3>
                        </div>
                        <p className="text-base leading-relaxed text-gray-300 mb-4">
                            We categorize investments as Special Opportunities when they are unique situations that do not fit neatly into traditional categories – often emerging from special circumstances such as market dislocations and structured in a way that is in between private and public.
                        </p>

                        <div className="bg-gray-800/50 p-4 rounded-lg border border-yellow-500/20 mb-4">
                            <h4 className="text-lg font-semibold text-yellow-300 mb-2">Unique Advantage</h4>
                            <p className="text-sm text-gray-300">
                                Something that differentiates Wangova is that we are the largest crypto investment firm that has specialists that look at opportunities across both public and private markets. No other large blockchain firm has specialized expertise in both and invests in a capital structure agnostic way.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="p-3 rounded-lg bg-gray-800/40 border border-green-500/20">
                                <h4 className="font-medium text-green-300 mb-1">Recent Examples</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Involvement in large bankruptcy estate creditors</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Strategic investment in The Open Network (TON) ecosystem</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Seeding cryptocurrency-focused ETFs</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-3 rounded-lg bg-gray-800/40 border border-blue-500/20">
                                <h4 className="font-medium text-blue-300 mb-1">Structures Include</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Structured private token deals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Liquidity provisioning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Bankruptcy situations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="p-5 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900/50 to-blue-900/20">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                            <h3 className="text-xl font-bold text-white">🚀 Benefits of an All-in-One Approach</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg bg-gray-800/40 border border-purple-500/20">
                                <h4 className="font-semibold text-purple-300 mb-2">Blended Return Profile</h4>
                                <p className="text-sm text-gray-300">
                                    Early-stage upside from differentiated access to Venture Equity and Private Token deals, earlier liquidity profile, and opportunistic alpha even in market pullbacks.
                                </p>
                            </div>

                            <div className="p-4 rounded-lg bg-gray-800/40 border border-cyan-500/20">
                                <h4 className="font-semibold text-cyan-300 mb-2">Capital Allocation Flexibility</h4>
                                <p className="text-sm text-gray-300">
                                    The ability to fluidly shift capital across venture equity, private tokens, liquid tokens, and special opportunities as market dynamics change.
                                </p>
                            </div>

                            <div className="p-4 rounded-lg bg-gray-800/40 border border-green-500/20">
                                <h4 className="font-semibold text-green-300 mb-2">Cross-Strategy Synergies</h4>
                                <p className="text-sm text-gray-300">
                                    Shared research and network effects provide a powerful competitive advantage across both private and public markets.
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 p-4 rounded-lg bg-gray-900/30 border border-indigo-500/20">
                            <p className="text-sm text-gray-300">
                                <span className="font-medium text-indigo-300">Wangova's Edge:</span> We have one investment committee, so our venture and public markets teams are in constant dialogue about what are the best absolute investment opportunities, and then depending on the capital structure, different partners take the lead.
                            </p>
                        </div>
                    </div>

                    {/* Conclusion with animated glow */}
                    <div className="p-5 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/30 relative overflow-hidden">
                        <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-blue-500/10 blur-xl"></div>
                        <p className="text-base leading-relaxed relative z-10">
                            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                                Wangova's capital-structure agnostic strategy
                            </strong>{" "}
                            <span className="text-gray-300">allows flexibility across cycles to maximize risk-adjusted long-term returns in the dynamic blockchain landscape.</span>
                        </p>
                    </div>
                </div>

                {/* Back Button - crypto style */}
                <div className="pt-6 border-t border-gray-700/50">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/90 to-blue-600/90 hover:from-purple-500/90 hover:to-blue-500/90 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 shadow-[0_0_15px_-3px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_-3px_rgba(124,58,237,0.5)]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}