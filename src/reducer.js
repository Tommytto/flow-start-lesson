//@flow
type TActionAdd = {
  type: "ADD",
  payload: {| +sum2: number |}[]
};

type TFriend = {
  age: 21,
  isMen: boolean,
  friends: string[]
};

type TActionStop = {
  type: "STOP",
  payload: { name: String, friend: TFriend }
};

type TActionTypes = TActionAdd | TActionStop;

function reducer(state: Object, action: TActionTypes) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        something: action.payload.map(item => item.sum)
      };
    }
    case "STOP": {
      return {
        ...state,
        something: action.payload.friend.friends.map((item) => item.go)
      };
    }
    default: {
      (action: empty);
      return state;
    }
  }
}
