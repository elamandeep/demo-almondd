
import { Tabs } from "./ui/tabs";

function TabsComponent() {
    const tabs = [
        {
            title: "Branding",
            value: "branding",
            content: (
                <div className="w-full h-auto bg-black card rounded-md">
                    <div className="space-y-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-center md:text-left">Explode Loyalty with Brand Power! </h1>
                        <p className="text-gray-500">Forget boring logos! Strong brands create 3x happier customers! Strong brands = trust, connection, results. Building one? A headache.</p>

                        
                        <p className="text-gray-500"> We fix that:</p>
                        <ul className="list-disc space-y-3 text-gray-500">
                            <li> Voice that Rocks: Messaging that grabs attention and screams you.</li>
                            <li>
                            Killer Visuals: Designs that wow and tell your brand story.
                            </li>
                            <li>
                            Converting Assets: Tools that turn clicks into fans (and sales!)
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
                <div className="w-full h-auto bg-black card rounded-md ">
                      

                    <div className="space-y-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-center md:text-left ">Don't Lose Sales to a Messy Website!</h1>
                      
                        <p className="text-gray-500"> Make it easy for customers to find what they need and buy from you.</p>
                        <ul className="list-disc space-y-3 text-gray-500">
                            <li>Clear Navigation: Like signs in a store, use menus and search bars for guidance. </li>
                            <li>
                            Fast Loading: Don't keep customers waiting; speed matters.
                            </li>
                            <li>
                            Simple Checkout: Make buying a breeze, not a hassle
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Website Development",
            value: "website-development",
            content: (
                <div className="w-full h-auto bg-black card rounded-md">

  
                    <div className="space-y-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-center md:text-left">Your website can be a sales machine! </h1>
                        <p className="text-gray-500">our website can be a sales machine! Most websites just look nice. But a great website can get you twice as many sales. A pretty face isn't enough.</p>

                        <p className="text-gray-500">Visitors need to understand what you offer and why they should care. We build websites that are both beautiful and smart:</p>


                        <ul className="list-disc space-y-3 text-gray-500">
                            <li> Get more leads: Attract the right people who are interested in buying from you.</li>
                            <li>
                            Beat the competition: Stand out from the crowd and show why you're the best choice. Connect with customers: Speak directly to their needs and build trust.
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

        // {
        //     title: "Social Media",
        //     value: "social-media",
        //     content: (
        //         <div className="w-full bg-black card rounded-md h-[40rem]">
        //             <div className="space-y-4 w-full md:w-1/2">
        //                 <h1 className="text-4xl font-bold text-center md:text-left">The Social Media Suite for Bold Creatives</h1>
        //                 <p className="text-gray-500">Ditch the Design Dilemmas. Creating high-quality social media content shouldn't be a headache. Our user-friendly suite lets you:</p>

                          
        //                 <ul className="list-disc space-y-3 text-gray-500">
        //                     <li>Craft Captivating Posts: Design stunning visuals, write engaging captions, and tailor content for each platform.</li>
        //                     <li>
        //                     Spark Engagement: Go beyond the static with eye-catching animations and video edits that grab attention and get people talking.
        //                     </li>
        //                     <li>
        //                     Schedule Like a Pro: Plan your social media strategy in advance and schedule posts seamlessly across all your platforms.
        //                     </li>
        //                 </ul>
        //                 <p> Ready to take your social media to the next level? Explore how our suite can transform your content creation.</p>
        //                 <div className="flex space-x-2">

        //                     <button className="rounded-btn">Wordpress</button>
        //                     <button className="rounded-btn">MERN</button>
        //                     <button className="rounded-btn">Shopify</button>
        //                 </div>
        //             </div>
        //         </div>
        //     ),
        // },

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