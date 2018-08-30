import React, { Component } from 'react';
import {data} from './data'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:data,
      arrow:"down",
      by:"name"
    }
  }

  sort_table(by,arrow){
    var table = this.state.data
    if(arrow === "up"){
      if(by === "name"){
        table = table.sort((a,b)=>{return a.name.localeCompare(b.name)})
      }
      if(by ==="salary"){
        table = table.sort((a,b)=>{return a.salary - b.salary})
      }if(by === "age"){
        table = table.sort((a,b)=>{return a.age - b.age})
      }
      
    }
    else if(arrow === "down"){
      if(by === "name"){
        table = table.sort((a,b)=>{return b.name.localeCompare(a.name)})
      }
      if(by ==="salary"){
        table = table.sort((a,b)=>{return b.salary - a.salary})
      }if(by === "age"){
        table = table.sort((a,b)=>{return b.age - a.age})
      }
    }
    // this.setState({
    //   data:table
    // })
  }
  render_row(){
    var i = 0
    return this.state.data.map(person=>{
      i++
      return <tr>
        <th scope="row">{i}</th>
      <td>{person.name}</td>
      <td>{person.age}</td>
      <td>{person.salary}</td>
      </tr>
    })
  }

  render_age_title(){
    if(this.state.by === "age" && this.state.arrow==="down"){
      return <span>Age <i class="fas fa-sort-down"></i></span>
    }if(this.state.by === "age" && this.state.arrow === "up"){
      return <span>Age <i class="fas fa-caret-up"></i></span>
    }else{
      return <span>Age</span>
    }
  }

  render_name_title(){
    if(this.state.by === "name" && this.state.arrow==="down"){
      return <span onClick={()=>{
        this.setState({
          by:"name",
          arrow:"up"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}>Name <i class="fas fa-sort-down"></i></span>
    }else if(this.state.by === "name" && this.state.arrow === "up"){
      return <span
      onClick={()=>{
        this.setState({
          by:"name",
          arrow:"down"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}
      >Name <i class="fas fa-caret-up"></i></span>
    }else{
      return <span onClick={()=>{
        this.setState({
          by:"name",
          arrow:"up"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}>Name</span>
    }
  }

  render_salary_title(){
    if(this.state.by === "salary" && this.state.arrow==="down"){
      return <span onClick ={()=>{
        this.setState({
          by:"salary",
          arrow:"up"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}>Salary <i class="fas fa-sort-down"></i></span>
    }if(this.state.by === "salary" && this.state.arrow === "up"){
      return <span onClick={()=>{
        this.setState({
          by:"salary",
          arrow:"down"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}>Salary <i class="fas fa-caret-up"></i></span>
    }else{
      return <span onClick={()=>{
        this.setState({
          by:"salary",
          arrow:"up"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}>Salary</span>
    }
  }


  render_age_title(){
    if(this.state.by === "age" && this.state.arrow==="down"){
      return <span
      onClick={()=>{
        this.setState({
          by:"age",
          arrow:"up"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}
      >Age <i class="fas fa-sort-down"></i></span>
    }if(this.state.by === "age" && this.state.arrow === "up"){
      return <span onClick={()=>{
        this.setState({
          by:"age",
          arrow:"down"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}>Age <i class="fas fa-caret-up"></i></span>
    }else{
      return <span onClick={()=>{
        this.setState({
          by:"age",
          arrow:"up"
        })
        this.sort_table(this.state.by,this.state.arrow)
      }}>Age</span>
    }
  }
  render() {
    return (
      <div className="container">
      <div className="row pt-5">
      <div className="col">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{this.render_name_title()}</th>
      <th scope="col">{this.render_age_title()}</th>
      <th scope="col">{this.render_salary_title()}</th>
    </tr>
  </thead>
  <tbody>
    {this.render_row()}
  </tbody>
</table>
      </div>
      </div>
      </div>
    )
  }
}

export default App;
