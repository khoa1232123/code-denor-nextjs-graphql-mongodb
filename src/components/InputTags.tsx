import { Cancel } from "@mui/icons-material";
import { Box, Stack, TextField, Typography } from "@mui/material";
import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
  Dispatch,
} from "react";

interface TagsProps {
  data: string;
  handleDelete: (value: string) => void;
}

interface InputTagsProps {
  tags: string[];
  setTags: Dispatch<React.SetStateAction<string[]>>;
}

const InputTags: React.FC<InputTagsProps> = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(); // Prevents the default behavior (e.g., line break or comma in input field)
      if (inputValue.trim() !== "") {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleTagRemove = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div>
      <div className="tags-content">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {tags.map((item, index) => {
            return (
              <Tags data={item} handleDelete={handleTagRemove} key={index} />
            );
          })}
        </Box>
      </div>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        className="input-field mb-2"
        margin="none"
        placeholder={tags.length < 5 ? "Enter tags" : ""}
        onKeyPress={handleInputKeyPress}
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};

const Tags: React.FC<TagsProps> = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "gray",
        // height: "100%",
        display: "flex",
        padding: "0.2rem 0.4rem",
        margin: "0 0.5rem 0.5rem 0",
        borderRadius: "1rem",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        {data}
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default InputTags;
