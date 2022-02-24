import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
      saveBtn: true,
    };
  }

  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.actButton());
  }

 actButton = () => {
   const {
     name,
     description,
     attr1,
     attr2,
     attr3,
     image,
   } = this.state;

   const maxInput = 90;
   const maxSum = 210;
   const sum = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);

   if (
     name !== ''
    && image !== ''
    && description !== ''
    && parseInt(attr1, 10) <= maxInput
    && parseInt(attr2, 10) <= maxInput
    && parseInt(attr3, 10) <= maxInput
    && parseInt(attr1, 10) >= 0
    && parseInt(attr2, 10) >= 0
    && parseInt(attr3, 10) >= 0
    && sum <= maxSum
   ) {
     this.setState({ saveBtn: false });
   } else {
     this.setState({ saveBtn: true });
   }
 }

 render() {
   const { name,
     description,
     attr1,
     attr2,
     attr3,
     image,
     rare,
     trunfo,
     saveBtn,
   } = this.state;
   return (
     <div>
       <Form
         cardName={ name }
         cardDescription={ description }
         cardAttr1={ attr1 }
         cardAttr2={ attr2 }
         cardAttr3={ attr3 }
         cardImage={ image }
         cardRare={ rare }
         cardTrunfo={ trunfo }
         onInputChange={ this.handleChange }
         isSaveButtonDisabled={ saveBtn }
       />
       <Card
         cardName={ name }
         cardDescription={ description }
         cardAttr1={ attr1 }
         cardAttr2={ attr2 }
         cardAttr3={ attr3 }
         cardImage={ image }
         cardRare={ rare }
         cardTrunfo={ trunfo }
       />
     </div>
   );
 }
}

export default App;
