import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: "#1b529a",
            },
            light: {
                primary: "#1b529a"
            }
        },
        dark: false,
    }
});
