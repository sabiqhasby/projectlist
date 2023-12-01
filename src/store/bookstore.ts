import { reactive } from "vue";

type BookStore = {
  favorite: any[];
};

export const bookstore = reactive<BookStore>({
  favorite: [],
});
