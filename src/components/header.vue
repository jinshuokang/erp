<template>
    <header class="clearfix">
		<router-link :to="{ name: 'home' }">
			<img class="table-sign" src="../imgs/table_sign.png" alt="sign"/>
		</router-link>
        <div class="header-title">
            <div class="title-name">
                <img src="../imgs/icon_title.png" alt=""/>
            </div>
            <div class="title-text">
                <img src="../imgs/icon_text.png" alt=""/>
            </div>
        </div>
		<router-link :to="{ name: 'login' }">
			<img id="logOutBtn" class="list-derive" @click="loginOut" src="../imgs/logout.png" alt="">
		</router-link>
		<div id="excelBtn" class="import-dropdown" v-show="importBtn">
			<img class="list-derive" src="../imgs/icon_derive.png" alt="">
			<ul class="import-item">
				<li data-value="0">
					<label for="import_file">导入数据</label>
					<input type="file" id="import_file">
				</li>
				<li data-value="1" @click="templateDownload">模版下载</li>
			</ul>
		</div>
		<!-- 不同页面不同头部按钮  -->
		<slot name="goodsSearch"></slot>
		<slot name="time"></slot>
		<slot name="search"></slot>
    </header>
</template>

<script>
	import { mapMutations } from 'vuex'
    export default {
		props: ['importBtn'],
        data() {
            return {
				//printBtn: false
            }
        },
        computed: {

        },
        methods: {
			...mapMutations([
				'RECORD_LOGINOUT'
			]),
			templateDownload() {
				this.$emit('templateDownload');
			},
			loginOut() {
				this.RECORD_LOGINOUT();
			}
        }
    }
</script>

<style lang="scss" scoped>
	@import '../style/mixin';

    header{
        @include wh(100%, 60px);
        background: #ffda44;
		padding-left: 13px;
		padding-right: 26px
    }
    .table-sign{
        @include wh(44px, 44px);
        margin-top: 8px;
		margin-right: 11px;
		float: left;
		cursor: pointer;
    }
    .header-title{
        margin-top: 10px;
        float: left;
        .title-name{
            @include wh(57px, 20px);
            img{
                @include wh(100%, 100%);
            }
        }
        .title-text{
            @include wh(107px, 11px);
            margin-top: 5px;
            img{
                @include wh(100%, 100%);
            }
        }
    }
    .list-derive{
		@include wh(24px, 24px);
        margin-left: 10px;
        margin-top: 18px;
		float: right;
		cursor: pointer;
	}
	div.import-dropdown{
		position: relative;
		margin-top:0;
		@include wh(24px, 60px);
		margin-left: 10px;
		float: right;
		&:hover .import-item{
			display: inline-block;
		}
	}
	.import-item {
		position: absolute;
		text-align: center;
		background: #fff;;
		border: 1px solid #ddd;
		padding:10px 0;
		width:80px;
		left:-25px;
		top:60px;
		display:none;
		font-size: 14px;
		label {
			cursor: pointer;
		}
		li {
			cursor:pointer;
			 padding:5px 0;
			 &:hover{
				 color:#59B5E7;
			 }
		}
	}
	#import_file {
		@include wh(1px, 1px);
		position: fixed;
		bottom:0;
	}

</style>