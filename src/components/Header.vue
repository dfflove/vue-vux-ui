<template>
    <div>
        <x-header>
            <span>首页</span>
            <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
    </div>
</template>
<script>
    import {
        XHeader,
        Actionsheet,
        TransferDom
    } from 'vux'
    export default {
        directives: {
            TransferDom
        },
        components: {
            XHeader,
            Actionsheet
        },
        data() {
            return {

            }
        }
    }
</script>
<style lang="less">

</style>