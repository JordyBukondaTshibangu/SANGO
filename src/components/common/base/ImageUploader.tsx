import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Image from "next/image";

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

const ImageUploader = () => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  function handlePickImage() {
    imageInput.current?.click();
  }

  function handleImageChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPickedImage(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="my-20 flex flex-col items-center gap-2">
      <div
        className={
          pickedImage
            ? `w-full flex items-center justify-center h-[300px]`
            : `w-full flex items-center justify-center h-[100px]`
        }
      >
        {pickedImage && (
          <Image
            src={pickedImage}
            alt="image selected"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {!pickedImage && <span>Add an image</span>}
      <Button
        component="label"
        className="min-w-fit w-24 h-24 flex justify-center items-center bg-grayThird dark:bg-dark text-center py-3 rounded-full"
        onClick={handlePickImage}
        startIcon={<ImageOutlinedIcon className="!text-5xl ml-3" />}
      >
        <VisuallyHiddenInput
          type="file"
          required
          accept="image/png, image/jpeg, image/jpg"
          ref={imageInput}
          onChange={handleImageChanged}
        />
      </Button>
    </div>
  );
};

export default ImageUploader;
