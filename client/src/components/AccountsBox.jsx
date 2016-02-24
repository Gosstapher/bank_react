var React = require('react');
var Bank = require('../bank/bank.js');
var AccountsList = require('./AccountsList.jsx');

var AccountBox = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Total cash in business accounts: £{this.props.bank.totalCash('business')}</h3>
        <AccountsList filteredAccounts={this.props.bank.filteredAccounts('business')}></AccountsList>
        <h3>Total cash in personal accounts: £{this.props.bank.totalCash('personal')}</h3>
        <AccountsList filteredAccounts={this.props.bank.filteredAccounts('personal')}></AccountsList>

      </div>
    )
  }

})

module.exports = AccountBox;