import { merge } from "lodash";

export const settings = {
  wordList: {
    banned: [],
    suspect: [],
  },
  auth: {
    displayName: {
      enabled: false,
    },
    integrations: {
      oidc: [],
      local: {
        enabled: true,
        allowRegistration: true,
        targetFilter: {
          admin: true,
          stream: true,
        },
      },
      sso: {
        enabled: false,
        allowRegistration: true,
        targetFilter: {
          admin: true,
          stream: true,
        },
        key: null,
        keyGeneratedAt: null,
      },
      google: {
        enabled: false,
        allowRegistration: true,
        targetFilter: {
          admin: true,
          stream: true,
        },
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost/google/callback",
      },
      facebook: {
        enabled: false,
        allowRegistration: true,
        targetFilter: {
          admin: true,
          stream: true,
        },
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost/facebook/callback",
      },
    },
  },
};

export const moderationActions = [
  {
    id: "07e8f815-e165-4b5d-b438-7163415c8cf7",
    revision: {
      id: "4210dc8b-c212-4f74-9381-913e8c52e51a",
      comment: {
        author: {
          username: "luke2",
          id: "4383c3d3-bb9b-40b9-847a-240f3cf6c6af",
        },
        id: "1b41be9f-510f-41f3-a1df-5a431dc98bf3",
      },
    },
    createdAt: "2018-11-29T16:01:51.897Z",
    status: "ACCEPTED",
    __typename: "CommentModerationAction",
  },
  {
    id: "6869314b-47ef-4cf9-b8ce-42b12bca8231",
    revision: {
      id: "4210dc8b-c212-4f74-9381-913e8c52e51a",
      comment: {
        author: {
          username: "addy",
          id: "4383c3d3-bb9b-40b9-847a-240f3cf6c6af",
        },
        id: "1b41be9f-510f-41f3-a1df-5a431dc98bf3",
      },
    },
    createdAt: "2018-11-29T16:01:45.644Z",
    status: "REJECTED",
    __typename: "CommentModerationAction",
  },
  {
    id: "caebbf7f-4813-42c0-ac3c-46b1be8199e0",
    revision: {
      id: "4210dc8b-c212-4f74-9381-913e8c52e51a",
      comment: {
        author: {
          username: "dany",
          id: "4383c3d3-bb9b-40b9-847a-240f3cf6c6af",
        },
        id: "1b41be9f-510f-41f3-a1df-5a431dc98bf3",
      },
    },
    createdAt: "2018-11-29T16:01:42.060Z",
    status: "ACCEPTED",
    __typename: "CommentModerationAction",
  },
  {
    id: "b2f92717-e4a8-4075-a543-95f7c5eaefb2",
    revision: {
      id: "4210dc8b-c212-4f74-9381-913e8c52e51a",
      comment: {
        author: {
          username: "admin",
          id: "4383c3d3-bb9b-40b9-847a-240f3cf6c6af",
        },
        id: "1b41be9f-510f-41f3-a1df-5a431dc98bf3",
      },
    },
    createdAt: "2018-11-29T16:01:34.539Z",
    status: "REJECTED",
    __typename: "CommentModerationAction",
  },
  {
    id: "9fb2ff3c-7105-4357-99e1-36cdeea49c75",
    revision: {
      id: "4210dc8b-c212-4f74-9381-913e8c52e51a",
      comment: {
        author: {
          username: "mod245",
          id: "4383c3d3-bb9b-40b9-847a-240f3cf6c6af",
        },
        id: "1b41be9f-510f-41f3-a1df-5a431dc98bf3",
      },
    },
    createdAt: "2018-11-29T16:01:30.648Z",
    status: "ACCEPTED",
    __typename: "CommentModerationAction",
  },
];

export const users = [
  {
    id: "user-0",
    username: "Markus",
  },
  {
    id: "user-1",
    username: "Lukas",
  },
  {
    id: "user-2",
    username: "Isabelle",
  },
];

export const baseComment = {
  author: users[0],
  body: "Comment Body",
  createdAt: "2018-07-06T18:24:00.000Z",
  status: "NONE",
  actionCounts: {
    flag: {
      reasons: {
        COMMENT_DETECTED_TOXIC: 0,
        COMMENT_DETECTED_SPAM: 0,
        COMMENT_DETECTED_TRUST: 0,
        COMMENT_DETECTED_LINKS: 0,
        COMMENT_DETECTED_BANNED_WORD: 0,
        COMMENT_DETECTED_SUSPECT_WORD: 0,
        COMMENT_REPORTED_OFFENSIVE: 0,
        COMMENT_REPORTED_SPAM: 0,
      },
    },
  },
};

export const reportedComments = [
  merge({}, baseComment, {
    id: "comment-0",
    author: users[0],
    revision: {
      id: "comment-0-revision-0",
    },
    permalink: "http://localhost/comment/0",
    body:
      "This is the last random sentence I will be writing and I am going to stop mid-sent",
    actionCounts: {
      flag: {
        reasons: {
          COMMENT_REPORTED_SPAM: 2,
        },
      },
    },
  }),
  merge({}, baseComment, {
    id: "comment-1",
    revision: {
      id: "comment-1-revision-1",
    },
    permalink: "http://localhost/comment/1",
    author: users[1],
    body: "Don't fool with me",
    actionCounts: {
      flag: {
        reasons: {
          COMMENT_REPORTED_OFFENSIVE: 3,
        },
      },
    },
  }),
  merge({}, baseComment, {
    id: "comment-2",
    revision: {
      id: "comment-2-revision-2",
    },
    permalink: "http://localhost/comment/2",
    status: "PREMOD",
    author: users[2],
    body: "I think I deserve better",
    actionCounts: {
      flag: {
        reasons: {
          COMMENT_REPORTED_SPAM: 1,
          COMMENT_REPORTED_OFFENSIVE: 1,
        },
      },
    },
  }),
];

export const rejectedComments = reportedComments.map(c => ({
  ...c,
  status: "REJECTED",
}));

export const emptyModerationQueues = {
  reported: {
    count: 0,
    comments: { edges: [], pageInfo: { endCursor: null, hasNextPage: false } },
  },
  pending: {
    count: 0,
    comments: { edges: [], pageInfo: { endCursor: null, hasNextPage: false } },
  },
  unmoderated: {
    count: 0,
    comments: { edges: [], pageInfo: { endCursor: null, hasNextPage: false } },
  },
};

export const emptyRejectedComments = {
  edges: [],
  pageInfo: { endCursor: null, hasNextPage: false },
};