import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { saveList } = this.props;
    return (
      <div>
        {
          saveList.map((element) => (<Card
            key={ element.name }
            cardName={ element.name }
            cardDescription={ element.description }
            cartAttr1={ element.attr1 }
            cartAttr2={ element.attr2 }
            cartAttr3={ element.attr3 }
            cardImage={ element.image }
            cardRare={ element.rare }
            cardTrunfo={ element.trunfo }
          />
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default CardList;
