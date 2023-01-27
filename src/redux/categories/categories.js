const STATUS_CHECKED = 'STATUS_CHECKED';

const initialState = [
  {
    id: '1',
    author: 'Joseph',
    title: 'How to Achieve Mastery in Software Development',
    category: 'Software',
  },
  {
    id: '2',
    author: 'John Smith',
    title: 'The Great Gatsby',
    category: 'Fiction',
  },
  {
    id: '3',
    author: 'Akasha',
    title: 'The Unbearable Lightness of Being',
    category: 'Lifestyle',
  },
];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS_CHECKED });

export default categoriesReducer;
