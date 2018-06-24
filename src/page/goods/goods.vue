<template>
    <div class="list" id="goods">
        <head-top headerTime="true" @getTime="getTime">
            <!-- 货单 header 导入 -->
            <div id="excelBtn" class="import-dropdown" slot="importBtn">
                <img class="list-derive" src="@/assets/imgs/icon_derive.png" alt="">
                <ul class="import-item">
                    <li>
                        <label for="import_file">导入数据</label>
                        <input type="file" id="import_file" v-on:change="isImport">
                    </li>
                    <li @click="templateDownload">模版下载</li>
                </ul>
            </div>
            <!-- 货单 header 搜索  -->
            <div class="search-btn" slot="goodsSearchBtn" @click="getSearchResult">搜索</div>
            <div class="list-search" slot="goodsSearchInput">
				<img src="@/assets/imgs/icon_search.png" alt="search">
				<span class="data-source" @click="tooggleDropDown = !tooggleDropDown">
					<span>{{searchTypeName}}</span>
					<span class="circle"></span>
				</span>
				<input id="likeParams" type="text" v-model="searchContent" placeholder="品名/批次号/装箱号"/>
				<ul class="source-type" v-show="tooggleDropDown">
					<li v-for="(item, index) in searchTypeArr" :key="index" @click="changeSearchType(index)" :style="searchTypeIndex == index ? 'color: #59B5E7;': '' ">{{item}}</li>
				</ul>
			</div>
        </head-top>
        <!-- 导入文件弹出框  -->
        <div class="commit-file" v-show="isFileType">
            <div class="c-header">
                <span>提示</span>
                <span class="close" @click="close">x</span>
            </div>
            <div class="c-content">
                <div></div>
                <div>确认导入此文件吗？</div>
                <div>
                    文件名称： <span class="file-name">{{fileName}}</span>
                </div>
            </div>
            <div class="c-bottom">
                <span class="send-sure" @click="importSure">确定</span>
                <span class="cancel" @click="close">取消</span>
            </div>
        </div>
        <!-- goods 底部按钮 -->
        <div id="list_footer" v-show="totalCount != 0">
			<div class="select-footer">
				<input type="checkbox" id="all_choose">
				<label for="all_choose" @click="chooseAll">全选</label>
			</div>
			<span>共选: </span>
			<span class="choose-data">{{totalCount}}</span>
			条
			<div class="export-footer" @click="exportFooter">立即导出</div>
			<div class="print-footer" @click="printFooter">立即打印</div>
		</div>
		<!-- 无搜索结果  -->
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
                headerTime: true, //是否显示 时间
                time: '', // 时间
                tooggleDropDown: false, // 搜索框的下拉框是否显示
                searchTypeIndex: '0', //搜索框中的 类型
                searchTypeName: '数据来源',
                searchTypeArr: ['全部', '称重', '记账', '导入', '扫描'], // 搜索类型
                searchContent: '', // 搜索框中的内容
                fileName: '', // 上传文件名称
                isFileType: false, // 上传文件弹出框 是否显示
				resultData: '', //
				totalCount: 0, //总记录数
            }
        },
        computed: {

        },
        components: {
            headTop, noData
        },
        methods: {
            /* 导入数据逻辑 */
            isImport(e) {
                console.dir(e);
                let files = e.target.files[0];
                if( files.length == 0 ) return;
                this.fileName = files.name;
                let suffixArr = files.name.split('.');
                let suffix = suffixArr[suffixArr.length - 1];
                if( suffix != 'xlsx' && suffix != 'xls' ){
                    this.$message({
                        duration: 4000,
                        type: 'error',
                        message: '仅支持上传 xlsx, xls 格式的文件。',
                        showClose: true
                    })
                    return;
                }
                this.isFileType = true;
            },
            /* 确定导入 */
            importSure() {
                this.isFileType = false;
                //TODO:
            },
            /* 关闭确定导入弹出框 */
            close() {
                this.isFileType = false;
            },
            /* 模版下载 */
            async templateDownload() {
                //TODO:
            },
            /* 获取子组件的时间 */
            getTime(time) {
                this.time = time;
            },
            /* 搜索按钮 */
            async getSearchResult() {
                //TODO:
            },
            /* 搜索下拉框 */
            changeSearchType(index) {
                this.tooggleDropDown = !this.tooggleDropDown;
                this.searchTypeIndex = index;
                this.searchTypeName = this.searchTypeArr[index];
            },
            /* 全选按钮 */
            chooseAll() {
                //TODO:
            },
            /* footer 导出 */
            exportFooter() {
                //TODO:
            },
            /* footer 打印 */
            printFooter() {
                //TODO:
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
            .el-icon-circle-close {
               // TODO:
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
            &:hover {
                color: #59B5E7;
                border: 1px solid #ccc;
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
                padding-left: 143px;
                padding-right: 16px;
                font-size: 14px;
                border: 1px solid #dcdfe6;
                &:hover {
                    border: 1px solid #ccc;
                }
            }
            .data-source {
				@include wh(92px, 27px);
                position: absolute;
                line-height:27px;
                top:5px;
                left:39px;
                border-right: 1px solid #ddd;
                cursor: pointer;
                font-size:13px;
                span:first-child {
                    display: inline-block;
                    width:52px;
                    text-align: center;
                }
                .circle {
                    border: 5px solid transparent;
                    border-top-color: #000;
                    position: relative;
                    bottom: -13px;
                    margin: 0 10px;
                }
            }
            .source-type, .import-item {
                position: absolute;
                top:36px;
                left:45px;
                width:86px;
                text-align: center;
                background: #fff;;
                border: 1px solid #ddd;
                padding:10px 0;
            }
            .import-item {
                width:80px;
                left:-25px;
                top:60px;
            }
            .import-item li, .source-type li {
                cursor:pointer;
                padding:5px 0;
                &:hover {
                    color:#59B5E7;
                }
            }
        }
        .commit-file{
			@include wh(519px, 328px);
            box-shadow: 1px 2px 6px 0 #919aaa;
            border-radius: 5px;
			@include center();
        }
        .c-header{
            height:40px;
            border-bottom: 1px solid #ddd;
        }
        .c-header span:first-child{
            float:left;
            width:60px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
        }
        .c-header span:last-child{
            float:right;
            width:40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
        }
        .c-content{
            height: 219px;
        }
        .c-content div:first-child{
            background: url('~@/assets/imgs/icon-file.png') center center no-repeat;
            height:100px;
        }
        .c-content div:nth-child(2){
            font-size: 16px;
            color:#333;
            text-align: center;
        }
        .c-content div:last-child{
            font-size: 13px;
            color:#333;
            text-align: center;
        }
        .c-content div{
            margin:10px 0;
        }
        .c-bottom{
            border-top:1px solid #ddd;
            padding: 10px 0;
            text-align: center;
        }
        .c-bottom span{
            cursor: pointer;
        }
        .c-header .close{
            cursor: pointer;
            color:#999;
            font-size: 18px;
        }
        .c-bottom span:first-child{
			@include wh(95px, 36px);
            line-height: 36px;
            color: #fff;
            background: #00ace9;
            border-radius: 7px;
            display: inline-block;
            text-align: center;
        }
        .c-bottom span:last-child{
			@include wh(87px, 34px);
            display: inline-block;
            line-height: 34px;
            background:#ffffff;
            border:1px solid #cdcdcd;
            border-radius:7px;
            color:#666666;
            text-align: center;
        }
		#list_footer{
			@include wh(100%, 40px);
			line-height: 40px;
			background: #f4f4f4;
			border-top:1px solid #ddd;
			border-bottom:1px solid #ddd;
			padding-left: 20px;
			margin-bottom:30px;
			font-size: 14px;
		}
		.export-footer, .print-footer{
			@include wh(200px, 40px);
			padding:0 20px 0 40px;
			float:right;
			line-height: 40px;
			text-align: center;
			font:13px;
			cursor:pointer;
		}
		  .export-footer{
			background: url('~@/assets/imgs/icon_derive.png') no-repeat 22% center #F9DA61;
			background-size: 24px 24px;
		}
		.print-footer{
			background: url('~@/assets/imgs/icon_print.png') no-repeat 22% center #4BAAE4;
			background-size: 24px 24px;
			color:#fff;
  		}
		.select-footer{
			float:left;
			margin:0 10px;
		}
		.select-footer input, .select-footer label{
			cursor: pointer;
		}

    }

</style>