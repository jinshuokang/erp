<template>
    <div id="bill">
        <head-top isHome="true" isHeaderTime="true" @getTime="getTime">
			<div class="list-search" slot="goodsSearchInput">
                <img alt="search" src="@/assets/imgs/icon_search.png">
                <input id="likeParams" type="text" placeholder="品名/批次号/装箱号" @click="filterList = !filterList">
			</div>
        </head-top>
        <no-data :totalCount="totalCount">

        </no-data>
        <search-select :filterList="filterList"></search-select>
    </div>
</template>

<script>
    import headTop from '@/components/header';
    import noData from '@/components/noData';
    import searchSelect from '@/components/searchSelect'
    import { mapState, mapMutations } from 'vuex';

    export default {
        data() {
            return {
				totalCount: 0, // 总记录数
				filterList: true,
            }
        },
        components: {
            headTop, noData, searchSelect
        },
        computed: {

        },
        methods: {
            getTime() {
                // TODO: 请求数据
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