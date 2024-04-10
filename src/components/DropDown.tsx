import { useAppStore } from "@utils/store"


const Dropdown = () => {
    const isActive = useAppStore((state) => state.isActive)
    return (
        <>
            {
                isActive ? (
                    <>
                        <ul className="p-2  z-30 fixed right-5 top-10 w-52 space-y-2 backdrop-blur-md border border-gray-600">
                            <li className="p-2 cursor-pointer hover:bg-white/40"><a>Item 1</a></li>
                            <li className="p-2 cursor-pointer hover:bg-white/40"><a>Item 2</a></li>
                        </ul>
                    </>
                ) : (<></>)
            }

        </>
    )
}

export default Dropdown