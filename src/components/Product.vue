<template>
    <div>
        <v-container grid-list-xs class="my-3">
            <v-layout row wrap>
                <v-flex xs12 lg6>
                    <v-card class="card-product mx-3 my-3 px-4 py-5">

                         <v-img width="100%" height="300" :lazy-src="this.$store.state.images.case_1"  :src="this.$store.state.images.case_1"></v-img>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>

                        <v-card-text>
                            <p class="title-header">Case HP </p>
                            <p class="mt-3 paragraf-card" style="text-align: left !important">Hias smartphone favoritmu dengan casing favoritmu, tersedia custom gambar yang kamu suka loh...</p>
                        </v-card-text>

                        <v-divider class="mx-1 mb-3"></v-divider>

                        <v-card-actions>
                            <v-btn to="/case" class="mx-auto white--text" color="#eb1c5a" large style="border-radius: 0.40rem">
                                Baca Selengkapnya
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>

                <v-divider class="hidden-sm-and-up mx-1 my-1"></v-divider>
                
                <v-flex xs12 lg6>
                    <v-card
                        class="card-product mx-3 my-3 px-4 py-5"
                    >

                        <v-img width="100%" height="300" :lazy-src="this.$store.state.images.sticker_1"  :src="this.$store.state.images.sticker_1"></v-img>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>

                        <v-card-text>
                            <p class="title-header">Sticker Custom</p>
                            <p class="mt-3 paragraf-card" style="text-align: left !important">Case-ku menyediakan sticker juga loh, tempelkan stickernya & rasakan sensasinya...</p>
                        </v-card-text>

                        <v-divider class="mx-1 mb-3"></v-divider>

                        <v-card-actions>
                            <v-btn to="/sticker" class="mx-auto white--text" color="#eb1c5a" large style="border-radius: 0.40rem">
                                Baca Selengkapnya
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
    })
}
</script>