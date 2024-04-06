
import type { Options } from '@types'
import { create } from 'zustand'




interface IAppState {
    tab: string,
    setTab: (tab: Options) => void
}

const useAppStore = create<IAppState>()((set) => ({
    tab: "XYZ",
    setTab(tab) {
        set({ tab: tab })
    },
}))

export { useAppStore }