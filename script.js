const createApp = Vue.createApp;

const app = createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment() {
      this.counter += 1;
      this.color();
    },
    decrement() {
      this.counter -= 1;
      this.color();
    },
    reset() {
      this.counter = 0;
      this.color();
    },
    color() {
      if (this.counter > 0) {
        return "Positive";
      } else if (this.counter < 0) {
        return "Negitive";
      } else {
        return "Zero";
      }
    },
  },
});
app.mount("#app");
