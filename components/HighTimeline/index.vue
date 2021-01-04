<template>
    <div>
        <h3>简洁版</h3>
        <bee-high-timeline :flow-data="activityData" skin="pithy" :flow-props="flowLineProps" :flow-color="flowColor"></bee-high-timeline>
        <h3>多彩版</h3>
        <bee-high-timeline :flow-data="activityData" skin="rich" :flow-props="flowLineProps" :flow-color="flowColor"></bee-high-timeline>
        <h3>信息版</h3>
        <bee-high-timeline :flow-data="activityInfoData" skin="info" :flow-props="flowLineProps">
            <template slot="other" slot-scope="scope">
                <div>
                    <i
                        @click="handelDetails(scope)"
                        title="查看详情"
                        class="el-icon-tickets link-pointer"
                        style="color: #1890FF;margin-right: 20px"
                    >
                    </i>
                    <i
                        @click="handleEdit(scope)"
                        title="编辑详情"
                        class="el-icon-edit link-pointer"
                        style="color: #1890FF;"
                    >
                    </i>
                </div>
            </template>
        </bee-high-timeline>
    </div>
</template>

<script>
import { Message } from "element-ui";
var baseUrl = "https://cli.avuejs.com/api/area";
export default {
    data() {
        return {
                activityInfoData: [
                    {
                        endTime: '2010-12-08',
                        startTime: '2010-10-08',
                        mainText: "金融学",
                        statusMainText: "全日制",
                        otherMainText: "本科",
                        subMainText: "广东金金融学院",
                        subStatusMainText: "本科",
                    },
                    {
                        endTime: '2010-12-08',
                        startTime: '2010-10-08',
                        mainText: "法学",
                        statusMainText: "全日制",
                        otherMainText: "本科",
                        subMainText: "中国法律大学",
                        subStatusMainText: "本科",
                    },
                ],
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
    methods: {
        handelDetails(row) {
            Message.success(JSON.stringify(row));
        },
        handleEdit(row) {
            Message.success(JSON.stringify(row));
        }
    }
    
};
</script>
