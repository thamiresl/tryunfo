import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

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
      saveList: [],
      hasTrunfo: false,
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

 save = (event) => {
   event.preventDefault();
   const {
     name,
     description,
     attr1,
     attr2,
     attr3,
     image,
     rare,
     trunfo,
     saveBtn } = this.state;

   const card = {
     name,
     description,
     attr1,
     attr2,
     attr3,
     image,
     rare,
     trunfo,
     saveBtn,
   };
   this.setState((saveState) => ({
     saveList: [...saveState.saveList, card],
     hasTrunfo: [...saveState.saveList, card].some((cardIsTrunfo) => cardIsTrunfo.trunfo),
     name: '',
     description: '',
     attr1: 0,
     attr2: 0,
     attr3: 0,
     image: '',
     rare: 'normal',
     trunfo: false,
   }));
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
     hasTrunfo,
     saveList,
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
         hasTrunfo={ hasTrunfo }
         onInputChange={ this.handleChange }
         isSaveButtonDisabled={ saveBtn }
         onSaveButtonClick={ this.save }
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
       <CardList saveList={ saveList } />
     </div>
   );
 }
}

export default App;
