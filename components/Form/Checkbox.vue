<template>
    <div>
        <el-row :span="24">
            <el-col :span="6">
                值:{{ form }}<br /><br />
                <bee-checkbox
                    v-model="form"
                    placeholder="请选择内容"
                    :dic="dic"
                ></bee-checkbox>
                <br /><br />
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="6">
                值:{{ form1 }}<br /><br />
                <bee-checkbox
                    all
                    v-model="form1"
                    placeholder="请选择内容"
                    :dic="dic"
                ></bee-checkbox>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: [0, 1],
            form1: [],
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
