const vm = new Vue({
    el: '#app',
    data: {
        visible: false
    },
    methods: {
        alertTest() {
            this.visible = !this.visible;
        }
    },
});

// Controla el color de la barra de navegación

window.onscroll = function () {
    const vertical = window.scrollY;
    const navbar = document.getElementById("navbar");

    if(vertical >= 200) {
        navbar.classList.add('bg-primary');
    }
    else {
        navbar.classList.remove('bg-primary');
    }
};