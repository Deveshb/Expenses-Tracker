import React from 'react';
import { Router, Route,hashHistory, IndexRoute  } from 'react-router'
import axios from 'axios'

class Admin extends React.Component {
  constructor(){
    super()
    this.state = {
      amount:'',
      comment:'',
      description:'',
      date:'',
      time:'',
      expenses:[]
    }
  }
  componentDidMount(){
    this.getExpenses()
  }
  getExpenses(){
    axios.get('/expense/created/false/false').then((data)=>{
      this.setState({expenses:data.data.data})
    },(err)=>{
      this.context.router.push('/')
    })
  }
  addExpense(e){
    e.preventDefault()
    let postData = {amount:this.state.amount,comment:this.state.comment,description:this.state.description}
    axios.post('/expense/add',postData).then((data)=>{
      this.getExpenses()
      this.setState({
        amount:'',
        comment:'',
        description:'',
        date:'',
        time:'',
      })
    },(err)=>{
      alert('SERVER ERROR TRY AGAIN')
    })
  }
  changeHandler(which,e){
    this.state[which] = e.target.value
    this.setState(this.state)
  }
  render()
  {
  let expenses = []
  expenses = this.state.expenses.map((x,i)=>{
          return <tr key={ i }>
                   <td>{ x.created_on }</td>
                   <td>{ x.created_on }</td>
                   <td>{ x.description }</td>
                   <td>{ x.amount }</td>
                   <td>{ x.comment }</td>
                </tr>
  })
  return (
    <div className="con">
    <h2 className="centerHeading"> Add Expenses </h2>
   <div className="col-sm-6 col-md-6 col-md-offset-3">
    <div className="panel panel-default">
       <form onSubmit={this.addExpense.bind(this)} class="form-inline">
         <input type="date"  name="date" className="form-control" value={this.state.date} onChange={this.changeHandler.bind(this,'date')}/>
         <input type="time" name="time" className="form-control" value={this.state.time} onChange={this.changeHandler.bind(this,'time')}/>
         <input type="text" name="description" placeholder="Description" className="form-control" value={this.state.description} onChange={this.changeHandler.bind(this,'description')} required/>
         <input type="number" name="amount" placeholder="Amount" className="form-control" value={this.state.amount} onChange={this.changeHandler.bind(this,'amount')} required/>
         <textarea placeholder="Comments" name='comments' className="form-control" value={this.state.comment} onChange={this.changeHandler.bind(this,'comment')} required></textarea>
         <button type="submit" className="form-control btn btn-lg btn-primary" >Submit</button>
       </form>
     </div>
    </div>
      <div  className="con">        
        <table className = "table table-striped"> 
          <thead>
                <tr>
                   <th>Date</th>
                   <th>Time</th>
                   <th>Description</th>
                   <th>Amount</th>
                   <th>Comments</th>
                </tr>
             </thead>
             <tbody>
                { expenses }
             </tbody>
          </table>
          </div>
         </div> 
      );
  }  
}

export default Admin;
