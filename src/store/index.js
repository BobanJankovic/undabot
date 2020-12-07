// Export default storeModules
import Vue from 'vue';
import Vuex from 'vuex'
import module1 from './modules/DummyModule2'
import module2 from './modules/DummyModule1'

Vue.use(Vuex);

export const store=new Vuex.Store({
    modules:{
        module1,
        module2
    }

})


