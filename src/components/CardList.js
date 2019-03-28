import React from 'react';
import ItemCard from './ItemCard';

class CardList extends React.Component {
  state = {
    cardsPreRow: 3,
  };

  componentDidMount() {
    // this.props.subscribeToMoreItems();
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { credits, items } = this.props;

    return (
      <div className="container">
        <div className="row">
            {items.map(item => (
              <div className="col-md-4" style={{paddingTop: "3rem"}} key={item.id}>
                <ItemCard item={item} key={item.id} credits={credits}/>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default CardList;
