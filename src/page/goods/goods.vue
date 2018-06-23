<template>
    <div class="list" id="goods">
        <head-top importBtn="true" @templateDownload="templateDownload">
            <el-date-picker
                class="header-time"
                slot="time"
                v-model="time"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy-MM-dd H:mm">
            </el-date-picker>
            <div class="search-btn" slot="goodsSearch">搜索</div>
        </head-top>
    </div>
</template>

<script>
    import headTop from '@/components/header';

    export default {
        data() {
            return {
                time: [new Date() - ( 3600 * 24 * 1000 ), new Date()]
            }
        },
        computed: {

        },
        components: {
            headTop
        },
        methods: {
            templateDownload() {
                alert('子组件传值')
            }
        },
    }
</script>

<style lang="scss">
    @import '../../style/mixin';
    #goods {
        .header-time {
            float: right;
            height: 36px;
            margin-top: 12px;
            border-radius: 26px;
            .el-range-separator {
                line-height: 29px;
            }
            .el-range__icon {
                line-height: 29px;
            }
        }
        .search-btn {
            @include wh(86px, 36px);
            background: #fff;
            border-radius: 18px;
            font-size: 14px;
            line-height: 35px;
            position: relative;
            margin: 12px 6px 0 6px;
            float: right;
            cursor:pointer;
            text-align: center;
            border: 1px solid #dcdfe6;
            &:hover{
                color: #59B5E7;
                border: 1px solid #ccc;
            }
        }
    }

</style>