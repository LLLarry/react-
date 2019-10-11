// 存放公共方法

export default {
    /**
     * time 要格式化的时间戳
     * isNoLastTime 是否带后面的时分秒
     */
    formateDate(time,isNoLastTime){ 
        if(typeof time != 'number') return  ''
        const dt= new Date(time)
        const Y= dt.getFullYear()
        const M= dt.getMonth()+1 >= 10 ? dt.getMonth()+1 : '0'+(dt.getMonth()+1)
        const D= dt.getDate() >= 10 ?  dt.getDate() : ('0'+ dt.getDate())
        const h= dt.getHours() >= 10 ?  dt.getHours() : ('0'+ dt.getHours())
        const m= dt.getMinutes() >= 10 ?  dt.getMinutes() : ('0'+ dt.getMinutes())
        const s= dt.getSeconds() >= 10 ?  dt.getSeconds() : ('0'+ dt.getSeconds())
        if(isNoLastTime){
            return `${Y}-${M}-${D}`
        }
        return `${Y}-${M}-${D} ${h}:${m}:${s}`
    },
    pagiationFn(data,callback){ //data是后台传过来的数据，回调是改变之后的回调
       return {
            current: data.current || 1, //当钱页数1
            total: data.total,
            pageSize: 5, //每页条数
            showQuickJumper: true, //是否可以快速跳转至某页
            showSizeChanger: true,  //是否可以改变 pageSize
            onChange: callback,
            showTotal: function(total, range){
                console.log(total, range) //当
                return `共${total}条数据，当前页数${range[0]}，每页数据条数${range[1]}`
            }
        }
    }
}