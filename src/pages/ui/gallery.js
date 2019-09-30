import React from 'react'
import { Row,Col,Card,Modal } from 'antd'
import './ui.less'
const { Meta } = Card
export default class Gallery extends React.Component {
    state= {
        visible: false,
        imgUrl: ''
    }
    componentWillMount(){
        const imgList= [
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','24.png']
        ]
        // 将imgList渲染成标签
        const ListCon= imgList.map(list=> list.map((item,i)=>
                <Card
                    key={i}
                    hoverable={true}
                    cover={<img alt="" src={'/gallery/'+item} />}
                    style={{marginBottom: 10}}
                    onClick={()=>this.handleTapImg(item)}
                >
                    <Meta title="React" description="这是一个瀑布流布局" />
                </Card>
               ))
        this.setState({
            ListCon
        })
    }
    handleTapImg= item=>{
        console.log( '/gallery/'+item)
        this.setState({
            imgUrl: '/gallery/'+item,
            visible: true
        })
    }
    render(){
        return (
            <div className="gallery">
                <Row gutter={10}>
                    <Col span={5}>{this.state.ListCon[0]}</Col>
                    <Col span={5}>{this.state.ListCon[1]}</Col>
                    <Col span={5}>{this.state.ListCon[2]}</Col>
                    <Col span={5}>{this.state.ListCon[3]}</Col>
                    <Col span={4}>{this.state.ListCon[4]}</Col>
                </Row>
                <Modal
                    title="image"
                    width={520 }
                    visible={this.state.visible}
                    onCancel={()=> this.setState({visible: false})}
                    footer={null}
                    >
                   <img src={this.state.imgUrl} style={{width: "100%"}} alt=""></img>
                </Modal>
            </div>
        )
    }
}