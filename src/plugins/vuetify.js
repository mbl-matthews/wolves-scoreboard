import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: "#1b529a",
                secondary: "#5b8ab5",
            },
            light: {
                primary: "#1b529a",
                secondary: "#5b8ab5",
            }
        },
        dark: false,
    }
});
