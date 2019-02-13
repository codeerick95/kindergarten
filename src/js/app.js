// Component points
Vue.component('points', {
    template: `
        <span>
            <span class="circle circle-red animated fadeIn infinite delay-1s"></span>
            <span class="circle circle-green animated fadeIn infinite delay-2s"></span>
            <span class="circle circle-yellow animated fadeIn infinite delay-3s"></span>
        </span>
    `,
})

const vm = new Vue({
    el: '#app',
    data: {
        menuMobile: false,
        menuItems: [
            {
                text: 'Inicio',
                url: 'index.html',
                active: true
            },
            {
                text: 'Nosotros',
                url: 'index.html#nosotros',
                active: false
            },
            {
                text: 'Servicios',
                url: 'index.html#programas',
                active: false
            },
            {
                text: 'Galería',
                url: 'index.html#galeria',
                active: false
            },
        ],
        videoStatus: false
    },
    methods: {
        toggleMenuMobile() {
            this.menuMobile = !this.menuMobile;
        },
        changeItemActive(item) {
            this.menuItems.forEach(item => {
                item.active = false;
            });
            item.active = true;
        },
        playOrPauseVideo() {
            let video = document.getElementById('video');
            if(!this.videoStatus) {
                this.videoStatus = true;
                video.play();
                video.loop = true;
            }
            else {
                this.videoStatus = false;
                video.pause();
            }
        }
    }
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