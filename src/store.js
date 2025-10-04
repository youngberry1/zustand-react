import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCounterStore = create(
    persist(
        (set) => ({
            count: 0,
            loading: false,
            theme: 'dark', // default theme
            toggleTheme: () =>
                set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
            increase: () => set((state) => ({ count: state.count + 1 })),
            decrease: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
            fetchInitialCount: async () => {
                set({ loading: true });
                try {
                    const res = await new Promise((resolve) =>
                        setTimeout(() => resolve({ initialCount: 42 }), 1000)
                    );
                    set({ count: res.initialCount, loading: false });
                } catch (err) {
                    console.error(err);
                    set({ loading: false });
                }
            },
        }),
        {
            name: "counter-storage",
        }
    )
);