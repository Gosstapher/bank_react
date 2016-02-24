var React = require('react');
var Bank = require('../bank/bank.js');

var AccountsList = React.createClass({
  
  render: function(){
    var accounts = this.props.filteredAccounts.map(function(account,index){
      return <li key={index}> {account.owner} : £{account.amount}  {account.details}</li>
    });
    
    return (
      <div><ul>{accounts}</ul></div>
      )
  }




});

module.exports = AccountsList;