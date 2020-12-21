<template>
  <div class="flow-line-box">
    <h3>GQ</h3>
    <bee-flow-info :flow-data="activityData" skin="gq" :flow-props="flowLineProps" :flow-color="flowColor"></bee-flow-info>
    <h3>FL</h3>
    <bee-flow-info :flow-data="activityData" skin="fl" :flow-props="flowLineProps" :flow-color="flowColor"></bee-flow-info>
  </div>
</template>

<docs>

## Vue docs blocks 

商业组件集

<!-- PROPS -->

</docs>
<script>

export default {
    name: 'FlowLine',
    data() {
        return {
                activityData: [
                    {
                        status: 'APPROVAL',
                        statusText: '待审批',
                        tenantDepartmentName: '部门名称',
                        tenantName: '',
                        comment: '详情详情请查详情请查',
                        name: '主管',
                        assigneeName: '马云',
                        endTime: '2020-10-10',
                        statusFlag: '启动',
                        flowId: '9900088773',
                        flowTxt: '转正流程',
                        subFlowTxt: '自评',
                        startTime: '2010-10-08'
                    },
                    {
                        status: 'TURN_TO_DO',
                        statusText: '通过',
                        tenantDepartmentName: '人力资源部',
                        tenantName: '李响1',
                        comment: '',
                        name: '主管主管主管主管主管主管',
                        assigneeName: '马云',
                        endTime: '2020-10-10',
                        statusFlag: '转办',
                    },
                    {
                        status: 'PASSED',
                        statusText: '通过',
                        tenantDepartmentName: '人力资源部',
                        tenantName: '李响',
                        comment: '',
                        name: '主管主管主管主管主管主管',
                        assigneeName: '马云',
                        endTime: '2020-10-10',
                        statusFlag: '沟通',

                        subTask: [
                            {
                                status: 'COMMUNICATION',
                                statusText: '沟通',
                                tenantDepartmentName: '人力资源部',
                                tenantName: '李连杰',
                                comment: '沟通沟通沟通沟通沟通沟通沟通沟通',
                                name: '主管主管主管主管主管主管主管',
                                assigneeName: '马云马云马云',
                                endTime: '2020-10-10',
                            }
                        ]
                    }
                ], // 流程信息
                flowLineProps: {
                    status: 'status',
                    statusText: 'statusText',
                    department: 'tenantDepartmentName',
                    info: 'comment',
                    post: 'name',
                    time: 'endTime',
                    tenant: 'tenantName',
                    assignee: 'assigneeName',
                    subTask: 'subTask',
                    flowText: 'flowTxt',
                    subFlowText: 'subFlowTxt',
                },
                flowColor: {
                    'SUBMITTED': '#1890FF',
                    'APPROVAL': '#000000',
                    'COMMUNICATION': '#29AFB8',
                    'REPLY': '#1890FF',
                    'WAIT_REPLY': '#FAAD14',
                    'CANCEL_COMMUNICATION': '#F5222D',
                    'TODO': '#8C8C8C',
                    'WITHDRAW': '#F5222D',
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
