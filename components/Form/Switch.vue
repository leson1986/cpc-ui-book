<template>
    <div>
        <el-row :span="24">
            <el-col :span="24">
                值:{{ form }}<br />
                <bee-switch v-model="form" :dic="dic"></bee-switch>
                <br />
                <br />
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="24">
                颜色值:{{ form }}<br />
                <bee-switch
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    v-model="form"
                    :dic="dic"
                ></bee-switch>
                <br />
                <br />
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="24">
                图标值:{{ form }}<br />
                <bee-switch
                    active-icon-class="el-icon-s-tools
"
                    inactive-icon-class="el-icon-setting"
                    v-model="form"
                    :dic="dic"
                ></bee-switch>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: 1,
            dic: [
                {
                    label: "选项1",
                    value: 0,
                },
                {
                    label: "选项2",
                    value: 1,
                },
            ],
        };
    },
};
</script>
