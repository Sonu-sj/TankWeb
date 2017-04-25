import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
injectTapEventPlugin();
const customContentStyle = {
  backgroundColor: 'green'
};
export default class InventoryInput extends React.Component {

  state = {
    open: this.props.open || false,
    Inventory:this.props.Inventory,
    idate:this.props.idate
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    this.props.updateData({
      Inventory:this.state.Inventory,
      idate:this.state.idate
    })
  };

  componentDidMount(){
    this.state = {
      open:true,
      Inventory:this.props.Inventory,
      idate:this.props.idate
    }
  }

    componentDidUpdate(){
    this.state = {
      open:this.props.open,
      Inventory:this.state.Inventory,
      idate:this.props.idate
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Enter Tank Readings"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentClassName="dialogHack"
        >
        <TextField
      value={this.state.Inventory}
      floatingLabelText="Inventory Value" 
      floatingLabelStyle ={{"color":" #fff"}}
      onChange={(e,nv) => this.setState({Inventory:nv})}
    /><br />
          <DatePicker hintText="Inventory Time" hintStyle={{"color":" #fff"}} defaultDate={this.state.idate}/>
        </Dialog>
      </div>
    );
  }
}