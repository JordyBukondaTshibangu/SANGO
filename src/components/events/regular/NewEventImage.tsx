"use client";
import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const NewEventImage = () => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-2">
      <span>Add an image</span>
      <Button
        component="label"
        className="w-fit flex justify-center items-cente"
        // onClick={handleUploadFile}
        startIcon={<ImageOutlinedIcon className="!text-[45px]" />}
      >
        <VisuallyHiddenInput type="file" />
      </Button>
    </div>
  );
};

export default NewEventImage;
