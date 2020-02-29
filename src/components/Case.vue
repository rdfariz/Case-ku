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

                        <!-- <v-img class="mt-4" width="40%" :lazy-src="this.$store.state.images.case_1"  :src="this.$store.state.images.case_1" contain></v-img>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>

                        <v-card-text class="my-3">
                            <p class="paragraf-card" style="text-indent: 0px; text-align: left">
                                Buah Mangga adalah salah satu komoditi kekayaan alam daerah Indramayu - Jawa Barat yang sangat terkenal.
                                Salah satu olahan buah mangga dari indramayu yang sangat terkenal adalah <b>DODOL MANGGA</b>.
                                Makanan ini sangat KHAS & merupakan IKON Indramayu sebagai: kota Mangga di Indonesia
                            </p>
                            
                        </v-card-text>

                        <v-divider class="mx-1 mb-3"></v-divider> -->

                        <v-card-actions style="flex-direction: column; text-align: center">
                            <p class="title-header">Tersedia 3 Variant Case: </p>
                            <p class="title-header red--text"><b>Rp. 15.000, *Gambar 1</b></p>
                            <p class="title-header red--text"><b>Rp. 20.000, *Gambar 2</b></p>
                            <p class="title-header red--text"><b>Rp. 15.000, *Gambar 3</b></p>
                                <v-flex xs12 class="mt-4">
                                    <!-- <v-btn class="white--text my-2" color="#eb1c5a" large style="border-radius: 0.40rem">
                                        Tersedia di Shopee
                                    </v-btn> -->
                                    <v-btn class="white--text ma-0 my-2" color="#eb1c5a" large style="border-radius: 0.40rem" @click="toBottom">
                                        Info Pemesanan
                                    </v-btn>
                                    <v-btn class="white--text my-2" color="#d6951b" large style="border-radius: 0.40rem" @click="lihat_produk = !lihat_produk">
                                        Lihat Contoh Produk
                                    </v-btn>
                                </v-flex>
                        </v-card-actions>

                        <v-divider class="mx-1 mt-3 mb-3"></v-divider>

                        <v-slide-y-transition>
                            <v-layout row wrap v-show="lihat_produk" justify-center>
                                <v-flex xs12 md6 lg4 wrap>
                                    <v-card flat class="px-3 py-1 ma-1">
                                        <v-img class="mt-4 mx-auto img-product" :lazy-src="this.$store.state.images.case_1" :src="this.$store.state.images.case_1" contain style="width: 100%">
                                            <template v-slot:placeholder>
                                                <v-layout fill-height align-center justify-center ma-0>
                                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                                </v-layout>
                                            </template>
                                        </v-img>
                                        <v-card-actions style="flex-direction: column; text-align: center">
                                            <v-flex xs12 wrap>
                                                <v-btn class="white--text my-2" color="#eb1c5a" style="border-radius: 0.40rem">
                                                    * Gambar 1
                                                </v-btn>
                                            </v-flex>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md6 lg4 wrap>
                                    <v-card flat class="px-3 py-1 ma-1">
                                        <v-img class="mt-4 mx-auto img-product" :lazy-src="this.$store.state.images.case_2" :src="this.$store.state.images.case_2" contain style="width: 100%">
                                            <template v-slot:placeholder>
                                                <v-layout fill-height align-center justify-center ma-0>
                                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                                </v-layout>
                                            </template>
                                        </v-img>
                                        <v-card-actions style="flex-direction: column; text-align: center">
                                            <v-flex xs12 wrap>
                                                <v-btn class="white--text my-2" color="#eb1c5a" style="border-radius: 0.40rem">
                                                    * Gambar 2
                                                </v-btn>
                                            </v-flex>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md6 lg4 wrap>
                                    <v-card flat class="px-3 py-1 ma-1">
                                        <v-img class="mt-4 mx-auto img-product" :lazy-src="this.$store.state.images.case_3" :src="this.$store.state.images.case_3" contain style="width: 100%">
                                            <template v-slot:placeholder>
                                                <v-layout fill-height align-center justify-center ma-0>
                                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                                </v-layout>
                                            </template>
                                        </v-img>
                                        <v-card-actions style="flex-direction: column; text-align: center">
                                            <v-flex xs12 wrap>
                                                <v-btn class="white--text my-2" color="#eb1c5a" style="border-radius: 0.40rem">
                                                    * Gambar 3
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
            // this.scrollTo(document.body.scrollHeight, 0);   
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
}
</script>
