<template>
    <div>
        <h3>组织架构图</h3>
        <bee-orgchart 
            :chart="chart" 
            :datascource="datascource"
            @dropchart="dropChart"></bee-orgchart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chart: {
                id: 'bee-orgchart',
                nodeContent: 'title',
                nodeNumb: 'id',
                draggable: true,
                exportButton: true,
                exportFilename: 'Bee-org-chart',
                pan: false,
                zoom: false,
                direction: 't2b',
            },
            datascource: {}
        }
    },
        mounted() {
            this.datascource = this.initData()
        },
        methods: {
            initData() {
                return {
                        'name': '广东省厅级市级上海深圳香港纽约伦敦上市集团公司',
                        'title': '广东省厅级市级上海深圳香港纽约伦敦上市集团公司广东省厅级市级上海深圳香港纽约伦敦上市集团公司',
                        'imgurl': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ffinance%2Fcrawl%2F115%2Fw550h365%2F20181011%2FVQE2-hktxqai5731863.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620878185&t=b45c9471fd41893286710ada57024eb3',
                        'id': 0,
                        'children': [
                        { 'name': 'Bo Miao', 'title': 'department manager', 'id': 1 },
                        { 'name': 'Su Miao', 'title': 'department manager', 'id': 2,
                            'children': [
                            { 'name': 'Tie Hua', 'title': 'senior engineer', 'id': 3 },
                            { 'name': 'Hei Hei', 'title': 'senior engineer', 'id': 4,
                                'children': [
                                { 'name': 'Pang Pang', 'title': 'engineer', 'id': 5 },
                                { 'name': 'Xiang Xiang', 'title': '广东省厅级市级上海深圳香港纽约伦敦上市集团公司广东省厅级市级上海深圳香港纽约伦敦上市集团公司', 'id': 6 }
                                ]
                            }
                            ]
                        },
                        { 'name': 'Yu Li', 'title': '广东省厅级市级上海深圳香港纽约伦敦上市集团公司广东省厅级市级上海深圳香港纽约伦敦上市集团公司', 
                        'imgurl': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.namedq.com%2Fuploads%2F20191011%2F17%2F1570787100-agXhylCBtu.jpg&refer=http%3A%2F%2Fimage.namedq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620878289&t=622cc675e17885f31cb4b773105a56c3',
                        'id': 8 },
                        { 'name': 'Yu Tie', 'title': 'department manager', 
                        'imgurl': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgaitaobao3.alicdn.com%2Ftfscom%2Fi2%2F2397141023%2FTB2zUtOF7yWBuNjy0FpXXassXXa_%21%212397141023.jpg_300x300q90.jpg&refer=http%3A%2F%2Fgaitaobao3.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620878409&t=04f17404f8255d915be56aa772d2b621',
                        'id': 12 }
                        ]
                    }
            },
            dropChart(event) {
                    console.log('draggedNode:' + event.detail.draggedNode.querySelector(':scope > .title').textContent
                    + ', dragZone:' + event.detail.dragZone.querySelector(':scope > .title').textContent
                    + ', dropZone:' + event.detail.dropZone.querySelector(':scope > .title').textContent
                    );
                    console.log('draggedNode:' + event.detail.draggedNode.id)
            }
        }
};
</script>
