## Flowline Attributes :star:
```js
import { BeeFlowInfo } from 'bee-home';
```
<details>
<summary>显示代码</summary>

```html
<bee-flow-info :flowData='activityData' skin='gq' :defaultProps='flowLineProps' :flowColor='flowColor'></bee-flow-info>

<script>
export default {
    data() {
        return {
            activityData: [
                {
                    status: 'APPROVAL',
                    statusText: '待审批',
                    tenantDepartmentName: '部门名称',
                    tenantName: '',
                    comment: '详情请查',
                    name: '主管',
                    assigneeName: '马云',
                    endTime: '2020-10-10',
                    subTask: []
                },
                {
                    status: 'PASSED',
                    statusText: '通过',
                    tenantDepartmentName: '人力资源部',
                    tenantName: '',
                    comment: '通过通过通过',
                    name: '主管主管主管主管主管主管',
                    assigneeName: '马云',
                    endTime: '2020-10-10',
                    subTask: [
                        {
                            status: 'COMMUNICATION',
                            statusText: '沟通',
                            tenantDepartmentName: '人力资源部',
                            tenantName: '李连杰',
                            comment: '沟通沟通沟',
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
        };
    },
}
</script>
```
<summary>收起</summary>
</details>

## Props
|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|:--------:|:------------:|:------:|
|flowData|数据|Array|—|—|
|skin|皮肤|String|'gq', 'fl'|'gq'|
|defaultProps|默认属性,主要为信息对象属性,如果属性相同可不配置,反之,必须配置|Object|—|见defaultProps|
|flowColor|节点颜色,根据状态配置相关颜色|Obejct|—|见flowColor|

## defaultProps

|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|:--------:|:------------:|:------:|
|status|状态code|String|—|—|
|statusText|状态文本|String|—|—|
|department|部门名称|String|—|—|
|info|审批详情|String|—|—|
|post|岗位|String|—|—|
|time|最后审批时间|Date|—|—|
|tenant|被指定操作者|String|—|—|
|assignee|审批人姓名|String|—|—|
|subTask|子任务流程信息|Array|—|—|

## flowColor
|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|:--------:|:------------:|:------:|
|SUBMITTED|状态code|String|—|'#1890FF'|
|APPROVAL|状态code|String|—|'#FAAD14'|
|COMMUNICATION|状态code|String|—|'#29AFB8'|
|REPLY|状态code|String|—|'#1890FF'|
|WAIT_REPLY|状态code|String|—|'#FAAD14'|
|CANCEL_COMMUNICATION|状态code|String|—|'#F5222D'|
|TODO|状态code|String|—|'#8C8C8C'|
|WITHDRAW|状态code|String|—|'#F5222D'|
|PASSED|状态code|String|—|'#52C41A'|
|TURN_TO_DO|状态code|String|—|'#1890FF'|
|INVALID|状态code|String|—|'#F5222D'|
|ABANDONED|状态code|String|—|'#F5222D'|

