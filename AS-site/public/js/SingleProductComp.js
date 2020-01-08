Vue.component('single-product', {
    data() {
        return {
            productItem: []
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products/1`)
            .then(data => {
                this.productItem.push(data);
            });
        console.log(productItem)
    }
});