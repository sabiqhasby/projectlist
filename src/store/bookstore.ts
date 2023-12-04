import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export const bookstore = ref(useStorage("myFavBooks", [] as any[]));

export const activePage = ref(useStorage("activePage", "search"));
