import React, { SyntheticEvent, useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';

import { Form, SearchInput, SubmitBtn } from './SearchForm.styles';
import { fetchProductsByQuery } from '../../../modules/shop/shop.actions';

interface IProps {
  toggled: boolean;
  toggleSearchForm: () => void;
  fetchProductsByQuery: typeof fetchProductsByQuery;
}

const _SearchForm: React.FC<IProps> = ({
  toggled,
  toggleSearchForm,
  fetchProductsByQuery
}) => {
  const [query, updateQuery] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!query) return;

    updateQuery('');
    toggleSearchForm();

    fetchProductsByQuery(query);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateQuery(e.target.value);

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

export const SearchForm = connect(
  null,
  { fetchProductsByQuery }
)(_SearchForm);
