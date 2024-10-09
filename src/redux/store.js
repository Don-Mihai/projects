import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import user from './user';
import hotel from './hotel';
import restaurant from './restaurant';

export const store = configureStore({
  reducer: {
    // counter: counter,
    counter, //если повторяющихся слова, можно оставить только одно в обьектах, где есть ключ и значение
    user,
    hotel,
    restaurant,
  },
});
// в const store хранится все хранилище, оно пригодится чуть позже в проекте
