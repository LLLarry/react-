
import JspnP from 'jsonp'
export default class Axios {
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JspnP(options.url,{
                param: options.param
            },function(err,res){
                if(err == null){
                    resolve(res.results)
                }else{
                    reject(err)
                }
            })
        })
    }
}