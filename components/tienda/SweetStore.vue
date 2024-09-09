<template>
  <div>
    <Banner class="top" :merchant="merchant" />
    <v-container>
      <SelectCat/>
      <v-col v-for="(pro, i) in productos" :key="i">
        <v-row>
          <h1 class="ma-5">{{ pro.category }}</h1>
        </v-row>
        <Product :pro="pro.filter" />
      </v-col>
    </v-container>
  </div>
</template>

<script>
import Banner from '@/components/tienda/Banner'
import Product from '@/components/tienda/Product'
import SelectCat from '@/components/tienda/SelectCat'
export default {
  components: {
    Banner,
    Product,
    SelectCat
  },
  data() {
    return {}
  },
  computed: {
    merchant() {
      return this.$store.state.merchant
    },
    productos() {
      return this.$store.state.products.filterByCat
    }
  }
}
</script>

<style scoped>
.top {
  margin-top: -25px;
}
</style>
