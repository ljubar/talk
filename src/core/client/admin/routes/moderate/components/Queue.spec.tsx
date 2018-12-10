import { shallow } from "enzyme";
import { noop } from "lodash";
import React from "react";

import { removeFragmentRefs } from "talk-framework/testHelpers";
import { PropTypesOf } from "talk-framework/types";

import Queue from "./Queue";

const QueueN = removeFragmentRefs(Queue);

it("renders correctly with load more", () => {
  const props: PropTypesOf<typeof QueueN> = {
    comments: [],
    settings: {},
    onLoadMore: noop,
    hasMore: true,
    disableLoadMore: false,
    danglingLogic: () => true,
  };
  const wrapper = shallow(<QueueN {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly without load more", () => {
  const props: PropTypesOf<typeof QueueN> = {
    comments: [],
    settings: {},
    onLoadMore: noop,
    hasMore: false,
    disableLoadMore: false,
    danglingLogic: () => true,
  };
  const wrapper = shallow(<QueueN {...props} />);
  expect(wrapper).toMatchSnapshot();
});
