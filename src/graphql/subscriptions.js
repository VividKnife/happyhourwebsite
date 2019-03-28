// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCreditLog = `subscription OnCreateCreditLog {
  onCreateCreditLog {
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
export const onUpdateCreditLog = `subscription OnUpdateCreditLog {
  onUpdateCreditLog {
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
export const onDeleteCreditLog = `subscription OnDeleteCreditLog {
  onDeleteCreditLog {
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
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
