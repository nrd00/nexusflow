import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],

      addToWishlist: (stock) => {
        const { wishlist } = get();

        const alreadyExists = wishlist.some(
          (item) => item.symbol === stock.symbol
        );

        if (alreadyExists) {
          return;
        }

        set({
          wishlist: [...wishlist, stock],
        });
      },

      removeFromWishlist: (symbol) => {
        set((state) => ({
          wishlist: state.wishlist.filter(
            (item) => item.symbol !== symbol
          ),
        }));
      },

      isInWishlist: (symbol) => {
        return get().wishlist.some(
          (item) => item.symbol === symbol
        );
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useWishlistStore;