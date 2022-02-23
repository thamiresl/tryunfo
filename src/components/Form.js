import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label data-testid="name-input" htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              id="name"
            />
          </label>

          <label data-testid="description-input" htmlFor="description">
            Descrição
            <input
              type="textarea"
              name="description"
              id="description"
            />
          </label>

          <label data-testid="attr1-input" htmlFor="attr1">
            Attr1
            <input
              type="number"
              name="attr1"
              id="attr1"
            />
          </label>

          <label data-testid="attr2-input" htmlFor="attr2">
            Attr2
            <input
              type="number"
              name="attr2"
              id="attr2"
            />
          </label>

          <label data-testid="attr3-input" htmlFor="attr3">
            Attr3
            <input
              type="number"
              name="attr3"
              id="attr3"
            />
          </label>

          <label data-testid="image-input" htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              id="image"
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select data-testid="rare-input" name="rare" id="rare">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label data-testid="trunfo-input" htmlFor="trunfo">
            Trunfo
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo"
            />
          </label>

          <button type="submit" data-testid="save-button">Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
