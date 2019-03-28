// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCreditLog = `mutation CreateCreditLog($input: CreateCreditLogInput!) {
  createCreditLog(input: $input) {
    id
    item {
      id
      name
      link
      imageUrl
      price
      type
      CreditLogs {
        nextToken
      }
    }
    user {
      id
      creditLogs {
        nextToken
      }
    }
    creditChange
  }
}
`;
export const updateCreditLog = `mutation UpdateCreditLog($input: UpdateCreditLogInput!) {
  updateCreditLog(input: $input) {
    id
    item {
      id
      name
      link
      imageUrl
      price
      type
      CreditLogs {
        nextToken
      }
    }
    user {
      id
      creditLogs {
        nextToken
      }
    }
    creditChange
  }
}
`;
export const deleteCreditLog = `mutation DeleteCreditLog($input: DeleteCreditLogInput!) {
  deleteCreditLog(input: $input) {
    id
    item {
      id
      name
      link
      imageUrl
      price
      type
      CreditLogs {
        nextToken
      }
    }
    user {
      id
      creditLogs {
        nextToken
      }
    }
    creditChange
  }
}
`;
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
    id
    name
    link
    imageUrl
    price
    type
    CreditLogs {
      items {
        id
        creditChange
      }
      nextToken
    }
  }
}
`;
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    id
    name
    link
    imageUrl
    price
    type
    CreditLogs {
      items {
        id
        creditChange
      }
      nextToken
    }
  }
}
`;
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
    id
    name
    link
    imageUrl
    price
    type
    CreditLogs {
      items {
        id
        creditChange
      }
      nextToken
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    creditLogs {
      items {
        id
        creditChange
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    creditLogs {
      items {
        id
        creditChange
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    creditLogs {
      items {
        id
        creditChange
      }
      nextToken
    }
  }
}
`;
