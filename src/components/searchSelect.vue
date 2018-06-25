<template>
        <!--  高级搜索-->
    <div class="search-mask">
        <div class="search-wrap">
	        <!--来源-->
	        <div class="search-list" id="sourceList">
	            <p class="list-title">来源</p>
	            <div class="list-more" @click="openList"><p class="list-more-up">
                    更多
                    <img src="../assets/imgs/icon2.png" width="15"/></p><p class="list-more-down">
                    收起
                    <img src="../assets/imgs/icon3.png" width="15"/></p></div>
	            <ul class="list-each clear" @click="addSourceList">
                    <li :class="{is}" v-for="(item, index) in data.sourceList" :key="index">{{item}}</li>
	            </ul>
	        </div>
	        <!--去向-->
	        <div class="search-list" id="whereaboutsList">
	            <p class="list-title">去向</p>
	            <ul class="list-each clear" @click="addWhereaboutsList">
                    <li v-for="(item, index) in data.whereaboutsList" :key="index">{{item}}</li>
	            </ul>
	        </div>
	        <!--支付方式-->
	        <div class="search-list" id="payTypeList">
	            <p class="list-title">付款方式</p>
	            <ul class="list-each clear" @click="addPayTypeListt">
                    <li v-for="(item, index) in data.payTypeList" :key="index">{{item}}</li>
	            </ul>
	        </div>
	        <!--品级-->
	        <div class="search-list" id="gradeList">
	            <p class="list-title">品级</p>
	            <ul class="list-each clear" @click="addGradeList">
                    <li v-for="(item, index) in data.gradeList" :key="index">{{item}}</li>
	            </ul>
	        </div>
	        <!--单价-->
	        <div class="search-list">
	            <p class="list-title">单价</p>
	            <div class="list-input-wrap">
	                <p class="fl mr10"><input type="number" value="" class="list-input" id="lowPrice" /></p>
	                <p class="fl mr10 mt10">—</p>
	                <p class="fl mr10"><input type="number" value="" class="list-input" id="highPrice" /></p>
	                <p class="fl mt10">元/公斤</p>
	                <div class="clearfix"></div>
	            </div>
	        </div>
	        <div class="search-btn-wrap">
	            <input type="button" value="搜索" @click="search(1)" class="search-btn-sure" />
	            <input type="button" value="重置" class="search-btn-reset" @click="resetLable()"/>
	        </div>
	    </div>
	</div>
</template>

<script>
    import { getSearchSelect } from '@/service/getData';

    export default {
        data() {
            return {
               data: []
            }
        },
        mounted: function() {
            getSearchSelect().then((data) => {
                console.dir(data);
            });
        },
        computed: {

        },
        methods: {
            addSourceList(e){
                if( e.target.nodeName == 'LI' ){

                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    /*高级搜索*/
    .search-mask{
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        top:60px;
        left:0;
        bottom: 0;
    }
    .search-wrap{
        position: absolute;
        background: #fff;
        width: 100%;
        top:0px;
        left:0;padding: 20px;
        box-sizing: border-box;
    }
    .search-list{
        position: relative;
        margin-bottom: 10px;
        height: 40px;
        overflow: hidden;
    }
    .list-title{
        position: absolute;
        top: 8px;
        left: 0;
        font-weight: bold;
    }
    .list-each,.list-input-wrap{
        width: 100%;
        padding:0 80px;
        box-sizing: border-box;
    }
    .list-each li,.list-each .all{
        float: left;
        cursor: pointer;
        padding: 8px 18px;
        border:1px solid rgba(227,227,227,0);
        margin: 0 5px 5px 5px;}
    .list-each li:hover,.list-each .all:hover{
        background: #ffda44;
    }
    .list-each li.cur,.list-each .all.cur{
        border:1px solid rgba(227,227,227,1);
        background: url(~@/assets/imgs/icon1.png) no-repeat;
        background-position:100% 0;
        background-size: 12px 12px;
    }
    /*按钮*/
    .search-btn-wrap{border-top:1px solid #e1e1e1;padding-top:20px;text-align: center;}
    .search-btn-wrap input{margin: 0 10px;}
    .search-btn-sure{font-size:16px;width: 80px;height: 35px;text-align: center;color: #FFFFFF;background: #00abe9;border-radius: 5px;cursor: pointer;border:1px solid #00abe9}
    .search-btn-reset{font-size:16px;width: 80px;height: 35px;text-align: center;background: #fff;border-radius: 5px;cursor: pointer;border:1px solid #e1e1e1}
    .search-btn-cancel{width: 80px;height: 35px;text-align: center;background: #fff;border-radius: 5px;cursor: pointer;border:1px solid #e1e1e1}
    .list-input{border:1px solid #e1e1e1;background: none;width:80px;text-align: center;height: 35px;}
    .mr10{margin-right:10px;}
    .mt10{margin-top:10px;}
    /*更多*/
    .list-more{position: absolute;right: 0;top: 8px;cursor: pointer;color: #00abe9;}
    .list-more img{margin-left: 5px;}
    .list-more-down,.list-more.cur .list-more-up{display: none;}
    .list-more.cur .list-more-down,.list-more .list-more-up{display: block;}
    .heightauto{height: auto;}
</style>