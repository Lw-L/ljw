<template>
    <div class="myBox">
        <div class="header">
            <img src="../../assets/1.jpg" alt="">
            <div class="messagebox">
                <h3>chenmanjie</h3>
                <div class="mess">
                    <p>年龄:18</p><p>活跃度<span>32</span></p>
                </div>
            </div>
        </div>
        <div class="main">
            <ul class="ul">
                <li>
                    <span>
                        <img src="../../assets/3.jpg" alt="">
                        个人信息
                    </span>
                    <span class="span"><i class="iconfont icon-angle-right"></i></span>
                </li>
                 <li>
                    <span>
                        <img src="../../assets/4.jpg" alt="">
                        我的评论
                    </span>
                    <span class="span"><i class="iconfont icon-angle-right"></i></span>
                </li>
                 <li>
                    <span>
                        <img src="../../assets/2.jpg" alt="">
                        个人收藏
                    </span>
                    <span class="span"><i class="iconfont icon-angle-right"></i></span>
                </li>
            </ul>
             <ul class="ul">
                <li>
                    <span>
                        <img src="../../assets/5.jpg" alt="">
                        修改密码
                    </span>
                    <span class="span"></span>
                </li>
                 <li>
                    <span>
                        <img src="../../assets/6.jpg" alt="">
                        退出
                    </span>
                    <span class="span"></span>
                </li>
                 <li>
                    <span>
                        <img src="../../assets/7.jpg" alt="">
                        注销用户
                    </span>
                    <span class="span"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.myBox{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    .header{
        height: 2.4rem;
        background: #f76968;
        display: flex;
        align-items: center;
        img{
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            margin-left: .4rem;
            margin-right: .6rem;
        }
        .messagebox{
            width: 3.2rem;
            height: 1.1rem;
            font-size: .32rem;
            color: aliceblue;
            h3{
                font-size: .4rem;
            }
            .mess{
                height: 0.7rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                span{
                    font-size: .4rem;
                }
            }
        }
    }
    .main{
        flex: 1;
        .ul{
            height: 2.8rem;
            background: #fff;
            margin-top: .5rem;
            font-size: .32rem;
            display: flex;
            flex-direction: column;
            li{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #4e514e;
                // border: 1px solid #eee;
                span{
                    display: flex;
                    margin-right: .3rem;
                    align-items: center;
                    img{
                        margin-left: .1rem;
                        margin-right: .1rem;
                    }
                }
                .span{
                    color: #999292;
                    i{
                         font-size: .45rem;
                    }
                   
                }
            }
        }
    }
}
</style>