import { useAppStore } from "@utils/store"


const NavButton = () => {
    const { isActive, toggle } = useAppStore((state) => ({ isActive: state.isActive, toggle: state.toggle }))

    console.log(isActive)
    return (
        <>
            <button className="text-white p-2" onClick={() => toggle()}>
                {!isActive ? <i className="ph-bold ph-list text-3xl"></i> : <i className="ph ph-x text-3xl"></i>}
            </button>
        </>
    )
}

export default NavButton