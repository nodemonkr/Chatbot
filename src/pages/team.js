import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';

const Team = () => {
  const [data, setData] = useState(null);

  const [searchObj, setSearchObj] = useState({
    search_data: '',
  });

  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    setSearchObj((searchObj) => ({ ...searchObj, [name]: value }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(searchObj.search_data);
    try {
      await axios.post('/dataSearch', searchObj).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <SearchBlock>
        <h3>위키백과</h3>
        <form onSubmit={onSubmit}>
          <input
            name='search_data'
            placeholder='검색어를 입력하세요.'
            onChange={onChange}
            value={searchObj.search_data}
          />
          <Button navy>검색</Button>
        </form>
        {data && <textarea rows={10} value={JSON.stringify(data, null, 2)} />}
      </SearchBlock>
    </div>
  );
};

const SearchBlock = styled.div`
  /* width: 20rem;
  height: 20rem;
  background-color: #cdcdcd; */
`;
export default Team;
