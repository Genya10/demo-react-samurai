import React from "react";

class ProfileStatus extends React.Component {
 
  state={
    editMode:false,
    status:this.props.status
    }

activateEditMod=()=>{
  this.setState({
    editMode:true
    });  
}

deactivateEditMod=()=>{
  this.setState({
    editMode:false
    });  
    this.props.updateStatus(this.state.status);
}

onStatusChange=(e)=>{
  this.setState({
 status: e.currentTarget.value});
}

componentDidUpdate(prevProps,prevState){
if(prevProps.status !== this.props.status){
  this.setState({
status:this.props.status
  });
}
  console.log('rendering')
}

  render() {
    console.log('Render')
    return (
    <div>
            { !this.state.editMode &&
        <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
        </div>}
        {this.state.editMode &&
        <div>
            <input onChange={this.onStatusChange} autoFocus={true} 
            onBlur={this.deactivateEditMode} value={this.props.status}/>
        </div>
        }
    </div> 
    )
  }
}

export default ProfileStatus;