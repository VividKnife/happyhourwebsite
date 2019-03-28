import React from 'react';
import ItemCard from './ItemCard';

function listToMatrix(list, elementsPerSubArray) {
  var matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
          k++;
          matrix[k] = [];
      }

      matrix[k].push(list[i]);
  }

  return matrix;
}


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
    const { classes, items } = this.props;

    const table = listToMatrix(items, 3);

    return (
      <div className="container">
        <div className="row">
            {items.map(item => (
              <div className="col-md-4" style={{paddingTop: "3rem"}} key={item.id}>
                <ItemCard item={item} key={item.id} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default CardList;
