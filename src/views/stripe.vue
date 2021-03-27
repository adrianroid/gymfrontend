<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="subscription"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <!-- <button @click="submit">Subscribe!</button> -->
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  name: 'stripe',
  components: {
    StripeCheckout,
  },
  mounted(){
      this.$refs.checkoutRef.redirectToCheckout();
  },
  data () {
    this.publishableKey = 'pk_test_51IZ0xrF5TwdgwJJV5xM27HQ3FAEdMR77xAcOVLdt0WnUEXuc1kUbCmzVNPaUbe1geaT5coLfWMfkZKEiD800pMY800i9rhQh1n';
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1IZ8UwF5TwdgwJJVVbgv0WAa', // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://polosgym.com',
      cancelURL: 'https://polosgym.com',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>