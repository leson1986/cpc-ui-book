<template>
    <div>
        <el-row :span="24">
            <el-col :span="24">
                值:{{ form }}<br />
                <bee-select
                    v-model="form"
                    placeholder="请选择内容"
                    type="tree"
                    :dic="dic"
                ></bee-select>
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="24">
                值:{{ form1 }}<br />
                <bee-select
                    multiple
                    v-model="form1"
                    placeholder="请选择内容"
                    type="tree"
                    :dic="dic"
                ></bee-select>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: "",
            form1: [0, 1],
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
