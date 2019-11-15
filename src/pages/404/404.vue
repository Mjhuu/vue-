<template>
    <div class="error">
        <section class="error-box">
            <h1>404</h1>
            <h3 class="font-bold">页面未找到！</h3>
            <div class="error-desc">
                <p style="padding-bottom: 1rem;">花花很抱歉，页面好像走丢了~</p>
                <Button to="/home" type="warning">返回首页</Button>
            </div>
        </section>
    </div>
</template>

<script>
    import {Button} from 'view-design'
    export default {
        name: "error",
        data(){
            return{

            }
        },
        components:{
            Button,
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .error
        position: fixed
        top: 0
        left: 0
        padding 6rem 0 0 0
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        width: 100%
        height: 100%
        overflow hidden
        overflow-y auto
        .error-box
            width: 100%
            height: 100%
            padding-top: 5rem
            overflow hidden
            text-align: center
            background: #fff;
            >h1
                font-size: 17rem
                line-height: 18.7rem
            >h3.font-bold
                font-weight 600
                margin-top: .5rem
                font-size: 1.6rem
            >div.error-desc
                text-align: center
                font-size: 1.6rem
</style>
