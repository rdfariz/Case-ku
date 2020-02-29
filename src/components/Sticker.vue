<template>
    <div>
        <v-container grid-list-xs class="my-3">
            <h2></h2>
            <v-layout row wrap>
                <v-flex xs12 lg12>
                    <v-card class="card-product card-article mx-3 my-3 px-4 py-5">

                        <v-toolbar light color="#ffffff" flat dense>
                            <v-btn icon to="/">
                                <v-icon>arrow_back</v-icon>
                            </v-btn>

                            <v-toolbar-title>Kembali</v-toolbar-title>
                        </v-toolbar>

                        <!-- <v-img class="mt-4" height="120" :lazy-src="this.$store.state.images.logo_manisan"  :src="this.$store.state.images.logo_manisan" contain></v-img>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>

                        <v-card-text class="my-3">
                            <p class="paragraf-card" style="text-indent: 0px; text-align: left">
                                Manisan Mangga Indramayu ini adalah Oleh-Oleh Khas Cirebon yang tidak akan pernah habis kalau dikupas tuntas sejarahnya. sudah tau kan mangga indramayu?? 
                                Nah sekarang bayangkan rasanya jika disajikan dalam kemasan berbentuk manisan berbahan alami tanpa bahan pengawet.<br>
                            </p><br>
                            <p class="paragraf-card" style="text-indent: 0px; text-align: left">
                                Manisan Mangga Indramayu ini terbuat dari mangga indramayu 100% dan Gula. Untuk exp. Hingga 1thn. 
                                Manisan ini cocok untuk diberikan ke orang terkasih sebagai oleh-oleh.
                            </p>
                        </v-card-text> -->

                        <v-divider class="mx-1 mb-3"></v-divider>

                        <v-card-actions style="flex-direction: column; text-align: center">
                            <p class="title-header">Harga: </p>
                            <p class="title-header red--text"><b>Rp. 5000 / 1 Sticker</b></p>
                                <v-flex xs12>
                                    <!-- <v-btn class="white--text ma-0 my-2" color="#eb1c5a" large style="border-radius: 0.40rem">
                                        Tersedia di Shopee
                                    </v-btn> -->
                                    <v-btn class="white--text ma-0 my-2" color="#eb1c5a" large style="border-radius: 0.40rem" @click="toBottom">
                                        Info Pemesanan
                                    </v-btn>
                                    <v-btn class="white--text ma-0 my-2" color="#d6951b" large style="border-radius: 0.40rem" @click="lihat_produk = !lihat_produk">
                                        Lihat Contoh Produk
                                    </v-btn>
                                </v-flex>
                        </v-card-actions>

                        <v-divider class="mx-1 mt-3 mb-3"></v-divider>

                        <v-slide-y-transition>
                            <v-layout row wrap v-show="lihat_produk" justify-center>
                                <v-flex xs12 md6 lg4 wrap>
                                    <v-card flat class="px-3 py-1 ma-1">
                                        <v-img class="mt-4 mx-auto img-product" :lazy-src="this.$store.state.images.sticker_1" :src="this.$store.state.images.sticker_1" contain style="width: 100%">
                                            <template v-slot:placeholder>
                                                <v-layout fill-height align-center justify-center ma-0>
                                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                                </v-layout>
                                            </template>
                                        </v-img>
                                        <v-card-actions style="flex-direction: column; text-align: center">
                                            <v-flex xs12 wrap>
                                                <v-btn class="white--text my-2" color="#eb1c5a" style="border-radius: 0.40rem">
                                                    * Contoh Sticker
                                                </v-btn>
                                            </v-flex>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-slide-y-transition>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        lihat_produk: false,
    }),
    methods: {
        // scrollTo: function(to, duration) {
        //     const
        //     element = document.scrollingElement || document.documentElement,
        //     start = element.scrollTop,
        //     change = to - start,
        //     startDate = +new Date(),
        //     // t = current time
        //     // b = start value
        //     // c = change in value
        //     // d = duration
        //     easeInOutQuad = function(t, b, c, d) {
        //         t /= d/2;
        //         if (t < 1) return c/2*t*t + b;
        //         t--;
        //         return -c/2 * (t*(t-2) - 1) + b;
        //     },
        //     animateScroll = function() {
        //         const currentDate = +new Date();
        //         const currentTime = currentDate - startDate;
        //         element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        //         if(currentTime < duration) {
        //             requestAnimationFrame(animateScroll);
        //         }
        //         else {
        //             element.scrollTop = to;
        //         }
        //     };
        //     animateScroll();
        // },
        toBottom: function() {
            // this.scrollTo(document.body.scrollHeight, 1000);   
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
}
</script>
