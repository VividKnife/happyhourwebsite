// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCreditLog = `query GetCreditLog($id: ID!) {
  getCreditLog(id: $id) {
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
export const listCreditLogs = `query ListCreditLogs(
  $filter: ModelCreditLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreditLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      item {
        id
        name
        link
        imageUrl
        price
        type
      }
      user {
        id
      }
      creditChange
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($id: ID!) {
  getItem(id: $id) {
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
export const listItems = `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          user {
            id
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      creditLogs {
        nextToken
      }
    }
    nextToken
  }
}
`;
