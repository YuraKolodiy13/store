const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
};

const updateOrder = (state, bookId, quantity) => {
  const book = state.books.find((book) => book.id === bookId);

  const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
  const item = state.cartItems[itemIndex];
  let newItem;

  if(item){
    newItem = {
      ...item,
      count: item.count + quantity,
      total: item.total + quantity * book.price
    };

    if((item.count === 1 && quantity === -1) || (item.count === -quantity)){
      return{
        ...state,
        orderTotal: state.orderTotal - state.cartItems[itemIndex].total,
        cartItems: [
          ...state.cartItems.slice(0, itemIndex),
          ...state.cartItems.slice(itemIndex + 1)
        ]
      };
    }
    return{
      ...state,
      orderTotal: state.orderTotal + quantity * book.price,
      cartItems: [
        ...state.cartItems.slice(0, itemIndex),
        newItem,
        ...state.cartItems.slice(itemIndex + 1)
      ]
    };
  }else {
    newItem = {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price
    };
    return{
      ...state,
      orderTotal: state.orderTotal + quantity * book.price,
      cartItems: [...state.cartItems, newItem]
    };
  }
};

const reducer = (state = initialState, action) => {

  switch (action.type){
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS' :
      return{
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE' :
      return{
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case 'BOOK_ADDED_TO_CART' :
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOK_REMOVED_FROM_CART':
      const item = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state
  }
};

export default reducer