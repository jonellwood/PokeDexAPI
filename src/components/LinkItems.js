import React from 'react';
import LinkItem from './LinkItem';

function LinkItems ({ items, route }) {
  return (
    <article>
      { items.length
        ? items.map((item) => (
          <LinkItem
            item={item}
            route={route}
            key={item.name}
          />
        ))
        : <div>No data</div> }
    </article>
  );
}

export default LinkItems;
