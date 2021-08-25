const GET_LINKS = `
# Write your query or mutation here
query{
  allTodos{
    data {
       item   
       _id
    }
  }
}`;

const CREATE_LINK = `
    mutation($item:String!) {
        createTodoLink(data:{item: $item}) {
             item   
             _id
        }
    }
`;

const UPDATE_LINK = `
  mutation($id:ID!,$item:item) {
        updateTodoLink(id:$id,data:{item:$item}) {
            item
            _id
        }
    }
`;

const DELETE_LINK = `
  mutation($id: ID!) {
        deleteTodoLink( id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_LINKS,
    CREATE_LINK,
    UPDATE_LINK,
    DELETE_LINK,
};