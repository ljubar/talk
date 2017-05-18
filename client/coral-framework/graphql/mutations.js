import {gql} from 'react-apollo';
import withMutation from '../hocs/withMutation';

export const withPostComment = withMutation(
  gql`
    mutation PostComment($comment: CreateCommentInput!) {
      createComment(comment: $comment) {
        ...CreateCommentResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      postComment: comment => {
        return mutate({
          variables: {
            comment
          },
        });
      }
    }),
  });

export const withEditComment = withMutation(
  gql`
    mutation EditComment($id: ID!, $asset_id: ID!, $edit: EditCommentInput) {
      editComment(id:$id, asset_id:$asset_id, edit:$edit) {
        ...EditCommentResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      editComment: (id, asset_id, edit)  => {
        return mutate({
          variables: {
            id,
            asset_id,
            edit,
          },
        });
      }
    }),
  });

export const withPostFlag = withMutation(
  gql`
    mutation PostFlag($flag: CreateFlagInput!) {
      createFlag(flag: $flag) {
        ...CreateFlagResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      postFlag: (flag) => {
        return mutate({
          variables: {
            flag
          }
        });
      }}),
  });

export const withPostDontAgree = withMutation(
  gql`
    mutation CreateDontAgree($dontagree: CreateDontAgreeInput!) {
      createDontAgree(dontagree: $dontagree) {
        ...CreateDontAgreeResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      postDontAgree: (dontagree) => {
        return mutate({
          variables: {
            dontagree
          }
        });
      }}),
  });

export const withDeleteAction = withMutation(
  gql`
    mutation DeleteAction($id: ID!) {
      deleteAction(id:$id) {
        ...DeleteActionResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      deleteAction: (id) => {
        return mutate({
          variables: {
            id
          }
        });
      }}),
  });

  const COMMENT_FRAGMENT = gql`
    fragment CoralRespect_UpdateFragment on Comment {
      tags {
        tag {
          name
        }
      }
    }
  `;

export const withAddTag = withMutation(
  gql`
    mutation AddCommentTag($id: ID!, $asset_id: ID!, $name: String!) {
      addTag(tag: {name: $name, id: $id, item_type: COMMENTS, asset_id: $asset_id}) {
        ...ModifyTagResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      addTag: ({id, name, assetId}) => {
        return mutate({
          variables: {
            id,
            name,
            asset_id: assetId
          },
          optimisticResponse: {
            deleteAction: {
              __typename: 'DeleteActionResponse',
              errors: null,
            }
          },
          update: (proxy) => {
            const fragmentId = `Comment_${id}`;

            // Read the data from our cache for this query.
            const data = proxy.readFragment({fragment: COMMENT_FRAGMENT, id: fragmentId});

            data.tags.push({
              tag: {
                __typename: 'TagLink',
                name
              }
            });

            // Write our data back to the cache.
            proxy.writeFragment({fragment: COMMENT_FRAGMENT, id: fragmentId, data});
          },
        });
      }}),
  });

export const withRemoveTag = withMutation(
  gql`
    mutation RemoveCommentTag($id: ID!, $asset_id: ID!, $name: String!) {
      removeTag(tag: {name: $name, id: $id, item_type: COMMENTS, asset_id: $asset_id}) {
        errors {
          translation_key
        }
      }
    }
  `, {
    props: ({mutate}) => ({
      removeTag: ({id, name, asset_id}) => {
        return mutate({
          variables: {
            id,
            name,
            asset_id
          },
          update: (proxy) => {
            const fragmentId = `Comment_${id}`;

            // Read the data from our cache for this query.
            const data = proxy.readFragment({fragment: COMMENT_FRAGMENT, id: fragmentId});

            console.log('remove', data);

            // Write our data back to the cache.
            proxy.writeFragment({fragment: COMMENT_FRAGMENT, id: fragmentId, data});
          }
        });
      }}),
  });

export const withIgnoreUser = withMutation(
  gql`
    mutation IgnoreUser($id: ID!) {
      ignoreUser(id:$id) {
        ...IgnoreUserResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      ignoreUser: ({id}) => {
        return mutate({
          variables: {
            id,
          },
        });
      }}),
  });

export const withStopIgnoringUser = withMutation(
  gql`
    mutation StopIgnoringUser($id: ID!) {
      stopIgnoringUser(id:$id) {
        ...StopIgnoringUserResponse
      }
    }
  `, {
    props: ({mutate}) => ({
      stopIgnoringUser: ({id}) => {
        return mutate({
          variables: {
            id,
          },
        });
      }}),
  });
