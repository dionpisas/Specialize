import './bootstrap';
import Navigation from './components/navigation'
import Personalia from  './components/personalia'
import Project from './components/project'
import Parallax from  './components/parallax'



const vue = new Vue({
    el: "#app",
    components:{
        "navigation" : Navigation,
        "personalia" : Personalia,
        "project"    : Project,
        "parallax"     : Parallax
    }

})