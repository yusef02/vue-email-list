const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Vue Email List",
      mailList: [],
    };
  },
  computed: {},
  methods: {
    // generaMail() {
    //   axios
    //     .get("https://flynn.boolean.careers/exercises/api/random/mail")
    //     .then((res) => res.data.response);
    // },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => this.mailList.push(res.data.response));
    }
  },
}).mount("#app");
