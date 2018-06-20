import './bootstrap';
import Navigation from './components/navigation'


const vue = new Vue({
    el: "#app",
    components:{
        "navigation" : Navigation,
    }

})