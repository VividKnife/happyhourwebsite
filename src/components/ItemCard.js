import React from 'react';

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';

class Card extends React.Component {

  state = {
    loading: false
  }

  addCredit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    API.graphql(graphqlOperation(mutations.createCreditLog, {input: {
     creditChange: 1,
     creditLogUserId: "shufakan",
     creditLogItemId: this.props.item.id
    }})).then(data => {
      console.log('Successfully created creditLog');
      this.setState({
        loading: false
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        loading: false
      });
    });
  }

  removeCredit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    API.graphql(graphqlOperation(mutations.createCreditLog, {input: {
     creditChange: -1,
     creditLogUserId: "shufakan",
     creditLogItemId: this.props.item.id
    }})).then(data => {
      console.log('Successfully created creditLog');
      this.setState({
        loading: false
      });
    }).catch(err => {
      console.log(err);
            this.setState({
              loading: false
      });
    });
  }

  render() {
    let { item, credits } = this.props;

    let remove_disabled = false;
    let add_disabled = false;
    let yourCredit = this.props.item.CreditLogs.items
    .filter(log => log.user.id === "shufakan")
    .reduce(((sum, log) => sum + log.creditChange), 0);
    if (yourCredit <= 0) {
       remove_disabled = true

    } else {
      remove_disabled = false
    }
    if (this.props.credits <= 0) {
        add_disabled = true
    } else {
        add_disabled = false
    }

    const totalCredit = item.CreditLogs.items.reduce(((sum, log) => sum + log.creditChange), 0);
    return (
        <div className="card mb-4 shadow-sm">
          <img src={item.imageUrl} className="bd-placeholder-img card-img-top" alt={item.name} style={{width:"auto", height: "18rem"}}>

          </img>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{`${item.price}                     Current Credits: $${totalCredit}`}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.addCredit} disabled={this.state.loading || add_disabled}>Add Credit</button>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.removeCredit} disabled={this.state.loading || remove_disabled}>Remove My Credit</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Card;
