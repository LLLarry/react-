import React from 'react'
import { Carousel,Card } from 'antd'
import './ui.less'

export default class Carouse extends React.Component {
    onChange= ()=> {
        console.log('轮播了')
    }
    render(){
        return(
            <div className="carousel">
                <Card title="轮播图">
                <Carousel afterChange={this.onChange}>
                    <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                </Carousel>
                </Card>

                <Card title="轮播图">
                <Carousel afterChange={this.onChange} autoplay>
                    <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                </Carousel>
                </Card>
            </div>
        )
    }
}