
import { Tabs } from "./ui/tabs";

function TabsComponent() {
    const tabs = [
        {
            title: "Branding",
            value: "branding",
            content: (
                <div className="w-full h-[40rem] bg-black card rounded-md">
                    <div className="space-y-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-center md:text-left text-center md:text-left">Unlock the Power of a Strong Brand Identity</h1>
                        <p className="text-gray-500">Did you know a well-defined brand identity can increase customer loyalty by up to 300%? It's true! A strong brand fosters trust, builds connections, and drives results. But creating one can be complex.
                        </p>

                        <p className="text-gray-500">We'll help you create a brand identity that:</p>
                        <ul className="list-disc space-y-3 text-gray-500">
                            <li> A voice that resonates: Powerful messaging that captures your brand's essence.</li>
                            <li>
                                A visual identity that captivates: Stunning visuals that showcase your brand's personality.
                            </li>
                            <li>
                                Marketing assets that convert: Compelling tools that drive engagement and sales.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Website Design",
            value: "website-design",
            content: (
                <div className="w-full bg-black card rounded-md ">
                    <div className="space-y-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-center md:text-left ">Power of Strategic Web Design</h1>
                        <p className="text-gray-500">Did you know a well-designed website can increase conversion rates by up to 200% A stunning website is great for grabbing attention, but if it doesn't convert visitors into loyal customers, it's not doing its job. Confusing messaging leaves people wondering what you offer and why they should care.</p>
                        <p className="text-gray-500">We create websites that are both beautiful and strategic: We create websites that are: </p>
                        <ul className="list-disc space-y-3 text-gray-500">
                            <li>Conversion Machines: Generate a steady stream of qualified leads, ready to do business with you.</li>
                            <li>
                                Competitive Edge Sharpeners: Outshine your competition with a website that showcases your unique value proposition.
                            </li>
                            <li>
                                Audience Magnets: Speak directly to your ideal customer's needs and desires, fostering trust and connection. Let's build a website that works as hard as you do.
                            </li>
                        </ul>
                        <div className="flex space-x-2">

                            <button className="rounded-btn">Webflow</button>
                            <button className="rounded-btn">Framer</button>
                            <button className="rounded-btn">Figma</button>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Website Development",
            value: "website-development",
            content: (
                <div className="w-full bg-black card rounded-md">
                    <div className="space-y-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-center md:text-left">Code for Conversions: Web Development with Impact</h1>
                        <p className="text-gray-500">Did you know a well-designed website can increase conversion rates by up to 200%. A stunning website is great for grabbing attention, but if it doesn't
                            convert visitors into loyal customers, it's not doing its job.   Confusing messaging
                            leaves people wondering what you offer and why they  should  care.</p>

                        <p className="text-gray-500">We build websites with: </p>


                        <ul className="list-disc space-y-3 text-gray-500">
                            <li>Conversion Architecture: Develop clear CTAs and intuitive UX using frameworks like React or Vue.js to turn visitors into leads. (Boost conversions 121%!)</li>
                            <li>
                                Competitive Advantage: Modern frameworks, optimized code (clean JavaScript and minification), and mobile-first design with tools like Bootstrap for a seamless experience. (73% switch for better mobile!)
                            </li>
                            <li>
                                Targeted Content: Craft compelling content that's easy to manage with a user-friendly Content Management System (CMS) like WordPress or Drupal. ([source]) This lets you update your site regularly without needing coding expertise.
                            </li>
                            <li>
                                Future-Proof Foundation: We build on a scalable and secure architecture for long-term growth. Let's build a website that works as hard as you do. Attract, engage, and convert visitors into loyal customers.
                            </li>
                        </ul>

                        <div className="flex space-x-2">

                            <button className="rounded-btn">Wordpress</button>
                            <button className="rounded-btn">MERN</button>
                            <button className="rounded-btn">Shopify</button>
                        </div>
                    </div>
                </div>
            ),
        },

        {
            title: "Social Media",
            value: "social-media",
            content: (
                <div className="w-full bg-black card rounded-md h-[40rem]">
                    <div className="space-y-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-center md:text-left">The Social Media Suite for Bold Creatives</h1>
                        <p className="text-gray-500">Ditch the Design Dilemmas. Creating high-quality social media content shouldn't be a headache. Our user-friendly suite lets you:</p>

                          
                        <ul className="list-disc space-y-3 text-gray-500">
                            <li>Craft Captivating Posts: Design stunning visuals, write engaging captions, and tailor content for each platform.</li>
                            <li>
                            Spark Engagement: Go beyond the static with eye-catching animations and video edits that grab attention and get people talking.
                            </li>
                            <li>
                            Schedule Like a Pro: Plan your social media strategy in advance and schedule posts seamlessly across all your platforms.
                            </li>
                        </ul>
                        <p> Ready to take your social media to the next level? Explore how our suite can transform your content creation.</p>
                        <div className="flex space-x-2">

                            <button className="rounded-btn">Wordpress</button>
                            <button className="rounded-btn">MERN</button>
                            <button className="rounded-btn">Shopify</button>
                        </div>
                    </div>
                </div>
            ),
        },

    ];

    return (


        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20 space-y-10">
            <div className="flex flex-col px-6 mx-auto ">
                <h1 className="text-3xl md:text-6xl text-white font-bold">Usecase</h1>
                <p className="text-md text-gray-400">
                    We're the go-to team for businesses looking to refine their
                </p>
            </div>
            <Tabs tabs={tabs} />
        </div>

    );
}



export default TabsComponent