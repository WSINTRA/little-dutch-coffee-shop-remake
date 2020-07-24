export const formObjectCreator = (formType, payload, state) => {
    let objKey = Object.keys(payload)[0];
    let formObject = { ...state[formType], [objKey]: payload[objKey] };
    //creates a controlled field based on incoming payload input field name
    return formObject;
  };