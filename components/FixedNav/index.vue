<template>
    <div>
        <h3>固定导航</h3>
        <h6>说明：可置顶，可置底，结合项目公共组件d2-container使用</h6>
            <bee-fixed-nav :button-list="buttonList"></bee-fixed-nav>
            <bee-fixed-nav align="left" :button-list="buttonList"></bee-fixed-nav>
            <bee-fixed-nav align="right" :button-list="buttonList"></bee-fixed-nav>
    </div>
</template>

<script>
import { Notification } from "element-ui";
export default {
    data() {
        return {
            
        };
    },
    computed: {
        buttonList() {
            return [
                {
                    label: "按钮1",
                },
                {
                    label: "按钮2",
                    icon: "",
                    type: "success",
                    size: "small",
                    disabled: "disabled",
                    fun: (i) => {
                        this.buttonClick(i)

                    },
                },
                {
                    label: "",
                    icon: "el-icon-message",
                    type: "danger",
                    size: "mini",
                    fun: (i) => {
                        this.buttonClick(i)

                    },
                },
            ];
        },
    },
    methods: {
        buttonClick(index) {
            Notification({
                showClose: true,
                message: "索引" + JSON.stringify(index),
                type: "success",
            });
        }
    }
};
</script>
