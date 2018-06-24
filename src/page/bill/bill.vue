<template>
    <div id="bill">
        <head-top headerTime="true" @getTime="getTime">
			<div class="list-search" slot="goodsSearchInput">
                <img alt="search" src="@/assets/imgs/icon_search.png">
                <input id="likeParams" type="text" placeholder="品名/批次号/装箱号" @click="filterList = !filterList">
			</div>
        </head-top>
    <no-data :totalCount="totalCount">

    </no-data>
    </div>
</template>

<script>
    import headTop from '@/components/header';
    import noData from '@/components/noData';
    import { mapState, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                //headerTime: true, // 显示 时间
				totalCount: 0, // 总记录数
				filterList: false,
            }
        },
        components: {
            headTop, noData
        },
        computed: {

        },
        methods: {
            getTime() {

			}
        }
    }
</script>

<style lang="scss">
	@import '../../style/mixin';
    #bill{
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
            .el-icon-circle-close {
               // TODO:
            }
        }
		.list-search {
			@include wh(325px, 36px);
            position: relative;
            margin-top: 12px;
            margin-right: 6px;
            float: right;
            img {
				@include wh(17px, 17px);
                position: absolute;
                left: 16px;
                top: 10px;
            }
            input {
				@include wh(100%, 100%);
                border-radius: 18px;
                background: #fff;
                padding-left: 46px;
                padding-right: 16px;
                font-size: 14px;
                border: 1px solid #dcdfe6;
                &:hover {
                    border: 1px solid #ccc;
                }
            }
		}
	}
</style>