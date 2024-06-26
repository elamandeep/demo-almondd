
import { Tabs } from "./ui/tabs";

function TabsComponent() {
    const tabs = [
        {
            title: "Branding",
            value: "branding",
            content: (
                <div className="w-full h-auto bg-black card rounded-md gap-3 flex flex-col-reverse md:flex-row">
                    <div className="space-y-4 w-full p-3">
                        <h1 className="text-2xl font-bold text-center md:text-left">Explode Loyalty with Brand Power! </h1>
                        <p className="text-gray-500">Forget boring logos! Strong brands create 3x happier customers! Strong brands = trust, connection, results. Building one? A headache.</p>


                        <p className="text-gray-500 font-bold"> We fix that:</p>
                        <ul className="list-disc space-y-3 text-gray-500 text-sm">
                            <li> <b>
                                Voice that Rocks:
                            </b>  Messaging that grabs attention and screams you.</li>
                            <li>
                                <b>Killer Visuals:</b> Designs that wow and tell your brand story.
                            </li>
                            <li>
                                <b>Converting Assets:</b> Tools that turn clicks into fans (and sales!)
                            </li>
                        </ul>
                    </div>

                    <div className=" w-full h-full relative grid place-items-center">
                        <img src="/branding.jpeg" alt="branding" className="object-contain" />
                    </div>
                </div>
            ),
        },
        {
            title: "Website Design",
            value: "website-design",
            content: (
                <div className="w-full h-auto bg-black card rounded-md flex flex-col-reverse md:flex-row md:items-center gap-3">


                    <div className="space-y-4 w-full ">
                        <h1 className="text-2xl font-bold text-center md:text-left ">Don't Lose Sales to a Messy Website!</h1>

                        <p className="text-gray-500"> Make it easy for customers to find what they need and buy from you.</p>
                        <ul className="list-disc space-y-3 text-gray-500 text-sm">
                            <li> <b>Clear Navigation:</b> Like signs in a store, use menus and search bars for guidance. </li>
                            <li>
                                <b>Fast Loading:</b> Don't keep customers waiting; speed matters.
                            </li>
                            <li>
                                <b>Simple Checkout:</b> Make buying a breeze, not a hassle
                            </li>
                        </ul>
                    </div>

                    <div className=" w-full h-full relative grid place-items-center">
                        <img src="/web-design.png" alt="web design" className="object-contain" />
                    </div>
                </div>
            ),
        },
        {
            title: "Website Development",
            value: "website-development",
            content: (
                <div className="w-full h-auto bg-black card rounded-md gap-3 flex flex-col-reverse md:flex-row md:items-center">


                    <div className="space-y-4 w-full ">
                        <h1 className="text-2xl font-bold text-center md:text-left">Your website can be a sales machine! </h1>
                        <p className="text-gray-500">our website can be a sales machine! Most websites just look nice. But a great website can get you twice as many sales. A pretty face isn't enough.</p>

                        <p className="text-gray-500">Visitors need to understand what you offer and why they should care. We build websites that are both beautiful and smart:</p>


                        <ul className="list-disc space-y-3 text-gray-500 text-sm">
                            <li> <b>Get more leads:</b> Attract the right people who are interested in buying from you.</li>
                            <li>
                                <b>Beat the competition:</b> Stand out from the crowd and show why you're the best choice. Connect with customers: Speak directly to their needs and build trust.
                            </li>

                        </ul>

                    </div>

                    <div className=" w-full h-full relative ">
                        <img src="/web-development.png" alt="web development" className="object-contain" />
                    </div>
                </div>
            ),
        },

        {
            title: "Social Media",
            value: "social-media",
            content: (
                <div className="w-full bg-black card rounded-md h-auto flex flex-col-reverse md:flex-row md:items-center ">
                    <div className="space-y-4 w-full ">
                        <h1 className="text-2xl font-bold text-center md:text-left">The Social Media Suite for Bold Creatives</h1>
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
                        
                    </div>

                    <div className=" w-full h-full relative ">
                        <img src="/social-media-post.png" alt="social media" className="object-contain" />
                    </div>

                </div>
            ),
        },

    ];

    return (


        <div className="h-[20rem] md:h-96 [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20 space-y-10">
            <div className="flex flex-col px-6 mx-auto ">
                <h1 className="text-5xl  text-white text-center font-bold"> We're the go-to team for <br />businesses  looking to  refine their</h1>
                <p className="text-md text-gray-400">

                </p>
            </div>
            <Tabs tabs={tabs} />
        </div>

    );
}



export default TabsComponent