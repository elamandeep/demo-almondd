
import type { Options } from '@types'
import { create } from 'zustand'




interface IAppState {
    tab: string,
    isActive: boolean,
    toggle: () => void
    setTab: (tab: Options) => void,

}

const useAppStore = create<IAppState>()((set, get) => ({
    tab: "XYZ",
    isActive: false,
    setTab(tab) {
        set({ tab: tab })
    },
    toggle: () => set({ isActive: !get().isActive })
}))

export { useAppStore }