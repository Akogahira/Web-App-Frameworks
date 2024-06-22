import { reactive } from 'vue';

const state = reactive({
  isDarkTheme: false
});

function toggleTheme() {
  state.isDarkTheme = !state.isDarkTheme;
  if (state.isDarkTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

export default {
  state,
  toggleTheme
};
