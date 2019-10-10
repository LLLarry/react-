
import JspnP from 'jsonp'
import axios from 'axios'
 import {Modal} from 'antd'
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
    static ajax(opations){
        let loading= {}
        if(loading.isShowIng !=  true){
            loading= document.getElementById('ajaxLoading')
            loading.style.display= "block"
            loading.isShowIng= true
        }
        //let baseUal='https://www.easy-mock.com/mock/5d9eacf6004f4c3d74650d4e/mockapi'
        let baseUal= 'https://easy-mock.bookset.io/mock/5d9ecec47355f52bcfe16647/mockapi'
        return new Promise((resolve,reject)=>{
            axios({
                url: baseUal+opations.url,
                method: opations.type || 'GET',
                timeout: 5000,
                params: opations.params || {}
            }).then(responent=>{
                console.log(responent)
                console.log(loading.isShowIng)
                if(loading.isShowIng == true){
                    loading= document.getElementById('ajaxLoading')
                    loading.style.display= "none"
                    loading.isShowIng= false
                }
                if(responent.status === 200 ){
                    if(responent.data.code === 0){
                        resolve(responent.data.result)
                    }else{
                        Modal.info({
                           title: '提示',
                           content: responent.data.message
                       }) 
                    }
                    
                }else{
                    reject('error')
                }
            })
            .catch(e=>{
                if(loading.isShowIng == true){
                    loading= document.getElementById('ajaxLoading')
                    loading.style.display= "none"
                    loading.isShowIng= false
                } 
                Modal.info({
                    title: '提示',
                    content: '加载失败'
                })
                
            })
        })
    }
}