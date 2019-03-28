import React, { Component } from 'react';
import './App.css';
import { isAuthenticated } from './auth';

import CardList from './components/CardList';
import config from './aws-exports';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';
import * as mutations from './graphql/mutations';
// import { Connect } from "aws-amplify-react";

Amplify.configure(config);

 const setAllData = (fun) => {
  API.graphql(graphqlOperation(queries.listItems, {input: {
    limit: 1000
  }})).then(result => {
    console.log(result);
    fun(result.data.listItems.items);
  })
 };

class App extends Component {
  state = {
    items: [],
    credits: 0,
    user: "shufakan"
  }

  myRef = React.createRef();

  createItem = (event, link) => {
    console.log("onSubmmit");
    console.log(event);
    console.log(link);

    const input = this.myRef.current;
    console.log(input.value);

    event.preventDefault();
    API.graphql(graphqlOperation(mutations.getItemInfo, {input: {
      prodUrl: input.value
    }})).then((data) => {
      console.log(data);
      let result = data.data.getItemInfo;
      console.log(result);
      console.log(result['"name"']);
      API.graphql(graphqlOperation(mutations.createItem, { input: {
        name: result.name,
        link: result.imgLink,
        imageUrl: result.imgLink,
        price: result.price
      }})).then(data2 => {
      console.log(data2);
    });
    })
  }

  setItems = (items) => {
    let logs = [];
    items.forEach(item => item.CreditLogs.items.forEach(log => {
      if (log.user.id === this.state.user) {
        logs.push(log);
      }
    }));
    let credits = logs.map(log => log.creditChange)
      .reduce(((sum, c) => sum - c), 5);
    this.setState({
      items,
      credits
    });
  }

  componentDidMount() {
    // const auth = isAuthenticated();
    // console.log(auth)
    setAllData(this.setItems);

    API.graphql(graphqlOperation(subscriptions.onCreateItem)).subscribe({
      next: () => setAllData(this.setItems)
    });

    API.graphql(graphqlOperation(subscriptions.onCreateCreditLog)).subscribe({
      next: () => setAllData(this.setItems)
    });
  }

  render() {
    let creditsLabel = `Credits:  ${this.state.credits}`;
    let n = 0;

    return (
      <div>
        <cards-nav avatar-id='shufakan' stick-top icon-href="/" icon-src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" items={`[{
          "label": "${creditsLabel}",
          "href": "/",
          "id": "parent",
          "alignRight": "true"
        }]`}/>
        <section className="jumbotron text-center">
          <div className="container" style={{paddingTop: "3rem"}}>
            <h1 className="jumbotron-heading"> Welcome to AWS Mobile HappyHour!!</h1>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#newItem">Add a new Item</button>
              <div className="modal fade" id="newItem" tabIndex="-1" role="dialog" aria-labelledby="newItemLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="newItemLabel">New Item</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={this.createItem}>
                        <div className="form-group">
                          <label htmlFor="item-link" className="col-form-label">Paste the item link from <a href="https://primenow.amazon.com/">PrimeNow </a>here:</label>
                          <input type="text" className="form-control" id="item-link" ref={this.myRef}/>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.createItem}>Add item</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <div className="container" style={{paddingTop: "3rem"}}>
          <CardList items={this.state.items} credits={this.state.credits}/>
        </div>
        {/* <Connect
          query={graphqlOperation(queries.listItems)}
          subscription={graphqlOperation(subscriptions.onCreateItem)}
          onSubscriptionMsg={(prev, { onCreateItem }) => {
            return {
              ...prev,
              listItems: {
                ...prev.listItems,
                items: [
                  onCreateItem,
                  ...prev.listItems.items.filter(item => item.id !== onCreateItem.id)
                ]
              }
            };
          }}
        >
          {({data: { listItems }, loading, error}) => {
            if (error) return (<h3>Error: {error}</h3>);
            if (loading || !listItems) return (<kat-spinner/>);
            return (<CardList items={listItems ? listItems.items : []} />);
          }}
        </Connect> */}
      </div>
    );
  }
}

export default App;
