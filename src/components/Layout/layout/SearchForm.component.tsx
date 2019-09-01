import React, { SyntheticEvent, useState, ChangeEvent } from 'react';

import { Form, SearchInput, SubmitBtn } from './SearchForm.styles';

interface IProps {
  toggled: boolean;
  toggleSearchForm: () => void;
}

export const SearchForm: React.FC<IProps> = ({ toggled, toggleSearchForm }) => {
  const [query, setQuery] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!query) return;

    setQuery('');
    toggleSearchForm();

    console.log(query);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return (
    <Form toggled={toggled} onSubmit={onSubmit}>
      <SearchInput
        type="subit"
        placeholder="Search for products ..."
        onChange={onChange}
        value={query}
      />
      <SubmitBtn>
        <i className="far fa-arrow-alt-circle-right"></i>
      </SubmitBtn>
    </Form>
  );
};
