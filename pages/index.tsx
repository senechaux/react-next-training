import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { Root } from '../src/ui/Home'

const Home: NextPage = () => {
  const fruit = ['apple', 'banana', 'orange', 'grapefruit',
    'mango', 'strawberry', 'peach', 'apricot'];
 
  const [filter, setFilter] = useState('');
 
  return (
    <div className="App">
      <p>
        Type to filter the list:
        <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </p>
      <ol>
      {fruit.filter(f => f.includes(filter) || filter === '')
            .map(f => <li key={f}>{f}</li>)}
      </ol>
      <Root />
    </div>
  );
}

export default Home
