export function add(value) {
    return {
      type: "add",
      payload: value,
    };
  }
  
  export function deleteTodo(id) {
    return {
      type: "delete",
      payload: id,
    };
  }
  
  export function toggle(id) {
    return {
      type: "toggle",
      payload: id,
    };
  }