<template>
    <a class="newloan-box" href="http://www.baidu.com">
        <card :header="{title:'新标预告123'}">
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="">
                    <span class="text">10.11%</span><br/>预期年化收益
                </div>
                <div class="">
                    <span class="text">5.40万元</span><br/>借款金额
                </div>
                <div class="">
                    <span class="text">15个月</span><br/>借款期限
                </div>
            </div>
            <div slot="content" class="card-demo-flex card-demo-content01 vux-1px-t">
                <div class="">
                    <i class="iconfont">&#xe609;</i>
                    <span>开始时间：</span>
                    <span>2017-07-05</span>
                </div>
                <div class="">
                    <i class="iconfont">&#xe621;</i>
                    <span>还款方式：</span>
                    <span>按月付息</span>
                </div>
            </div>
        </card>
    </a>
</template>
<script>
    import {
        Divider,
        Card
    } from 'vux'
    export default {
        components: {
            Divider,
            Card
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>
<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    .card-demo-flex {
        display: flex;
    }
    
    .card-demo-content01 {
        padding: 10px 0;
    }
    
    .card-padding {
        padding: 15px;
    }
    
    .card-demo-flex>div {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #999;
    }
    
    .card-demo-flex .text {
        font-size: 16px;
        color: #333;
    }
    
    .newloan-box {
        display: block;
        padding-top: 20px;
    }
</style>