import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type ArticleFilterProps = {
  searchArticle: (value: string) => void;
  searchAuthor: (value: string) => void;
  searchCategory: (value: string) => void;
  authors: string[];
  categories: string[];
};

const ArticleFilter: React.FC<ArticleFilterProps> = ({
  searchArticle,
  searchAuthor,
  searchCategory,
  authors,
  categories,
}) => {
  const handleChangeAuthor = (event: SelectChangeEvent) => {
    searchAuthor(event.target.value);
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    searchCategory(event.target.value);
  };

  const handleSearchArticle = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchArticle(event.target.value);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-5">
      <span className="w-full flex-1 relative">
        <SearchIcon className="absolute top-4 right-4 text-2xl text-primary" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="w-full h-full bg-white dark:bg-darkHeader border dark:border-none border-solid border-grayThird outline-none text-lightFontColor dark:text-fontColor"
          placeholder="Search by : Article title, Keyword..."
          onChange={handleSearchArticle}
        />
      </span>
      <div className="w-full flex-1 flex flex-col lg:flex-row items-center">
        <FormControl
          sx={{ m: 1, minWidth: 150 }}
          size="medium"
          className="w-full bg-white dark:bg-darkHeader border dark:border-none border-solid border-grayThird"
        >
          <InputLabel className="text-lightFontColor dark:text-fontColor">
            Author
          </InputLabel>
          <Select
            id="demo-select-small"
            label="Author"
            onChange={handleChangeAuthor}
          >
            {authors.map((author, index) => (
              <MenuItem key={index} value={author}>
                {author}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 150 }}
          size="medium"
          className="w-full bg-white dark:bg-darkHeader border dark:border-none border-solid border-grayThird"
        >
          <InputLabel className="text-lightFontColor dark:text-fontColor">
            Category
          </InputLabel>
          <Select
            id="demo-select-small"
            label="Category"
            onChange={handleChangeCategory}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 150 }}
          size="medium"
          className="w-full bg-white dark:bg-darkHeader border dark:border-none border-solid border-grayThird"
        >
          <InputLabel className="text-lightFontColor dark:text-fontColor">
            Date
          </InputLabel>
          <Select
            id="demo-select-small"
            label="Category"
            onChange={handleChangeCategory}
          >
            <MenuItem value="today">Today </MenuItem>
            <MenuItem value="week">This Week</MenuItem>
            <MenuItem value="month">This Month</MenuItem>
            <MenuItem value="year">This Year</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ArticleFilter;
