<template>
    <div>
        <el-row :span="24">
            <el-col :span="24">
                值:{{ form }}<br />
                <bee-cascader v-model="form" :dic="dic"></bee-cascader>
                <br />
            </el-col>
            <el-col :span="24">
                仅显示最后一级值:{{ form }}<br />
                <bee-cascader
                    v-model="form"
                    :show-all-levels="false"
                    :dic="dic"
                ></bee-cascader>
                <br />
            </el-col>
            <el-col :span="24">
                多选:{{ form }}<br />
                <bee-cascader
                    v-model="form"
                    multiple
                    :dic="dic"
                ></bee-cascader>
                <br />
            </el-col>
            <el-col :span="24">
                选择任意一级选项:{{ form }}<br />
                <bee-cascader
                    v-model="form"
                    check-strictly
                    :dic="dic"
                ></bee-cascader>
                <br />
            </el-col>
            <el-col :span="24">
                懒加载值:{{ form1 }}<br />
                <bee-cascader
                    lazy
                    :lazy-load="lazyLoad"
                    :props="props"
                    v-model="form1"
                ></bee-cascader>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form:[ "zhinan", "shejiyuanze", "yizhi" ],
        form1:[ "110000", "110100", "110101" ],
        props: {
          label: 'name',
          value: 'code'
        },
        dic:[{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
          }]
        }]
      }]
    }
  },
  methods:{
    lazyLoad(node, resolve) {
      let baseUrl = 'https://cli.avuejs.com/api/area'
      let stop_level = 2;
      let level = node.level;
      let data = node.data || {}
      let code = data.code;
      let list = [];
      let callback = () => {
        resolve((list || []).map(ele => {
          return Object.assign(ele, {
            leaf: level >= stop_level
          })
        }));
      }
      if (level == 0) {
        axios.get(`${baseUrl}/getProvince`).then(res => {
          list = res.data.data;
          callback()
        })
      }
      if (level == 1) {
        axios.get(`${baseUrl}/getCity/${code}`).then(res => {
          list = res.data.data;
          callback()
        })
      } else if (level == 2) {
        axios.get(`${baseUrl}/getArea/${code}`).then(res => {
          list = res.data.data;
          callback()
        })
      }
    }
  }
}
</script>
