import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        contents: [{ name:'Jalapeno Pepper', amount: 'one pepper', condition: 'sliced', category: 'veggie' },
        { name:'Steak', amount: 'quarter pound', condition: 'grilled', category: 'meat' },
        { name:'Chicken', amount: 'one breast', condition: 'shreaded', category: 'meat' },
        { name:'Carbones', amount: 'quarter cup', condition: 'grilled', category: 'meat' },
        { name:'Onion', amount: 'quarter cup', condition: 'grilled', category: 'veggie' },
        { name:'Green Pepper', amount: 'one pepper', condition: 'grilled', category: 'veggie' },
        { name:'Cheese', amount: 'quarter cup', condition: 'grated', category: 'topping' },
        { name:'Sour Cream', amount: 'dollop', condition: 'fresh', category: 'topping' },
        { name: 'avocado', amount: 'half', condition: 'sliced', category: 'topping' },
        { name: 'gravy', amount: 'one ladle', condition: 'piping hot', category: 'topping' }],
        complitas: []
    },
    mutations: {
        addContent (state, content) {
            state.contents.push(content)
        },
        addComplita (state, complita) {
            state.complitas.push(complita)
        }
    },
    actions: {
        addContent ({commit}, content) {
            commit('addContent', content)
        },
        addComplita ({commit}, complita) {
            commit('addComplita', complita)
        },
    }
})
