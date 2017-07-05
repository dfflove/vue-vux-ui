<template>
    <div>
        <Headers></Headers>
        <Banner></Banner>
        <NewLoan></NewLoan>
    </div>
</template>
<script>
    import Banner from '../components/Banner'
    import Headers from '../components/Header'
    import NewLoan from '../components/NewLoan'
    export default {
        components: {
            Banner,
            Headers,
            NewLoan
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>
<style lang="less">

</style>