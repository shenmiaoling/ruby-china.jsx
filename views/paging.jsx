import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
require ('../styles/paging')
const Paging=React.createClass({
  getInitialState(){
    return {
      topics: '',
      pages:new Array(100),
      digital:this.props.params.item-1
    }
  },

  componentDidMount() {
    console.log(this.state.digital)
    this.paging(this.state.digital)
    let pages=this.state.pages
      for(let i=0;i<pages.length;i++){
         pages[i]=i+1
    }
  },

   paging(id,event){
    fetch('https://ruby-china.org/api/v3/topics?limit=12&offset='+id*12).then((response)=>{
      return response.json()
    }).then((json)=>{
      this.setState({topics:json.topics})
    })
  },
  render() {
    let topics = this.state.topics
    if (topics){
      return(
        <div>
          <div>{topics.map((item, index) => {
            return(
              <div key={index}>
                <h5><Link to={`/topic/${item.id}` }>{item.title}</Link></h5>
                <img src={item.user.avatar_url} className='headportrait'/>
              </div>
              )
          })}
          </div>
           <div>{this.state.pages.map((item,id)=>{
            return (
              <Link to={`/topic/${item}`} onClick={this.paging.bind(this,id)}>{item}</Link>
              )
            })}
           </div>
        </div>
        )
    }
    return(<div><h1>请稍等......</h1></div>)
  }
})
export default Paging;
