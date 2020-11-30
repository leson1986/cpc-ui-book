<template>
  <div class="flow-line-box">
    <h3>流程树</h3>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :color="FlowColor[activity.status]"
      >
        
        <template>
            <div>
                <div class="flow-line-box__con">
                    <div class="flow-line-box__con__label" :style="{'color': FlowColor[activity.status]}">
                        <span :style="{'color': FlowColor[activity.status]}">
                            {{activity.statusText || '未开始'}}
                            <i v-if="activity.tenantName">→{{activity.tenantDepartmentName}} : {{activity.tenantName}}</i>
                        </span>
                        <span class="flow-line-box__con__comment">
                            {{activity.comment}}
                        </span>
                    </div>
                    <div class="flow-line-box__con__info">
                        <span>{{activity.name}} : {{activity.assigneeName}}</span>
                        <span>{{activity.endTime}}</span>
                    </div>
                </div>
                <div style="margin-top: 16px" class="flow-small-box">
                        <el-timeline>
                            <el-timeline-item
                                v-for="(activity, index) in activity.subTask"
                                :key="index"
                                :color="FlowColor[activity.status]"
                            >
                                
                                <template>
                                    <div class="flow-line-box__con">
                                        <div class="flow-line-box__con__label" style="width: 160px">
                                            <span>
                                                <i :style="{'color': FlowColor[activity.status]}">{{activity.statusText}}</i>→{{activity.tenantName}}
                                            </span>
                                            <span class="flow-line-box__con__comment">
                                                {{activity.comment}}
                                            </span>
                                        </div>
                                        <div class="flow-line-box__con__info">
                                            <span>{{activity.assigneeName}}</span>
                                            <span>{{activity.endTime}}</span>
                                        </div>
                                    </div>
                                </template>
                            </el-timeline-item>
                        </el-timeline>
                </div>
            </div>
        </template>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
// import { Timeline, TimelineItem } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

export default {
    name: 'FlowLine',
    // components: {Timeline, TimelineItem},
    data() {
        return {
            hasChild: true,
            activities: [
                {
                    status: 'APPROVAL',
                    statusText: '待审批',
                    tenantDepartmentName: '部门名称',
                    tenantName: '',
                    comment: '详情请查',
                    name: '主管',
                    assigneeName: '马云',
                    endTime: '2020-10-10',
                },
                {
                    status: 'PASSED',
                    statusText: '通过',
                    tenantDepartmentName: '人力资源部',
                    tenantName: '',
                    comment: '通过通过通过',
                    name: '主管',
                    assigneeName: '马云',
                    endTime: '2020-10-10',

                    subTask: [
                        {
                            status: 'COMMUNICATION',
                            statusText: '沟通',
                            tenantDepartmentName: '人力资源部',
                            tenantName: '李连杰',
                            comment: '沟通沟通沟通',
                            name: '主管',
                            assigneeName: '马云',
                            endTime: '2020-10-10',
                        }
                    ]
                }
            ],
        }
    },
    computed: {
        FlowColor() {
            return {
                'SUBMITTED': '#1890FF',
                'APPROVAL': '#FAAD14',
                'COMMUNICATION': '#29AFB8',
                'REPLY': '#1890FF',
                'WAIT_REPLY': '#FAAD14',
                'CANCEL_COMMUNICATION': '#F5222D',
                'TODO': '#8C8C8C',
                'WITHDRAW': '#F5222D',
                //   '重新提交': '#1890FF',
                'PASSED': '#52C41A',
                'TURN_TO_DO': '#1890FF',
                'INVALID': '#F5222D',
                'ABANDONED': '#F5222D'
            }
        }
    },
};
</script>
<style>
.flow-line-box {
    margin: 10px;
}
.flow-line-box__con {
    border-bottom: 1px dashed #E8E8E8;
    min-height: 40px;
    line-height: 20px;
}
.flow-line-box__con__label {
    width: 200px;
    font-size: 14px;
    float: left;
}
.flow-line-box__con__label span {
    display: block;
    text-align: left;
    font-size: 14px;
    color: #595959;
}
.flow-line-box__con__label span i {
    font-style: normal;
}
.flow-line-box__con__label span i:last-child {
    font-size: 12px;
    color: #595959;
    padding-top: 3px;
}


.flow-line-box__con__info {
    width: 140px;
    float: right;
}
.flow-line-box__con__info span {
    display: block;
    text-align: right;
    font-size: 14px;
    color: #595959;
}
.flow-line-box__con__info span:last-child {
    font-size: 12px;
    color: #8C8C8C;
    padding-top: 3px;
}


.flow-line-box__con__comment {
    width: 200px;
    overflow: auto;
    display: block;
    padding-bottom: 10px;
}
.flow-line-box__con__comment::after {
    content: '';
    display: block;
    clear: both;
}

.flow-line-box::v-deep .el-timeline{
    padding: 0;
}
.flow-line-box::v-deep .el-timeline-item__node--normal{
    width: 8px;
    height: 8px;
}
.flow-line-box::v-deep .el-timeline-item__tail{
    left: 3px;
}
.flow-line-box::v-deep .el-timeline-item__wrapper{
    padding-left: 18px;
}
</style>
