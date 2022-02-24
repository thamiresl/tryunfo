import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /*       hasTrunfo, */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="name"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
              name="description"
              id="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            Attr1
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            Attr2
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            Attr3
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="image"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              data-testid="rare-input"
              name="rare"
              id="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="trunfo"
              id="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            name="save"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  /*   hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
