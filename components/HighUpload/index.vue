<template>
    <div>
        <h3>上传</h3>
        <bee-high-upload></bee-high-upload>
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
