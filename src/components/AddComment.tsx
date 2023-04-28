import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addCommnetary } from "../store/actions";
import { Props } from "../utils/types";

export const AddComment = ({ id }: Props) => {
  const dispatch = useDispatch<Dispatch>();
  const inputComment = useRef<HTMLInputElement>(null);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      if (inputComment.current?.value === "") return;
      dispatch(addCommnetary(inputComment.current?.value, id));
      inputComment.current.value = "";
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add comment"
        onKeyDown={handleEnter}
        ref={inputComment}
      />
    </div>
  );
};
