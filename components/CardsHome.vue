<template>
  <v-card class="mx-auto text-left tercero" max-width="300" height="340">
    <v-img :src="promo.img" height="200px">
      <!-- <v-img class="mx-auto" width="200" :src="promo.icono"></v-img> -->
    </v-img>

    <v-card-title>
      {{ promo.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ promo.description }}
    </v-card-subtitle>

    <!-- <v-card-actions>
      <v-btn
        color="pink lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions> -->

    <!-- <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
</template>

<script>
export default {
  props: {
    promo: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    show: false,
  }),
}
</script>
