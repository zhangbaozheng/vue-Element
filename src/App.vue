<template>
    <view>
        {{ b }}
        a
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    date: 1607356800000,
                    totalNum: 2,
                    finishNum: 0 /**日历**/,
                    status: 'FINISHED',
                    dateStr: '12月10日',
                    weekStr: '周四',
                },
                {
                    date: 1607529600000,
                    totalNum: 2,
                    finishNum: 0,
                    status: 'WAITING',
                    dateStr: '12月12日',
                    weekStr: '周六',
                },
            ],
        };
    },
    methods: {
        // a() {
        //   let b = a.indexOf("月");
        //   let c = a.indexOf("日");
        //   this.list.map((item, index) => {
        //     return item.dateStrw.slice(b + 1, c);
        //   });
        // },
    },
    computed: {
        b() {
           return this.list.map((item, index) => {
                let b = item.dateStr.indexOf('月');
                let c = item.dateStr.indexOf('日');
                return item.dateStr.slice(b + 1, c);
            });
        },
    },
};
</script>

<style>
</style>