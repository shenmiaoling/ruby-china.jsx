import React from 'react'
import ReactDOM from 'react-dom'
import {Route,Router,browserHistory,Link} from 'react-router'
var ContactView = React.createClass({
  submitHandler(event){
    event.preventDefault();
    fetch('https://ruby-china.org/oauth/token?grant_type=password&username=newteo&password=12345678', {method: 'POST'}).then(function(response){ return response.json() }).then(function(responseJSON){console.log(responseJSON)})
  },
  render() {
    return(
      <form
        className='loginform'>
        <h3 className='login_label'>登录账号</h3>

        <label>
          <div className="alert alert-warning alert-dismissible fade in" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>提示：</strong> 请输入正确的邮箱格式
          </div>
          邮箱：
          <input
          type='text'/>
        </label>
        <br/><br/>
        <label>密码：
          <input type='password'/>
        </label>
        <br/>
        <Link to='signup'>
          <button className='btn btn-primary btn-sm login_button'type='submit'
          onClick={this.submitHandler}>登录</button>
        </Link>
        <br/>
        <label>没有注册账号?立即<a href='https://ruby-china.org/account/sign_in' target="_blank">注册</a></label>
      </form>
   )
  }
});
export default ContactView
