export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'you got the redux round trip yeow!',
  });
};
